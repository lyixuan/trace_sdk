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
    document.write("<script type='text/javascript'  src="+url+"></script>");
  }
  addScript(`${SERVER_HOST}/trace/BuryPointHandler.js?v=${Math.random()}`);

}(window));