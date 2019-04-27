## 计划任务

- [x] 协助 @巧云 完成工单 v1.19 提工单页面功能

  限制 赠送课程 和 赠送实物 总和最大值为 10  
  修复修改工单时批量获取 赠送课程 和 赠送实物 调用时机错误问题

- [x] 实践 webpack 优化

  通过 webpack optimization splitChunk 配置将 package.json dependencies 打包成独立 chunk，生产环境不再使用外部 CDN 加载 vue 和 element-ui 资源。  
  最终成果是将 app.js 从 gzip 480+kb 优化到 180+kb，第三方依赖资源基本抽出，继续优化需要深入代码确定范围。

## 阅读思考

### [24 个实例入门并掌握「Webpack4」(二)](https://juejin.im/post/5cb01ab0e51d456e3428c0ca)

跨域代理 因为项目后台服务都做了跨域配置，所以一直没有在项目中实践，但其实是很重要、很有用的功能。
