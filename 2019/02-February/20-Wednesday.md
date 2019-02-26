## 计划任务

- [x] 跟进工单 v1.15 进度

  图片放大查看、切换功能，交由 @巧云 处理，她使用的是 [v-viewer](https://github.com/mirari/v-viewer) 插件，v-viewer 是 [viewerjs](https://github.com/fengyuanchen/viewerjs) 的包装。  
  新改动需求，交易号非必填。

- [ ] 跟 @左耳 对接运营后台在 APP 的功能细节

  下午提醒过一次，但是并没有收到反馈。

- [ ] 代码优化 - 基础数据拆分

  因正则错误，导致基础数据变量全局匹配疏漏，白干。

## 临时任务

- [x] 下午 2 点虹之玉培训第三讲

## 阅读思考

- [使用 RAIL 模型评估性能](https://developers.google.com/web/fundamentals/performance/rail?hl=zh-cn)

  ![](./assets/rail.png)

  - 以用户为中心；最终目标不是让您的网站在任何特定设备上都能运行很快，而是使用户满意。
  - 立即响应用户；在 100 毫秒以内确认用户输入。
  - 设置动画或滚动时，在 10 毫秒以内生成帧。
  - 最大程度增加主线程的空闲时间。 \* 持续吸引用户；在 1000 毫秒以内呈现交互内容。

- [What’s next for SemVer](https://words.steveklabnik.com/what-s-next-for-semver)

  > Over the last few months, several of us^2 have been talking, and today, we have an announcement to make. We’ve formed a semver team, and we intend to start work on producing a new version of the spec.

  这篇文章说打算制作新版本的语义化版本规范，不明觉厉。

- [退市倒计时，负债百亿、高管离职的汇源果汁到底做错了什么？](https://www.yuque.com/lexiansheng/businessunit/megz24)

  > 成也资本败也资本。汇源果汁的成功其实除了央视广告之外，还有一个就是从 2001 年开始，汇源密集地借助德隆系、统一集团、达能集团的力量进行资本化运作，让自己的估值迅速提升，所以 2008 年上市不久的汇源果汁就迅速找到了自己资本市场的买家：可口可乐。作为长期打国民品牌的汇源果汁上市不久就卖身国际巨头实在是让人有些觉得奇怪，2008 年 9 月 3 日，可口可乐宣布，以每股 12.2 港元，总计 179.2 亿港元的价格收购汇源全部已发行股份。按照当时的价格，如果收购成功，朱新礼将进账 74 亿港元。然而，这个资本运作却绝不能当作纯粹的商业行为来看待，2009 年 3 月，商务部依据《反垄断法》叫停收购案。

  资本逐利，典型的一步错步步错，没有跟上时代（互联网）步伐，估计是被资本迷惑，功成名就之后就忘乎所以，失去初心。

- [IT 架构的本质--我的五点感悟](https://mp.weixin.qq.com/s?__biz=MzU5NDAzNDEyMA==&mid=2247484105&idx=1&sn=4daeff5b2fd2964ce24fd70b54433a77)

  1.  需求优化最重要 - 少查少写少依赖，Less is more

      > 我们要搞架构设计最重要的就是砍需求，将上层应用的需求优化删减，让同级的业务能容错。  
      > 抓住核心诉求，不该要的东西都不要。

  2.  群集设计通用规则 - 前端复制后端拆，实时改异步，三组件互换

      > 前端复制后端拆，实时改异步，IO-算力-空间可互换  
      > 架构常见技巧就像空中华尔兹一样自然优雅

  3.  理解硬件天性 - 角色选型时要看硬件的天然特性

      > 别让硬盘扛性能，别让内存保持久，别让网线扛稳定  
      > 架构层软件技术已经足够成熟，所谓技术选型不如说是适应场景；在做具体角色选型时，最深度也最易忽视的原则是顺应硬件天性。

  4.  数据的产生和消失 - 数据不会凭空产生，但会凭空消失

      > 在一个数据生命周期内，为了防止数据全部或部分凭空消失，数据的容错校验、关联复原、冷热备份和安全删除都要考虑到位。  
      > 架构师的核心技能包括画好访问逻辑和数据流量图，因为问题现状描述清楚了，问题就解决了一多半了。一个好的业务访问逻辑图，不仅仅是几个圈圈几条线连起来，其信息量大到包罗访问过程的所有元素，也要详略得当高亮关键点。

  5.  各环节都不可盲信 - 容灾设计中都尽人事和听天命

      > 整个 IT 系统中就没有可靠的组件，架构师既不能盲目信任撞大运，又不能无限冗余吓唬自己，而是在尽人事和听天命之间做好权衡。

  **架构之术繁琐，架构之道浅显**

- [The security risks of changing package owners](https://blog.npmjs.org/post/182828408610/the-security-risks-of-changing-package-owners)

  去年区块链、比特币处在风口时，npm 上的某些安装量高的 package 就被植入挖矿代码。安全问题从来无法完全杜绝，只有不断提高门槛。

- [Help! None of my projects want to be SPAs](https://whatisjasongoldstein.com/writing/help-none-of-my-projects-want-to-be-spas/)

  SPA 更适合做工具类应用程序，比如在线文档、图片处理这种富交互类应用程序。
