# Worklogs

# **2016**

### *Date: 3 - 2 (三)*

#### Plan:

- 调试预览页面抽奖功能接口

#### Mark:

- 早晨阅读时间读到 <a href="http://www.alloyteam.com" title="腾讯全端 AlloyTeam 团队 Blog">AlloyTeam</a> 一篇文章 <a href="http://www.alloyteam.com/2015/04/talk-about-the-front-end-engineering-career-planning" target="_blank" title="谈前端工程师的职业规划"><谈前端工程师的职业规划></a>

  > 一专多长才是前端工程师的终极目标`

  不仅是前端，大部分领域都应该是这样。

  > 一专是指你不可替代，多长标示你可以替代别人`

  一专已是难得，多长更是宝贵！

- 上午开了一上午的需求评审会议，其他正常需求都 OK，然而我们准备启动的新项目 (商城) 最终讨论未果，还需斟酌。

- 下午用 `css` 实现圆形的时候遇到一个小难关 - 因为要做手机适配，在百分比值宽高不相等的容器内，如何实现一个相对父容器大小比例固定的圆形？

  一个基础却又容易混淆的css知识点：<a href="https://segmentfault.com/a/1190000004231995" target="_blank" title="巧用margin/padding的百分比值实现高度自适应">巧用margin/padding的百分比值实现高度自适应（多用于占位，避免闪烁）</a>

### *Date: 3 - 1 (二)*

#### Plan:

- 继续完善抽奖功能

  看后端今天能否解决报错问题进行调试

- 查看易企秀的长页面功能实现原理

#### Mark:

- 编辑页面抽奖功能奖品设置的奖品名称字符长度限制需要一个可行方案

  目前是用 `AngularJS` 的 `$watch` 函数监听奖品列表输入变化，但是我们在使用输入法输入汉字的时候，`input` 标签内会先出现拼音，等确定选择哪个字或是词语之后按下空格或者对应的数字键，汉字才会出现在 `input` 标签内，可就在汉字准备出现在 `input` 标签内的时候，`AngularJS` 的机制就判定了监听变化，并且把拼音也算进这变化之中，这就使判定出错。
  
- 下午有重新整理编辑页面抽奖功能的代码，做了一系列优化与封装等，由草版变为正式版。

- 军哥中午跟我说咱 70c 的 H5 制作平台就交给我来负责了，然后有新人来也交给我带，嗯..好吧，没问题。

### *Date: 2 - 29 (一)*

#### Plan:

- 完善大转盘编辑、预览页面

  主要调试细节问题和与后端调试接口数据
  
#### Mark:

- 上午调试大转盘抽奖发现百分比控制的元素大小或距离会有小数上的偏差，类似于 `rem` 产生的 <a href="http://taobaofed.org/blog/2015/11/04/mobile-rem-problem" target="_blank">小像素问题</a>。

- 下午调试大转盘指针在指向抽奖结果那格区域的随机摆动角度，并没有与后端调试接口数据，后端还是一片混乱，各种报错，无法调试状态。

- <a href="http://monine.github.io/study/public/lottery_dzp.html" target="_blank">大转盘抽奖 Demo</a>

### *Date: 2 - 26 (五)*

#### Plan:

- 预览页面大转盘抽奖功能

  实现用户点击抽奖按钮之后调用接口，在接口获得抽奖结果数据之前大转盘保持转动，直到接口返回抽奖结果数据之后再停止转动，并且保证大转盘转动流畅自然。

#### Mark:

- 上午调休两个小时

### *Date: 2 - 25 (四)*

#### Plan:

- 抽奖功能完善 

  根据后端接口数据调整 JS 代码
  
- 5.4.0 版本发布

#### Mark:

- 因为版本发布加班到凌晨 12 点

- 军哥介绍了一个替代 <a href="http://getf5.com" target="_blank">f5</a> 的前端开发工具 <a href="http://leeluolee.github.io/2014/10/24/use-puer-helpus-developer-frontend" target="_blank">Puer</a>

  > Puer 是一个可以实时编辑刷新的前端服务器

- 阅读了一些关于 <a href="http://www.ibm.com/developerworks/cn/web/wa-jsmemory" target="_blank">js 内存泄漏</a> 的相关知识
