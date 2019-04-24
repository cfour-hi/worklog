## 计划任务

- [x] 优化 查询课程、赠品 组件

  其实是新增页面的业务组件

- [x] 接入异常监控

  推动运维部署了 [sentry](https://github.com/getsentry/sentry)，今天尝试接入。  
  运维居然给我们项目设置的是 nodejs 类型的 project，我就说怎么要安装的依赖是 @sentry/node@5.1.0，跟我之前在本地部署的使用方式不一样。  
  自己重新创建了一个 Vue project，然后又发现一个问题，没有 DSN（Data Source Name）

  ![EVnNeU.png](https://s2.ax1x.com/2019/04/24/EVnNeU.png)

  Google 到一个新鲜 [issue](https://github.com/getsentry/sentry/issues/12813)，也是 DSN 为空白的问题，发给运维作参考。  
  最终运维参考 [这个 comment](https://github.com/getsentry/sentry/issues/12813?tdsourcetag=s_pctim_aiomsg#issuecomment-484149300) 解决了 DSN 空白的问题，是因为 NG 配置域名转发导致。

## 阅读思考

### [MSWorkers/support.996.ICU](https://github.com/MSWorkers/support.996.ICU)

> 微软员工和 GitHub 员工宣布支持 996.ICU 运动

最近 996.ICU 一直处在风潮浪口，微博、知乎、Github 上对这个话题的讨论络绎不绝，尤其 马云老师 又回应评论说 996 是福报。某些自媒体断章取义的抓着 “福报” 煽风点火，长篇大论，实际却是为自己的做推广、涨流量。
