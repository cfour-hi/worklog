## 计划任务

- [x] 接入扫二维码移动端拨打电话页面

## 临时任务

- [x] 修复科目组件在 element-ui 升级后，点击外部元素关闭级联下拉选择后不触发 focus 和 change 事件。

  element-ui cascader 组件对于 focus 和 blur 事件的定义不太明确（我不太理解），由于组件有双击选中的需求，需要自行处理。之前 v2.3.9 的版本在关闭级联下拉选择时必定会触发 focus 事件，但此次项目结构调整升级到 v2.7.2 后，点击外部元素关闭级联下拉选择并不会触发 focus 事件。  
  看官方文档有新增 blur 事件，实践过后发现并没有实质性作用，也是不能准确表示 blur 事件。  
  所以最后的解决方案是在 #app 最外层包裹元素监听 click 事件，根据当前级联下拉选择的显示状态判定是否触发更新。

  另外有一个想法，封装 element-ui cascader 组件，有双击选中功能，可提供给 科目、部门 和其它有双击选中需求的 cascader 组件使用。

## 今日概览

关于清明假期前（上周四）使用一行代码解决 firefox 浏览器接口异常状态处理无效的思考，其实核心关键点是将 Promise polyfill 暴露给全局（window），使 项目代码 和 axios 使用同一个 Promise。  
在 chrome 浏览器中，babel 判定项目使用 Native Promise，所以项目覆写的 Promise 是 Native Promise，axios 使用的也是 Native Promise。使用 `window.Promise = Promise` 后，并没有任何影响。
在 firefix 浏览器中，babel 判定项目使用 polyfill Promise，所以项目覆写的 Promise 是 polyfill Promise。不是 firefox 没有 Native Promise，只是因为不支持 PromiseRejectionEvent 接口，所以 babel 判定 firefox Native Promise 无效。又因为 babel transform runtime 的原因，所有 babel polyfill 在编译阶段被模块化注入项目，项目使用 Promise 的地方都被转换为引用模块化后的 polyfill Promise。但是 axios 因为是第三方 npm 依赖包，存放于项目 node_modules 内，不会被 babel-loader 转换，所以 axios 内使用的 Promise 仍然是 firefox Native Promise，导致 项目代码 与 axios 使用的 Promise 不一致。使用 `window.Promise = Promise` 后，在应用程序运行时，项目代码将 polyfill Promise 添加到全局对象 window，axios 使用的其实就是 window.Promise，也就是 polyfill Promise，与项目使用的 Promise 一致。

## 探索发现

### [纯 CSS 图片](https://codepen.io/ivorjetski/pen/xMJoYO)

![bg2019040524.jpg](./assets/bg2019040524.jpg)

上面这张图片不是照片，而是纯粹用 CSS 生成的。  
第一反应是惊艳，然后觉得牛掰，再然后就觉得真是吃饱了...撑的。
