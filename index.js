/**
 * Webpack Entry
 */
var greet = require('./public/file1'); // 引用JS模块
import './public/index.css'; //引用CSS模块

var sayHello = function () {
	document.write("<h2>Hello, world!</h2>");
	greet();
}

sayHello(); //Hello, world!Welcome to Webpack!
