## 计划任务

- [x] 跟进 工单 v1.21 进度

  前端整体正常，@彭泽华 那边的退款业务也比较稳定。

- [x] 版本发布后接口 502 错误方案实现讨论

  [背景](./09-Thursday.md)

  思路还是通过后端设置版本 hash cookie 对比请求中的 hash cookie 判定是否一致，不一致则返回特定状态码，并写入 set-cookie 最新 hash cookie。  
  前端需要做三件事情：

  1. 新增一个页面，用来维护版本更新标识，生成 hash cookie；
  2. 在 axios 配置全局 withCredentials 为 true；
  3. 响应拦截器判定特定状态码，执行浏览器刷新。

## 临时任务

- [x] 关于 sentry 大量 UnhandledRejection 异常处理思考

  现在是已被业务 catch 到的异常也会上抛到 sentry，这部分异常要阻止上抛。  
  其它未被业务 catch 而被 setTimeout 统一 catch 的异常要不要上抛？（内心更偏向不抛）

- [ ] socket.io 实现服务端推送

  现项目中有一个轮训业务，查询当前用户是否被调动部门，每 10 秒执行一次。
