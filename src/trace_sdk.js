;(function(){
  'use strict';
  const SERVER_HOST = 'http://bd.ministudy.com';
  function addScript(url){
    document.write("<script type='text/javascript'  src="+url+"></script>");
  }
  addScript(`${SERVER_HOST}/trace/BuryPointHandler.js?v=${Math.random()}`);

}());