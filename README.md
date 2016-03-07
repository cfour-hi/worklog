# Worklogs

# **2016**

### *Date: 3 - 7 (六)*

#### Plan:

#### Mark:

### *Date: 3 - 4 (五)*

#### Plan:

- 抽奖功能今天开始细节调优、解决 bug

#### Mark:

- 关于 编辑页面抽奖功能奖品设置的奖品名称字符长度限制需要一个可行方案 (3-1)

  目前的解决方案是在当前奖品名称输入框失去焦点 `blur()` 的时候再去判断字符的长度，如果超出长度则触发错误处理机制。

- 好想吐槽咱后端目前的混乱状态，尼玛获取代码后编译各种报错。

  无法调取接口获得数据，尼玛只能各种造假数据来调试代码，盲写代码有木有！

- <a href="https://github.com/Monine/study/issues/1" target="_blank" title="UTF-8 编码标准下获取字符串中字符的字节长度">UTF-8 编码标准下获取字符串中字符的字节长度</a>

  晚上还特意看了一篇关于 <a href="http://www.regexlab.com/zh/encoding.htm" target="_blank" title="字符、字节和编码">字符、字节和编码</a> 的文章

- <a href="https://github.com/Monine/study/issues/2" target="_blank" title="常用的正则表达式">常用的正则表达式</a>

### *Date: 3 - 3 (四)*

#### Plan:

- 今天务必走完抽奖功能流程！

  > 没做完就加班！ T-T

#### Mark:

- 抽奖功能流程终于走完了 T_T

- 晚上看了 <a href="http://www.zhangxinxu.com/" target="_blank">张鑫旭</a> 大神一篇关于 SVG 动画的文章 (超叼的感觉)

  <a href="http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/" target="_blank" title="超级强大的SVG SMIL animation动画详解">超级强大的SVG SMIL animation动画详解</a>

- 推荐俺军哥写的一篇关于前端这个职业发展规划的文章 <a href="https://github.com/f2e-journey/f2e-journey/blob/master/career-planning.md/" target="_blank" title="前端工程师的职业发展规划">前端工程师的职业发展规划</a>

### *Date: 3 - 2 (三)*

#### Plan:

- 调试预览页面抽奖功能接口

#### Mark:

- 早晨阅读时间读到 <a href="http://www.alloyteam.com/" target="_blank" title="腾讯全端 AlloyTeam 团队 Blog">AlloyTeam</a> 一篇文章 <a href="http://www.alloyteam.com/2015/04/talk-about-the-front-end-engineering-career-planning/" target="_blank" title="谈前端工程师的职业规划">谈前端工程师的职业规划</a>

  > “一专多长” 才是前端工程师的终极目标

  不仅是前端，大部分领域都应该是这样。

  > “一专” 是指你不可替代 “多长” 表示你可以替代别人

  一专已是难得，多长更是宝贵！

- 上午开了一上午的需求评审会议，其他正常需求都 OK，然而我们准备启动的新项目 (商城) 最终讨论未果，还需细细琢磨。

- 下午用 `css` 实现圆形的时候遇到一个小难关 o_o

  因为要做手机适配，在百分比值宽高不相等的容器内，如何实现一个相对父容器大小比例固定的圆形？

  一个基础却又容易混淆的css知识点：<a href="https://segmentfault.com/a/1190000004231995/" target="_blank" title="巧用margin/padding的百分比值实现高度自适应">巧用margin/padding的百分比值实现高度自适应（多用于占位，避免闪烁）</a>

### *Date: 3 - 1 (二)*

#### Plan:

- 继续完善抽奖功能

  看后端今天能否解决报错问题进行调试

- 查看易企秀的长页面功能实现原理

#### Mark:

- 编辑页面抽奖功能奖品设置的奖品名称字符长度限制需要一个可行方案

  目前是用 `AngularJS` 的 `$watch` 函数监听奖品列表输入变化，但是我们在使用输入法输入汉字的时候，`input` 标签内会先出现拼音，等确定选择哪个字或是词语之后按下空格或者对应的数字键，汉字才会出现在 `input` 标签内，可就在汉字准备出现在 `input` 标签内的时候，`AngularJS` 的机制就判定了监听变化，并且把拼音也算进这变化之中，这就使判定出错。
  
- 下午有重新整理编辑页面抽奖功能的代码，做了一系列优化与封装等，由草版变为正式版。

- 军哥中午跟我说咱 70c 的 H5 制作平台就交给我来负责了，然后有新人来也交给我带，嗯... OK，没问题。

### *Date: 2 - 29 (一)*

#### Plan:

- 完善大转盘编辑、预览页面

  主要调试细节问题和与后端调试接口数据
  
#### Mark:

- 上午调试大转盘抽奖发现百分比控制的元素大小或距离会有小数上的偏差，类似于 `rem` 产生的 <a href="http://taobaofed.org/blog/2015/11/04/mobile-rem-problem/" target="_blank" title="rem 产生的小数像素问题">小像素问题</a>。

- 下午调试大转盘指针在指向抽奖结果那格区域的随机摆动角度，并没有与后端调试接口数据，后端还是一片混乱，各种报错，无法调试状态。

- <a href="http://monine.github.io/study/public/lottery_dzp.html/" target="_blank" title="大转盘抽奖">大转盘抽奖 Demo</a>

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

- 军哥介绍了一个替代 <a href="http://getf5.com/" target="_blank" title="f5">f5</a> 的前端开发工具 <a href="http://leeluolee.github.io/2014/10/24/use-puer-helpus-developer-frontend/" target="_blank" title="Puer">Puer</a>

  > Puer 是一个可以实时编辑刷新的前端服务器

- 阅读了一些关于 <a href="http://www.ibm.com/developerworks/cn/web/wa-jsmemory" target="_blank">js 内存泄漏</a> 的相关知识
