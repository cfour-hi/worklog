## 计划任务

- [x] 跟进 PC 埋点统计和部署进度

  已完成埋点统计插件 v1.0.0 并通过插件形式注入到项目。  
  dev 环境部署存在问题，pm2 cluster mode 在 dev 环境运行不起来，暂时替换成 fork mode。

- [x] 跟进媒资 v1.4.9 迭代

  预览模式完成 80%

* [ ] 绩效考核

## 一句话记录

【npm】`npm login` registry 地址是 http://nexus.tanzk.com:8081/repository/tzedu-npm-releases/，账号是统一登录账号密码

【npm】pacakge.json files 字段用来配置 publish 时包含的文件（内容），比如 publish 时不会包含 dist 目录，需要在 files 字段添加 dist 配置。

【rollup】external 配置项可用来移除 bundle 中的第三方依赖内容
