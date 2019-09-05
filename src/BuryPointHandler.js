;(function (window) {
  'use strict';

  const SERVER_HOST = {
    dev :'http://172.16.109.87:28086',
    pro : 'http://bd.ministudy.com/inspectorapis'
  }[window.env];

  let xdconfig = null;

  let onloadEvent = function () {
    const origin =  getOrigin();
    const pathname = getPath();
    clearInterval(window.timer);
    postPageData(origin, pathname);
    intervalRecord();
  };

  let intervalRecord = function () {
    xdconfig.pathname = getPath();
    window.timer = setInterval(function () {
      if (isPathChanged()) {
        const origin =  getOrigin();
        const pathname = getPath();
        xdconfig.pathname = getPath();
        postPageData(origin, pathname);
      }
    }, 250);
  };

  let clickEvent = function (e) {
    // 按钮点击统计
    const {target} = e;
    const {dataset} = target||{};
    const {trace = null} = dataset||{};
    if(trace){
      const obj = JSON.parse(trace);
      const traceName = obj.traceName;
      const widgetName = obj.widgetName;
      const origin = getOrigin();
      const pathname = getPath();
      postBtnData(origin, pathname,traceName, widgetName);
    }
  };

  let postPageData = function (origin,pathname) {
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

  let postBtnData = function (origin, pathname,traceName, widgetName) {
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
    if (getPath() !== xdconfig.pathname) {
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

  let getPath = function () {
    let hash = window.location.hash;
    const pathname = window.location.pathname;
    const hasSearch = window.location.hash.indexOf('?') > -1;
    if(hasSearch) {
      hash = hash.slice(0,hash.indexOf('?'));
    }
    const path = hash ? pathname+hash : pathname;
    return path;
  };

  let getOrigin = function () {
    const origin = window.location.origin;
    return origin;
  };


  let fetchSend = function (sendData) {
    if(!originCheck()){
      return
    }
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

  let originCheck = function () {
    if(window.env==='pro'){
      const origin = getOrigin();
      if(origin.indexOf('localhost')>-1||origin.indexOf('test.')>-1||origin.indexOf('dev')>-1||origin.indexOf('172.')>-1){
        return false
      }
    }
    return true
  };
  let xd = function (type, options) {
    if (type === 'config') {
      xdconfig = options;
    }
  };

  window.xd = xd;
  window.onload = onloadEvent;
  window.addEventListener('click', clickEvent);

}(window));