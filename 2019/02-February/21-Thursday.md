## 计划任务

- [x] 跟 @左耳 对接运营后台在 APP 的功能细节

  昨天提醒过一次没有得到反馈，今天一定要跟进到位。
  已确定对接时间是：明天...

- [x] 工单 v1.16 需求评审

  按转化部门统计页面、目标设定页面和一些优化需求

  金额输入限制一直是个潜在问题，总感觉各种验证很繁琐，不够优雅。这个版本会尝试使用第三方库 [text-mask](https://github.com/text-mask/text-mask/tree/master/vue#readme) 解决此问题。
  其实之前自己有造轮子实现过，但效果不太好，这次会找时间好好看看 text-mask 的实现方案。

  已实现 InputMoney 组件，样式已同步 element-ui el-input。分支 vue-input-mask，等工单 v1.15 上灰度环境再合并到 dev 分支。
