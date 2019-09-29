## 工作时间轴

### 上午

#### 广告活动落地页

调试题库保存和更新接口

抽象 active-page-renderer 为依赖包，vue 作为 peerDependencies 加入依赖。

```js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'active-page-renderer.js',
    library: 'activePageRenderer',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{ loader: 'url-loader', options: { limit: 10000 } }],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new VueLoaderPlugin(),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  externals: {
    vue: 'vue',
  },
};
```

```json
{
  "name": "active-page-renderer",
  "version": "1.0.0",
  "description": "",
  "main": "dist/active-page-renderer.js",
  "module": "dist/avtive-page-renderer.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "build": "webpack"
  },
  "dependencies": {
    "axios": "^0.19.0",
    "number-precision": "^1.3.1",
    "qs": "^6.8.0",
    "ua-parser-js": "^0.7.20",
    "vant": "^2.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.6.2",
    "@babel/plugin-transform-runtime": "^7.6.2",
    "@babel/preset-env": "^7.6.2",
    "babel-loader": "^8.0.6",
    "babel-plugin-import": "^1.12.2",
    "css-loader": "^3.2.0",
    "mini-css-extract-plugin": "^0.8.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "terser-webpack-plugin": "^2.1.0",
    "url-loader": "^2.1.0",
    "vue-loader": "^15.7.1",
    "vue-template-compiler": "^2.6.10",
    "webpack": "^4.41.0",
    "webpack-cli": "^3.3.9"
  },
  "peerDependencies": {
    "vue": "^2.6.10"
  }
}
```

相关阅读：  
[依赖的类型：dependencies、devDependencies、peerDependencies](https://yarnpkg.com/zh-Hans/docs/dependency-types)

## 下午

### 广告活动落地页

编辑器 和 广告站点应用 renderer 包  
发现其实不用将 renderer 打包，只要在 编辑器 和 广告站点项目的 vue.config.js 添加 resolve alias 即可：

```js
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'active-page-renderer$': path.resolve(
          __dirname,
          '..',
          'active-page-renderer/src/main.js'
        ),
      },
    },
  },
};
```

优化 vant 体积，使用 babel-plugin-import 自动按需引入组件。  
后来打包对比发现，webpack mode production build 就算不用 babel-plugin-import 插件也能通过 tree shaking 移除 vant 包中未使用的组件。

完善手机验证码相关功能，根据当前页面手机是否开启发送验证码，判断广告创意是否可选。

解决源码暴露问题，除 local 开发环境，其它任何环境都不暴露源码。  
[How to remove webpack:// from sources in the browser](https://stackoverflow.com/questions/49096454/how-to-remove-webpack-from-sources-in-the-browser)

解决广告页面与广告创意绑定时，是否发送短信验证码的的一致问题。  
防止业务人员出现误操作，将不需要发送短信验证码的广告创意关联到需要发送短信验证码的广告页面，反之亦然。

## 晚上

### 广告活动落地页

站点页面设计稿还原，适配不同手机，目前简单粗暴手动计算 rem 值，查阅资料文档之后再确定使用哪种适配方案。

晚上睡觉之前阅读了以下三篇文章：  
[使用 Flexible 实现手淘 H5 页面的终端适配](https://github.com/amfe/article/issues/17)  
[再聊移动端页面的适配](https://juejin.im/entry/5a9d07ee6fb9a028c149f55b)  
[如何在 Vue 项目中使用 vw 实现移动端适配](https://juejin.im/entry/5aa09c3351882555602077ca)
