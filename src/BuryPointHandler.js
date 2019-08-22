;(function (window) {
  'use strict';

  const dev = 'http://test.xd.admin.ministudy.com';
  const pro = 'http://bd.ministudy.com';
  let SERVER_HOST = {
    [dev]: dev,
    [pro]: pro,
  }[window.location.origin];

  if (!SERVER_HOST) SERVER_HOST = dev;

  let xdconfig = null;

  let onloadEvent = function () {
    // 页面统计
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    if (!origin || !pathname) {
      return;
    }
    postDataPage(origin, pathname);
    if (xdconfig && xdconfig.site === 2) {
      xdconfig.pathname = window.location.pathname;
      setInterval(function () {
        if (isPathChanged()) {
          const origin = window.location.origin;
          const pathname = window.location.pathname;
          xdconfig.pathname = window.location.pathname;
          postDataPage(origin, pathname);
        }
      }, 150);
    }
  };

  let pathChange = function (event) {
    // 页面统计
    const origin = event.target.origin;
    const pathname = event.target.pathname;
    if (!origin || !pathname || !xdconfig || !xdconfig.userId || !xdconfig.site) {
      return;
    }
    postDataPage(origin, pathname);
  };

  let clickEvent = function (e) {
    // 按钮点击统计
    console.log('click')
  };


  let postDataPage = function (origin, pathname) {
    if (!isInList(pathname)) return;
    const sendData = {
      traceType: 200,
      traceUrl: origin + pathname,
      ...getMapName(pathname),
      ...xdconfig
    };

    fetchSend(sendData);
  };

  let postDataBtn = function (origin, pathname, traceName, widgetName) {
    const sendData = {
      traceType: 300,
      traceUrl: origin + pathname,
      traceName,
      widgetName,
      ...xdconfig
    };

    fetchSend(sendData);
  };

  let isPathChanged = function () {
    if (window.location.pathname !== xdconfig.pathname) {
      return true;
    }
  };

  let isInList = function (currentPath) {
    if (xdconfig && xdconfig.project) {
      currentPath = `/${xdconfig.project}${currentPath}`
    }
    const list = UrlWhiteList || [];
    return list.some((item) => {
      return item.traceUrl === currentPath;
    })
  };

  let getMapName = function (currentPath) {
    if (xdconfig && xdconfig.project) {
      currentPath = `/${xdconfig.project}${currentPath}`
    }
    const list = UrlWhiteList || [];
    const result = {
      traceName: '',
      widgetName: '',
    };
    for (let i = 0; i < list.length; i++) {
      if (list[i].traceUrl === currentPath) {
        result.traceName = list[i].traceName;
        result.widgetName = list[i].widgetName;
        break;
      }
    }
    return result;
  };

  let fetchSend = function (sendData) {
    delete sendData.project;
    delete sendData.pathname;
    alert(JSON.stringify(sendData))
    // fetch(`${SERVER_HOST}/inspectorapis/trace/add`, {
    fetch(`http://172.16.58.18:8086/trace/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(sendData)
    }).then((res)=>{
      alert(JSON.stringify(res))
    }).catch(function (e) {
      console.error("fetch fail", JSON.stringify(e));
    });
  };

  let xd = function (type, options) {
    if (type === 'config') {
      xdconfig = options;
    }
  };

  window.onload = onloadEvent;
  window.xd = xd;
  window.addEventListener('click', pathChange);
  window.addEventListener('click', clickEvent);

  var UrlWhiteList = [
    {
      widgetName:'新质检单管理',
      traceName:'质检管理/新质检单管理',
      traceUrl:'/inspector/qualityAppeal/qualityNewSheet'
    },
    {
      widgetName:'质检申诉管理',
      traceName:'质检管理/质检申诉管理',
      traceUrl:'/inspector/qualityAppeal/qualityAppeal'
    },
    {
      widgetName:'APP统计',
      traceName:'运营分析/APP统计',
      traceUrl:'/inspector/ko'
    },
    {
      widgetName:'KO日报',
      traceName:'运营分析/KO日报',
      traceUrl:'/inspector/allReport/koDaily'
    },
    {
      widgetName:'群组管理',
      traceName:'运营分析/群组管理',
      traceUrl:'/inspector/koUserOperation/userOperation'
    },
    {
      widgetName:'学员查询',
      traceName:'运营分析/学员查询',
      traceUrl:'/inspector/koUserData'
    },
    {
      widgetName:'学分待申诉',
      traceName:'学分管理/学分待申诉',
      traceUrl:'/inspector/scoreAppeal/awaitAppeal'
    },
    {
      widgetName:'在途学分申诉',
      traceName:'学分管理/在途学分申诉',
      traceUrl:'/inspector/scoreAppeal/onAppeal'
    },
    {
      widgetName:'结案学分申诉',
      traceName:'学分管理/结案学分申诉',
      traceUrl:'/inspector/scoreAppeal/finishAppeal'
    },
    {
      widgetName:'质检标注',
      traceName:'运营分析/质检标注',
      traceUrl:'/inspector/qualityMarking'
    },
    {
      widgetName:'报考督学',
      traceName:'运营分析/报考督学',
      traceUrl:'/inspector/entrancePlatform/statistics'
    },
    {
      widgetName:'质检报表',
      traceName:'运营分析/质检报表',
      traceUrl:'/inspector/allReport/qualityReport'
    },
    {
      widgetName:'运营数据',
      traceName:'免费学/运营数据',
      traceUrl:'/inspector/allReport/freeStudy'
    },
    {
      widgetName:'创收',
      traceName:'低人效运营/创收',
      traceUrl:'/inspector/allReport/incomeAll'
    },
    {
      widgetName:'退费总览',
      traceName:'低人效运营/退费总览',
      traceUrl:'/inspector/allReport/refundOverview'
    },
    {
      widgetName:'退费阶段',
      traceName:'低人效运营/退费阶段',
      traceUrl:'/inspector/allReport/refundPhase'
    },
    {
      widgetName:'退费-自变量',
      traceName:'低人效运营/退费-自变量',
      traceUrl:'/inspector/allReport/refundDetailZibianliang'
    },
    {
      widgetName:'退费-芒格',
      traceName:'低人效运营/退费-芒格',
      traceUrl:'/inspector/allReport/refundDetailMangge'
    },
    {
      widgetName:'退费-狐逻泰罗',
      traceName:'低人效运营/退费-狐逻泰罗',
      traceUrl:'/inspector/allReport/refundDetailHuluo'
    },
    //  移动端
    {
      widgetName:'学分统计',
      traceName:'学分统计',
      traceUrl:'/score/indexPage'
    },
    {
      widgetName:'学分列表',
      traceName:'学分统计/学分列表',
      traceUrl:'/score/details'
    },
    {
      widgetName:'学分详情',
      traceName:'学分统计/学分列表/学分详情',
      traceUrl:'/score/demention'
    },
    {
      widgetName:'绩效统计',
      traceName:'绩效统计',
      traceUrl:'/achievement/indexPage/teacher'
    },
    {
      widgetName:'绩效总览',
      traceName:'绩效总览',
      traceUrl:'/achievement/indexPage/boss/pandect'
    },
    {
      widgetName:'每月绩效',
      traceName:'每月绩效',
      traceUrl:'/achievement/indexPage/boss/monthly'
    },
    {
      widgetName:'绩效分档',
      traceName:'绩效统计/每月绩效/绩效分档',
      traceUrl:'/achievement/level'
    },
    {
      widgetName:'绩效详情',
      traceName:'绩效统计/每月绩效/绩效分档/绩效详情',
      traceUrl:'/achievement/details'
    },
  ];
}(window));