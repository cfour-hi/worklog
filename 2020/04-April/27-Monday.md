## 计划任务

- [x] 跟后端确认落地页 v2 数据结构

- [x] 帮助银河处理 loading 兼容问题

  问题原因：[`Object.fromEntries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) 不支持 Chrome 73 一下版本。  
  解决方式：使用 [`object.fromentries`](https://www.npmjs.com/package/object.fromentries) shim

- [x] 媒资落地页接入新版 sentry

## 阅读思考

[当浏览器全面禁用三方 Cookie](https://juejin.im/post/5e97124df265da47b27d97ff)

Safari 已完全禁用第三方 Cookie；  
非当前域名下的 Cookie 都是第三方 Cookie；
常见如 站点统计、前端异常监控、前端性能监控 等引用第三方 SDK，会种下第三方 Cookie；
