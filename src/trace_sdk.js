; (function () {
  'use strict';

 window.env = 'pro'; // dev 走测试环境 pro 走生产环境

  const SERVER_HOST = {
    dev: 'https://h5-test.commeal.cn/trace',
    pro: 'https://h-bd.ministudy.com/trace',
  }[window.env];

  window.examweb = window.env === 'dev' ? '' : '/examweb';

  function addScript(url) {
    document.write("<script type='text/javascript'  src=" + url + "></script>");
  }
  addScript(`${SERVER_HOST}/BuryPointHandler.js?v=${Math.random()}`);
  addScript(`${SERVER_HOST}/PathMap.js?v=${Math.random()}`);

}());