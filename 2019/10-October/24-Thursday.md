## 计划任务

- [x] 协助 @刘波 拆分媒资系统 前台 和 图片编辑器

  已将模板提供

- [x] 整理媒资 v1.3 版本提测相关问题

  关于在页面被卸载之前发送统计数据，需要用到 [beforeupload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) 事件，在事件回调函数内使用 [Navigator.sendBeacon()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) 方法发送 HTTP 请求。

  但是，在移动端，上述方案在实际应用中可视为无效...  
  移动端生态复杂，各家 APP 使用的容器不确定，导致上述方案毫无兼容性可言...
