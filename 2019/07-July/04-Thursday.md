## 计划任务

- [x] 管理周例会

  双十一的提前规划，关系到国庆假期是加班还是多休，以及争取季度项目奖。  
  数据可视化在 9 月份规划中，需要提前预案，需要考虑移动端。

  管理培训，提出自己在管理方面的困惑。

- [x] 7 月份绩效考核目标

  1. 测试阶段 0 自测 bug
  2. 代码质量在代码评审时分数达到 90 及以上
  3. sentry 平台的分派到自身的异常，在下一个版本解决，并在讨论中说明产生背景、解决方案、参考资料等。

  @田斌：workbox 在项目中的应用
  @彭泽华：Flutter、Android 应用启动白屏的解决方案
  @巧云、@三炮：暂定每周一道题目，根据解答速度、代码质量、执行效率判定分数（中途如果产生什么想法研究什么东西，可随时退出此方案）

## 探索发现

### webpack 如何加载 built-in lib

今天无意中发现项目中依赖一个被废弃的 npm package [crypto](https://www.npmjs.com/package/crypto)，node_modules 中有这个文件夹，但是里面没有代码文件，只有 README.md 和 package.json，我就纳闷了，我们项目引入这个依赖的时候从哪获取的代码？

![ZawnT1.png](https://s2.ax1x.com/2019/07/05/ZawnT1.png)

通过 debugger 调试，发现代码是来自 crypto-browserify，很奇怪，这是怎么回事？

![Zser1s.png](https://s2.ax1x.com/2019/07/08/Zser1s.png)

没有找到任何相关资料，根据 crypto-browserify 这个名称，个人的理解是由于 crypto 是 NodeJS 内置 API，所以 webpack 会对这种内置 API 添加 browserify 库，当然前提是没有在 node_modules 找到对应 package。目前只是猜测，并没有找到实际代码证明。
