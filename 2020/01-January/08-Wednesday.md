## 计划任务

- [x] 跟进 @左耳 商户号绑定公众号事宜

  已绑定

- [x] 微信公众号表单数据回传开发和测试

  已测试跑通流程，微信授权需要业务人员先进行公众号配置，已提供公众号配置说明文档，告知产品联系业务人员明天上午进行线上测试。

- [x] 媒资 v1.4.2 支付预览开发

  开发过程中发现一个问题，支付组件和微信公众号表单数据回传在授权上冲突了。  
  如果一个落地页的发布渠道为微信公众号，同时落地页内容包含课程购买（支付组件），那既要执行发布渠道的微信公众号授权，也要执行支付的微信公众号授权，然而这是无法实现的。  
  下午找后端人员和产品进行了问题描述和方案讨论，得出两个可行方案：

  1. 将支付场景和表单填写场景分离，分场景授权；
  2. 让业务人员将微信公众号绑定到公司商户号，这样就只用一次授权；

  站在业务的角度，个人认为第 2 种方案比较合理，目前在等待产品与业务人员沟通确定能否使用第 2 中方案，同时在确定之前，对第 1 中方案进行开发。
