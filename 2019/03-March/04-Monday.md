## 计划任务

- [x] 业绩播报版本上线及跟进上线后问题

  已上线，暴露出前端问题：

  1. 切换部门时月业绩完成率不更新；  
     因为 element-ui table summary-method 返回的合计数据，在 table 内不支持自定义样式，所以在赋值 table 数据之后，使用 nextTick 进行了 DOM 操作修改合计行的样式。但是当 table 数据更新一次之后，再更新 table 数据，合计行的内容确没有更新。原因是因为 nextTick 还是无法保证 table 内容（包含合计行）完全渲染完成，导致 DOM 操作时拿到的 table cell innerText 不是最新的数据。需求实现代码使用的是 innerHTML 重置 table cell HTML，包含样式和 innerText，所以导致合计行的数据内容没有没有更新。  
     解决方案就是不直接使用 innerText 内容，而是去 table data 查找对应数据。

- [x] 跟进工单 v1.16 版本开发

  目前处于联调阶段

- [x] 工作周报

## 阅读思考

- [How (and why) you should use Typescript with Node and Express.](https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d)

  node 运行在服务器，需要严谨、可靠，更推荐使用 TypeScript。

## 探索发现

- Fiddler 抓包 HTTPS 流量

  [Configure Browsers](https://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/ConfigureBrowsers)  
  [Configure Fiddler to Decrypt HTTPS Traffic](https://docs.telerik.com/fiddler/Configure-Fiddler/Tasks/DecryptHTTPS)

- Fiddler 使用本地文件替换响应文件

  [Create traffic with custom matching rules](https://docs.telerik.com/fiddler/Generate-Traffic/Tasks/ComposeAutoresponder)
