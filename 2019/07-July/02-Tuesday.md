## 计划任务

- [x] 解决 sentry 遗留 `ResizeObserver loop limit exceeded` 问题

  此问题来源 element-ui table 组件，可忽略，相关讨论可查看 [Github issue](https://github.com/ElemeFE/element/issues/12866)。  
  目前的解决方案是在 beforeSend 异常上报之前进行过滤。

- [x] 解决 sentry 遗留 `UnhandledRejection {"message":"[undefined]"}` 问题

  问题原因是 axios cancel request 导致，目前解决方案也是在 beforeSend 异常上报之前进行过滤。

- [x] 梳理工单 v1.26 任务排期
