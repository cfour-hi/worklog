# Worklogs

# **2016**

### *Date: 3 - 1 (二)*

#### Plan:

- 继续完善抽奖功能

  `> 看后端今天能否解决报错问题，进行调试。`

- 查看易企秀的长页面功能实现原理

#### Mark:

- 编辑页面抽奖功能奖品设置的奖品名称字符长度限制需要一个可行方案

  `> 目前是用 AngularJS 的 $watch 函数监听奖品列表输入变化，但是我们在使用输入法输入汉字的时候，input 标签内会先出现拼音，等确定选择哪个字或是词语之后按下空格或者对应的数字键，汉字才会出现在 input 标签内，可就在汉字准备出现在 input 标签内的时候，AngularJS 的机制就判定了监听变化，并且把拼音也算进这变化之中，这就使判定出错。`
  
- 下午有重新整理编辑页面抽奖功能的代码，做了一系列优化与封装等，由草版变为正式版。

- 军哥中午跟我说咱 70c 的 H5 制作平台就交给我来负责了，然后有新人来也交给我带，嗯..好吧，没问题。

### *Date: 2 - 29 (一)*

#### Plan:

- 完善大转盘编辑、预览页面

  `> 调试细节问题，下午与后端调试接口数据。`
  
#### Mark:

- 上午调试大转盘抽奖发现百分比控制的元素大小或距离会有小数上的偏差，类似于 `rem` 产生的 <a href="http://taobaofed.org/blog/2015/11/04/mobile-rem-problem" target="_blank">小像素问题</a>。

- 下午调试大转盘指针在指向抽奖结果那格区域的随机摆动角度，并没有与后端调试接口数据，后端还是一片混乱，各种报错，无法调试状态。

- <a href="http://monine.github.io/study/public/lottery_dzp.html" target="_blank">大转盘抽奖 Demo</a>

### *Date: 2 - 26 (五)*

#### Plan:

- 预览页面大转盘抽奖功能

  `> 实现用户点击抽奖按钮之后，调用接口获得抽奖结果数据并且大转盘保持转动，直到抽奖结果返回再停止转动。`
  
  `> 保证大转盘转动动画效果流畅自然`

#### Mark:

- 上午调休两个小时

### *Date: 2 - 25 (四)*

#### Plan:

- 抽奖功能完善 

  `> 根据后端接口数据调整 JS 代码`
  
- 5.4.0 版本发布

#### Mark:

- 因为版本发布加班到凌晨 12 点

- 军哥介绍了一个替代 <a href="http://getf5.com" target="_blank">f5</a> 的前端开发工具 <a href="http://leeluolee.github.io/2014/10/24/use-puer-helpus-developer-frontend" target="_blank">Puer</a>

  `> Puer 是一个可以实时编辑刷新的前端服务器`

- 阅读了一些关于 <a href="http://www.ibm.com/developerworks/cn/web/wa-jsmemory" target="_blank">js 内存泄漏</a> 的相关知识
