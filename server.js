const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware'); //接下来是一个 webpack-dev-middleware 配合 express server 的示例。

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(8000, function () {
	console.log('http://localhost:8000');
});