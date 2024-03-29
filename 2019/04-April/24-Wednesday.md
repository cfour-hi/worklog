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

最近 996.ICU 一直处在风潮浪口，微博、知乎、Github 上对这个话题的讨论络绎不绝，尤其 马云老师 又回应评论说 996 是福报。  
某些自媒体断章取义的抓着 “福报” 煽风点火，长篇大论，实际却是为自己的做推广、涨流量，唉...

我的世界观一直坚信，凡事都有两面性，996 也不例外。首先抛开无意义的 996，我认为如果极度渴望追求名誉、利益，满足自身欲望，展现自我价值，996 并不算什么，只是时间上的付出而已，比 996 更艰难的是内心和精神上的煎熬。

上文有说 “无意义的 996”，什么是 “无意义的 996”？我认为就是一个字：“混”。  
项目排期混乱，毫无章法，无脑压榨开发、测试时间；  
各种无意义会议、低效率沟通、办公室政治等等，导致工作无法保持专注（尤其对于编码者），需要靠晚上时间来弥补；
最终问题还是要归结到自身，身处 996 的牢笼，是否有去思考过为什么？

去年(2018) 4 月份加入现在这家公司，到现在，三分之二左右的时间我都是 996，虽然我们是单双休，但双休在我脑海中的记忆片段很少，也很模糊。
刚入职不久，跟同样几位入职不久的几位大佬一起，从 0 开始构建公司的内部系统，我作为前端负责人，需要带领小伙伴一起作战。但是小伙伴的技术素质实在堪忧，没啥经验、基础不牢、变量命名不规范（甚至复制别处代码变量命令都不带改动的）、逻辑混乱、完全没有模块化、可维护性、可扩展性这方面的意识等等等等，我明白短期内不可能指望他们对项目基础和核心的设计做啥贡献，只能自己扛着。所以那会项目的整体基础设施，核心业务、代码、组件都是自己搞定，只交给其他小伙伴处理页面业务相关的工作，有些复杂的页面都还得自己做。  
所以去年工作真的特别忙，不得不 996，没办法，所幸付出获得了收获。只是后来还意识到，个别小伙伴真的带不动，不思进取，毫无上进心，从不主动学习，遇到问题就头疼，手足无措，做事毫无章法，完全没有独立解决问题能力，实在无力吐槽。
