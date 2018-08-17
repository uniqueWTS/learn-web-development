/**
 * Webpack Entry
 */
var greet = require('./public/file1'); // 引用模块

var sayHello = function () {
	document.write("Hello, world!");
	greet();
}

sayHello(); //Hello, world!Welcome to Webpack!
