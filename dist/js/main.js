console.log("加载完成");

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "list":"list",
        "nav": "nav",
       
    },
    // shim: {
    //     //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
    //     "jquery-cookie": ["jquery"],
    //     //声明当前模块不遵从AMD
    //     "parabola": {
	// 		exports: "_"
	// 	}
    // }
})
 require(["nav","list"], function(nav,list){
 nav.submenu();
 nav.headShop();
 nav.searchList();
 nav.download();
 nav.carousel();
 nav.slide();

 list.download()
 })
console.log("加载完成");