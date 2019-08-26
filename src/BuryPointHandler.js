;(function (window) {
  'use strict';

  const dev = 'http://172.16.109.87:28086';
  const pro = 'http://bd.ministudy.com/inspectorapis';

  const SERVER_HOST = dev;

  let xdconfig = null;

  let onloadEvent = function () {
    // 页面统计
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    clearInterval(window.timer);
    if (!origin || !pathname) {
      return;
    }
    postDataPage(origin, pathname);
    if (xdconfig && xdconfig.site === 2) {
      intervalRecord();
    }
  };

  let intervalRecord = function () {
    xdconfig.pathname = window.location.pathname;
    window.timer = setInterval(function () {
      if (isPathChanged()) {
        const origin = window.location.origin;
        const pathname = window.location.pathname;
        xdconfig.pathname = window.location.pathname;
        postDataPage(origin, pathname);
      }
    }, 250);
  };

  let pathChange = function (event) {
    // 页面统计
    const origin = event.target.origin;
    const pathname = event.target.pathname;
    const tag = event.target.tagName;
    if(tag === 'A'){
      if (!origin || !pathname || !xdconfig || !xdconfig.getUserId || !xdconfig.site) {
        return;
      }
      postDataPage(origin, pathname);
    } else {
      intervalRecord();
    }
  };

  let clickEvent = function (e) {
    // 按钮点击统计
    const {target={}} = e;
    const {dataset} = target||{};
    const {trace = null} = dataset||{};
    if(trace){
      const obj = JSON.parse(trace);
      const traceName = obj.traceName;
      const widgetName = obj.widgetName;
      const origin = window.location.origin;
      const pathname = window.location.pathname;
      postDataBtn(origin, pathname, traceName, widgetName);
    }
  };


  let postDataPage = function (origin, pathname) {
    if (!isInList(pathname)) return;
    const sendData = {
      traceType: 200,
      traceUrl: origin + pathname,
      userId:xdconfig.getUserId(),
      site:xdconfig.site,
      ...getMapName(pathname),
    };

    fetchSend(sendData);
  };

  let postDataBtn = function (origin, pathname, traceName, widgetName) {
    const sendData = {
      traceType: 300,
      traceUrl: origin + pathname,
      traceName,
      widgetName,
      userId:xdconfig.getUserId(),
      site:xdconfig.site,
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
    fetch(`${SERVER_HOST}/trace/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(sendData)
    }).then((res)=>{
      console.log("success",JSON.stringify(sendData));
    }).catch(function (e) {
      console.error("fetch fail", JSON.stringify(e));
    });
  };
  let xd = function (type, options) {
    if (type === 'config') {
      xdconfig = options;
    }
  };

  window.xd = xd;
  window.onload = onloadEvent;
  window.addEventListener('click', pathChange);
  window.addEventListener('click', clickEvent);

}(window));