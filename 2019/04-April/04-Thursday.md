## 计划任务

- [x] 协助 @三炮 完善[前端样式规范](https://docs.qq.com/doc/DR2JmTU5MTm9nWnNt)

- [x] CRM v1.15.1 开发完成后的代码审查

  @彭泽华 提出了一种更合理、更友好的模块拆分方式

  很简单的业务场景，某个页面有 新增 和 编辑 某个模型的功能，在弹窗进行交互。  
  之前的模块方式是使用一个弹窗组件包含 新增 和 编辑 功能，这个组件的业务逻辑会比较复杂，比如保存时调用不同的接口。  
  其实可以这么理解，新增 和 编辑 是两种业务，只是共用内容而已，两种业务的内容差异不会很大。  
  很多之前复杂的组件其实也可以这样进行拆分。

  ```
        |-- add  --|
  page --          -- base
        |-- edit --|
  ```

- [ ] CRM 手机拨打电话页面接入

  今天时间不够

## 阅读思考

### [How effectively delete a git submodule.](https://gist.github.com/myusuf3/7f645819ded92bda6677)

如何删除子模块

## 今日概览

[在 firefox 浏览器上接口异常状态统一处理无效](https://monine.github.io/2018/11/07/%E6%8E%A5%E5%8F%A3%E5%BC%82%E5%B8%B8%E7%8A%B6%E6%80%81%E7%BB%9F%E4%B8%80%E5%A4%84%E7%90%86%E6%96%B9%E6%A1%88%E5%9C%A8-Firefox-%E4%B8%8B%E6%97%A0%E6%95%88%E7%9A%84%E5%8E%9F%E5%9B%A0%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html) 的问题再次出现，因为更改项目结构，使用 git submodule 的开发模式之后，没有引入 @babel/polyfill，也没有设置 [transform-runtime polyfill](https://babeljs.io/docs/en/babel-plugin-transform-runtime#polyfill) 为 false（babel v7 移除 polyfill 并设置为默认）。  
这个问题是去年 10 月份左右解决的，过去了有一段时间，现在 babel v7 一时半会摸不清该如何处理。晚上陪着小伙伴完成提测工作，也顺便解决这个问题，可能白天工作有点累，晚上精神状态不是很好，折腾了一个小时也好像没什么成果。8 点半左右，突然灵感乍现，在入口文件 main.js 加了一行代码就把问题给解决了。

```js
window.Promise = Promise;
```
