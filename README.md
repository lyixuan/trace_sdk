## 介绍
* 功能：埋点统计sdk

* 支持：支持所有前端框架

* 统计范围：页面pv统计、页面元素点击事件cv统计


## 使用

* 1、入口页面引入js文件
    ```
    // 正式环境
    <script type="text/javascript" src="http://bd.ministudy.com/trace/trace_sdk.js?v=1.0"></script>

    // 测试环境
    <script type="text/javascript" src="http://172.16.117.64:9999/trace/trace_sdk.js?v=1.0"></script>
    ```
* 2、配置项目参数;


    site:(Number  必传)，1 pc端 2 移动端；

    getUserId:(return Number 必传)，获取登录用户id

    project:（选传）如果不同项目有相同路由，可添加前缀以区分不同项目
    ```
    <script>

       xd('config',{ getUserId:function, site:2, project:'achievement'});

       function getUserId () return userId;

    </script>
    ```
* 3.1、页面pv统计

      页面刷面或切换统计

      将要统计的页面路径加入 PathMap.js 名单，即可自动统计该页面；
      ```
        {
          widgetName:'KO日报',
          traceName:'运营分析/KO日报',
          traceUrl:'/inspector/allReport/koDaily'
        }
      ```

* 3.2、元素点击事件cv统计

      点击绑定 trace 属性的元素可统计

      在html元素上，增加 data-trace 属性，绑定值；

     ```
     eg：<div data-trace='{"widgetName":"待申诉-查询","traceName":"学分申诉/待申诉/查询"}'>
     ```
* 3.3、手动调用方法触发统计

      ```
      const obj = {widgetName:"待申诉-查询",traceName:"学分申诉/待申诉/查询"}
      const {BI = {}} = window;
      BI.traceV && BI.traceV(obj)
      ```

