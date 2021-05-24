const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成index.html

module.exports = {
	entry: {
		app: './src/index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Production'
		})
	],
	output: {
		filename: '[name].bundle.js',
		clean: true, //清理dist文件夹 
		path: path.resolve(__dirname, 'dist')
	}
};