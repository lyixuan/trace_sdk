## 介绍
* 功能：埋点统计sdk

* 支持：支持所有前端框架

* 统计范围：页面统计、元素点击事件埋点统计


## 使用

* 在 index.html 页面引入js文件
    ```
    // 正式环境
    <script type="text/javascript" src="http://bd.ministudy.com/trace/trace_sdk.js?v=1.0"></script>

    // 测试环境
    <script type="text/javascript" src="http://172.16.117.64:9999/trace/trace_sdk.js?v=1.0"></script>
    ```
* 在 index.html 页面，配置项目参数;

    说明： site:(必传 Number)1 pc端 2 移动端；  getUserId:(必传 Number)获取项目用户id的function    project:（选传）移动端需要添加一个path前缀，以区分不同项目相同path的情况
    ```
    <script>

       xd('config',{ getUserId:function, site:2, project:'achievement'});

       function getUserId () return userId;

    </script>
    ```
* 页面统计

  统计节点：1、刷新页面统计一次 2、从其他页面切换至本页面统计一次
    ```
    将要统计的页面加入 PathMap.js 名单，即可统计该页面；

    eg:
      {
        widgetName:'KO日报',
        traceName:'运营分析/KO日报',
        traceUrl:'/inspector/allReport/koDaily'
      }
    ```
 * 按钮点击事件统计

    统计节点：每点击绑定 trace 属性的元素，统计一次

     ```
     在统计元素上，增加 data-trace 属性，绑定值；

     eg：<div data-trace='{"widgetName":"待申诉-查询","traceName":"学分申诉/待申诉/查询"}'>
     ```
