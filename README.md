## Usage

* 在index.html文件引入js文件
    ```
    <script type="text/javascript" src="http://bd.ministudy.com/trace/trace_sdk.js"></script>
    ```
* 配置：xd('config',{userId,site:2,project:'score'});
    ```
    userId:用户id，从缓存获取
    site：1 电脑端  2移动端
    project：移动端path需要加项目名称，同时PathMap.js里的traceUrl也要加项目前缀。用于区分不同移动项目路由相同的情况。
    ```
* 页面统计
    ```
    将要统计的页面路由path加入PathMap.js名单，即可统计该页面；
    traceUrl必须与路由path一致
    ```
 * 按钮点击事件统计
     ```
     在点击元素上，增加data-traceData属性，并绑定对应的值
     eg：<div data-traceData={widgetName:'待申诉-查询',traceName:'学分申诉/待申诉/查询'}>
     ```
