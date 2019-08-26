;(function(){
  'use strict';

  window.env = 'dev'; // dev 走测试环境 pro 走生产环境

  const SERVER_HOST = {
    dev :'http://172.16.117.64:9999/trace',
    pro : 'http://bd.ministudy.com/trace'
  }[window.env];

  function addScript(url){
    document.write("<script type='text/javascript'  src="+url+"></script>");
  }
  addScript(`${SERVER_HOST}/BuryPointHandler.js?v=${Math.random()}`);
  addScript(`${SERVER_HOST}/PathMap.js?v=${Math.random()}`);

}());