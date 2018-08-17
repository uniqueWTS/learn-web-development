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
var HTMLWebpackPlugin = require('html-webpack-plugin');//html-dom
var cleanWebpackPlugin = require('clean-webpack-plugin'); //clean before rebuild
var miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// 开发模式
	// mode: 'development',
	// 入口文件
	// entry: './index.js',
	entry: {
		home: './index.js',
		about:'./about.js',
	},
	// 输出目录和输出文件名称
	output: {
		path: path.resolve(__dirname, 'site'),
		filename: './public/[name].bundle.js'/*,
		publicPath: './public'*/
	},
	// 插件
	plugins: [
		new cleanWebpackPlugin(['site'],{
			root: __dirname,
		  verbose:  true,
		  dry:      false
		}),
		new HTMLWebpackPlugin({
			title: "Home",
			filename: "index.html",
			template: "public/index.html",
			inject: "body",
			chunks: ['home']
		}),
		new HTMLWebpackPlugin({ 
			title: "About",
			filename: "about.html",
			template: "public/about.html",
			inject: "body",
			chunks: ['about']
		}),
		new miniCssExtractPlugin({
			filename: './public/[name].css',
			chunkFilename: './public/[id].css'
		})
	],
	// 模块转换
	module: {
		rules: [
			{ 
				test: /\.css$/, 
				use: [
				{
					loader: miniCssExtractPlugin.loader
				}, 
				'css-loader'] 
			},
			{
				test: /\.(jpg|gif|png)$/,
				use : [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					}
				]
			}
		]
	}
};