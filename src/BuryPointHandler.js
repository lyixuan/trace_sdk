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
    console.log(e)
    // if(没有data属性){
    //   return
    // }
    // todo
    const traceName = '';
    const widgetName = '';
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    // postDataBtn(origin, pathname, traceName, widgetName);
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
    fetch(`${SERVER_HOST}/inspectorapis/trace/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(sendData)
    }).catch(function (e) {
      console.error("fetch fail", JSON.stringify(e));
    });
  };

  let xd = function (type, options) {
    if (type === 'config') {
      xdconfig = options;
    }
  };

  function addScript(url){
    document.write("<script language=javascript src="+url+"></script>");
  }

  addScript(`${SERVER_HOST}/trace/PathMap.js`);
  window.onload = onloadEvent;
  window.addEventListener('click', pathChange);
  window.addEventListener('click', clickEvent);
  window.xd = xd;
}(window));