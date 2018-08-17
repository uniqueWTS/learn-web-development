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
	// entry: './index.js',
	entry: {
		home: './index.js',
		about:'./about.js'
	},
	// 输出目录和输出文件名称
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: 'public/[name].bundle.js'
	},
	// 插件
	plugins: [
		new HTMLWebpackPlugin({
			title: "Home",
			filename: "index.html",
			template: "public/index.html",
			inject: "head",
			chunks: ['home']
		}),
		new HTMLWebpackPlugin({ 
			title: "About",
			filename: "about.html",
			template: "public/about.html",
			inject: "body",
			chunks: ['about']
		})
	],
	// 模块转换
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	}
};