;(function(window){
  'use strict';
  // 环境区分
  const dev = 'http://test.xd.admin.ministudy.com';
  const pro = 'http://bd.ministudy.com';
  let SERVER_HOST = {
    [dev]: dev,
    [pro]: pro,
  }[window.location.origin];

  if(!SERVER_HOST) SERVER_HOST=dev;

  function addScript(url){
    document.write("<script language=javascript src="+url+"></script>");
  }
  addScript(`${SERVER_HOST}/trace/BuryPointHandler.js?${Math.random()}`);

}(window));