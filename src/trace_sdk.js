;(function(){
  'use strict';
  const SERVER_HOST = 'http://bd.ministudy.com/trace';
  function addScript(url){
    document.write("<script type='text/javascript'  src="+url+"></script>");
  }
  addScript(`${SERVER_HOST}/BuryPointHandler.js?v=${Math.random()}`);
  addScript(`${SERVER_HOST}/PathMap.js?v=${Math.random()}`);

}());