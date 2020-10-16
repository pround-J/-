console.log("加载完成");

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "goodsdesc":"goodsdesc",
        "nav": "nav",
       
    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
		}
    }
})
 require(["nav","goodsdesc"], function(nav,goodsdesc){
 nav.submenu();
 nav.headShop();
 nav.searchList();
goodsdesc.download();
goodsdesc.zoom();
goodsdesc.btnClick();
goodsdesc.tab();
goodsdesc.backTop()
 })
console.log("加载完成");