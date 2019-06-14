## 计划任务

- [x] 接口异常处理方案与 sentry 异常捕获的兼容

  对接口异常处理方案思考再三，找不到任何适应 sentry 的机制，所以放弃。  
  换个角度思考这个问题，从 sentry 入手，过滤掉不需要上报的异常。sentry 上的每个项目本身有一些过滤机制，但并不可灵活配置，而是通用的限制。

  ![VhuP1J.png](https://s2.ax1x.com/2019/06/13/VhuP1J.png)

  显然这并不满足我的需求，继续查阅 sentry 文档，找到 sentry JavaScritp [Filter Events & Custom Logic](https://docs.sentry.io/platforms/javascript/#filter-events--custom-logic)。  
  这篇文档介绍了如何过滤上报的异常，结合自己项目的实际需求，在异常上报之前加入逻辑代码判定是否上报。

## 阅读思考

### [Vue Function-based API RFC](https://zhuanlan.zhihu.com/p/68477600)

看完第一遍，思考如何废弃掉项目中现有 mixin，未来如何加入 TypeScript。
