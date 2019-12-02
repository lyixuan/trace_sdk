; (function () {
  'use strict';

  if(!window.env){
      window.env = 'dev'; // dev 走测试环境 pro 走生产环境
  }
  console.log(7,window.env)
  const SERVER_HOST = {
    dev: 'http://172.16.117.64:9999/trace',
    pro: 'http://bd.ministudy.com/trace',
    pro2:'https://h5-test.commeal.cn/trace'
  }[window.env];

  window.examweb = window.env === 'dev' ? '' : '/examweb';

  function addScript(url) {
    document.write("<script type='text/javascript'  src=" + url + "></script>");
  }
  addScript(`${SERVER_HOST}/BuryPointHandler.js?v=${Math.random()}`);
  addScript(`${SERVER_HOST}/PathMap.js?v=${Math.random()}`);

}());