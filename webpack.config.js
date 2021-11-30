const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //关联js和html
module.exports = {
  //项目入口
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  //项目出口
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
};