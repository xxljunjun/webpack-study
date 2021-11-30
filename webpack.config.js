const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //关联js和html
module.exports = {
  mode: 'development',
  //Using source maps
  // devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true
  },
  //项目入口
  entry: {
    app: './src/index.js',
    another: './src/another-module.js',
  },
  //项目出口
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
  ],
};