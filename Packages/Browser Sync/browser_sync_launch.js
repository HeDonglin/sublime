var bs = require('browser-sync').create('ST3');

args = process.argv.slice(2);

bs.init({
	server:args[0],
	files:args[1].split(','),
	index:args[2],
	startPath:args[2],
	logLevel:"silent",
    browser:"chrome",
    notify: false, //浏览器右上角小提示
    port:9090,
    // browser: ["chrome"], //可以配置多个浏览器
    // files: args[1].split(','), //监听文件必备
    // proxy: 'localhost:3000', //连接到phpstudy服务器端口(配合php调试)
    injectChanges: true//如果为true即是注入css,并不会刷新页面,对于@import方式不友好,所以改为false来刷新页面;
});
