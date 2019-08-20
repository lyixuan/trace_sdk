## Usage

* 在index.html文件引入BuryPointHandler.js文件
    ```
    <script type="text/javascript" src="http://test.xd.admin.ministudy.com/trace/BuryPointHandler.js"></script> // 测试
    <script type="text/javascript" src="http://bd.ministudy.com/trace/BuryPointHandler.js"></script>  // 正式
    ```
* 配置：xd('config',{userId,site:2,project:'score'});
    ```
    userId:用户id，从缓存获取
    site：1 电脑端  2移动端
    project：移动端path需要加项目名称，同时pathMap里的traceUrl也要加项目前缀。用于区分不同移动项目路由相同的情况。
    ```
* 路由埋点统计
    ```
    将路由path加入pathMap.js名单，即可统计该路由；
    traceUrl需要与路由path保持一致
    ```
 * 点击事件统计
     ```
     在点击元素上，增加data-traceData属性，并绑定对应的值
     <div data-traceData={widgetName:'',traceName:''}>
     ```
