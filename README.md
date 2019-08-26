## 介绍
* 功能：埋点统计sdk

* 支持：本sdk支持所有前端框架

* 统计范围：页面统计、元素点击事件埋点统计


## 使用

* 在 index.html 页面引入js文件
    ```
    <script type="text/javascript" src="http://bd.ministudy.com/trace/trace_sdk.js?v=1.0"></script> // 正式环境

    <script type="text/javascript" src="http://test.xd.admin.ministudy.com/trace_sdk.js?v=1.0"></script> // 测试环境
    ```
* 在 index.html 页面，配置项目参数;
    ```
    <script>

       xd('config',{ getUserId:function, site:2, project:'achievement'});

       function getUserId () return userId;

    </script>
    ```
* 页面统计
    ```
    将要统计的页面路由path加入PathMap.js名单，即可统计该页面；
    traceUrl必须与路由path一致
    ```
 * 按钮点击事件统计
     ```
     在点击元素上，增加data-traceData属性，并绑定对应的值
     eg：<div data-trace='{"widgetName":"待申诉-查询","traceName":"学分申诉/待申诉/查询"}'>
     ```
