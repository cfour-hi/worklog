## 计划任务

- [x] 银河 v1.1.0 需求二次外审

  接口层面，媒资请求头 auth token 报文与银河不一致；  
  银河项目前端开发规范和结构讲解；  
  任务的划分，银河 @彭泽华，媒资 @彭旭 @刘文兵；

- [x] 媒资 v1.5.0 跟进业务反馈
- [ ] 落地页 v2 开发
- [x] 银河单环境多版本并存方案

  编译时环境变量注入

- [ ]
- [x] 前端统计插件使用文档输出
- [x] 华为云链接地址 encode 处理

  现在的情况是这样的，我们请求华为云的资源：  
  https://prod-huawei-media.shiguangkey.com/Mon Oct 28 2019 14:51:36 GMT+0800 (中国标准时间)撤销.mp4

  华为云会重定向到七牛云的资源上，并且改变了请求的 URL 地址：  
  https://prod-qiniu-media.shiguangkey.com/Mon+Oct+28+2019+14:51:36+GMT+0800+%28%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4%29%E6%92%A4%E9%94%80.mp4

  这个地址无法访问到七牛云的资源，是因为华为云重定向到七牛云资源，转码的时候将 空格 转成了 +，生成了一个错误的 URL。

  未经华为云转码处理通过七牛云的地址访问资源是没有问题的：  
  https://prod-qiniu-media.shiguangkey.com/Mon Oct 28 2019 14:51:36 GMT+0800 (中国标准时间)撤销.mp4

  通过浏览器打开后也会默认转码成：  
  https://prod-qiniu-media.shiguangkey.com/Mon%20Oct%2028%202019%2014:51:36%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)%E6%92%A4%E9%94%80.mp4

  所以要求华为云在重定向时不要将 空格 转成 +

- [x] 基础类插件迁移

  暂无基础类插件

## 阅读思考

### [What Is The Difference Between A URI And A URL?](https://dev.to/flippedcoding/what-is-the-difference-between-a-uri-and-a-url-4455)

URI 统一资源标识符；  
URL 统一资源定位符；  
URL 可以是 URI，但反之不行。
URI 用来标识身份，但不一定能通过 URI 找到资源内容。  
URL 可以用来找到资源内容，它同样也是 URI。
