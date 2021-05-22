const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成index.html
// const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理dist文件夹 ,新版本失效

module.exports = {
	mode: 'development',
	//入口
	entry: {
		app: './src/index.js',
	},
	//使用 source map报错的位置信息 
	devtool: 'inline-source-map',
	//插件
	plugins: [
		//生成index.html
		new HtmlWebpackPlugin({
			title: 'Development',
		}),
		//清理dist文件夹  新版本失效
		// new CleanWebpackPlugin(['dist']),
	],
	//出口
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true, //清理dist文件夹 
		publicPath: '/' //接下来是一个 webpack-dev-middleware 配合 express server 的示例。
	},
	//为你提供了一个简单的 web 服务器
	devServer: {
		contentBase: './dist',
		hot: true, //开启热更新功能  模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

};