## 学习webpack的demo

### 一、初始化项目
```js
//出现package.json文件
npm init

npm install --save webpack@<version>
npm install --save webpack-cli
```
### 二、对目录进行改造
```
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```
### 三、对index.js和index.html改造
```html
<!--index.html-->
<script src="https://unpkg.com/lodash@4.16.6"></script>
<script src="./src/index.js"></script>

```
```js
//index.js
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
```
### 四、安装lodash和改造目录
```js
npm install --save lodash
//lodash从script标签引入变成npm安装包引入
```
```html
<!--index.html-->
<script src="main.js"></script>

```
```js
//index.js
import _ from 'lodash';
function component() {
    var element = document.createElement('div');
     // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }
  document.body.appendChild(component());
```
```js
npx webpack
//用浏览器打开index.html能看到Hello webpack
```

### 五、新建webpack.config文件
```js
//通过新增的webpack.config生成bundle.js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
```js
npx webpack --config webpack.config.js
//packgae.json
"scripts": {
    "build": "webpack",
},
//用npm run buil命令来替换npx webpack --config webpack.config.js
```

# --------------------------------初级结束！！！

### 六、管理输入资源
+ css资源加载
```js
//webpack 最出色的功能之一就是，除了 JavaScript，还可以通过 loader 引入任何其他类型的文件。
npm install --save-dev style-loader css-loader

```
+ 图片资源加载
```js
npm install --save-dev file-loader
```
+ 字体资源加载
```js
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
```
+ 加载数据
```js
npm install --save-dev csv-loader xml-loader
```

### 七、管理输出资源
+ 输出多个bundle.js文件
```js
module.exports = {
  //项目入口
  entry: {
    app:'./src/index.js',
    print: './src/print.js'
  },
  //项目出口
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
```
+ HtmlWebpackPlugin插件自动改变html引入js文件
```js
/*
  HtmlWebpackPlugin
    ==>更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。
*/
<script src="./app.bundle.js"></script>
<script src="./print.bundle.js"></script>
// npm install --save-dev html-webpack-plugin
```
+ 清理 /dist 文件夹
```js
// npm install --save clean-webpack-plugin //踩坑！！！弃用
output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
```
### 七、开发调试
+ Using source maps
```js
module.exports = {
  devtool: 'inline-source-map',
}
```
+ 添加package.json
```js
//可以监听到dis文件夹的变化
"scripts": {
    "watch": "webpack --watch"
},
```
+ HRM热更新
```js
npm install --save webpack-dev-server
devServer: {
    static: './dist'//踩坑！！！static
  },
```