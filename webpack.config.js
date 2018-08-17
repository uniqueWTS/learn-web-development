/**
 * webpack 配置文件
 * module.exports 对象: 
 * 包含模式: development||production||none
 * 入口(entry): 单个入口(字符串)
 * 出口(output): 对象(输出目录和文件名)
 * 模块属性:
 * 插件: 数组 
 */
var path = require('path'); // nodejs core module
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 开发模式
	mode: 'development',
	// 入口文件
	entry: './index.js',
	// 输出目录和输出文件名称
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: '[name].bundle.js'
	},
	// 插件
	plugins: [
		new HTMLWebpackPlugin({ template : './index.html' })
	]
};