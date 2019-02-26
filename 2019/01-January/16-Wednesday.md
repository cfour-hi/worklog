## 计划任务

- [x] 项目流程规范培训

- [x] 尝试使用 mixin 解决表单内所有 input 的 keyup.enter 事件触发查询的可行性

  已尝试确认可行，因为所有需要通过 keyup.enter 触发查询的 input 都包裹在 el-form 组件内，所以可通过 **事件委托/代理** 的方式监听到由后代元素 input 冒泡上来的 keyup 事件。判定 keyCode 为 13 的情况及其它条件满足的情况下下，调用查询方法，即可达到目的。

- [x] 2018 年度工作总结

  写了个大纲，2018 年做了好些事情。  
  是正式作为小 leader 的元年，带领三个小伙伴一起做好营销线的系统；  
  是特别忙碌的一年，忙碌的都没有精力想法写日志和文章，很惭愧；  
  是英语提升的爆发年，通过合适合理的学习方式，现在已经毫无畏惧英文文档。  
  ...

## 阅读思考

- [精读《国际化布局 \* Logical Properties》](https://github.com/dt-fe/weekly/blob/master/86.%E7%B2%BE%E8%AF%BB%E3%80%8A%E5%9B%BD%E9%99%85%E5%8C%96%E5%B8%83%E5%B1%80%20-%20Logical%20Properties%E3%80%8B.md)

  只看标题，还以为是介绍 i18n 相关的内容。看完之后，发现原来是介绍前端前沿动向，改造 CSS box model。

  > 为什么 inline 表示从左右，block 表示上下呢？还记得 display: inline 吗？此时排版是从左到右排布的，而 display: block 的排版是从上到下的。

  顺道也看了里面的一篇扩展文章 [和欧洲人打交道一定要知道他们数字写法，否则吃大亏！](https://zhuanlan.zhihu.com/p/52445123)，欧洲国家千位数分隔符使用用 “.”，而我们的思维意识里认为 “.” 是小数分隔符。

  > 所以，€13.215 其实是 €13,215，不是 13 欧元，而是 1.3 万欧元，亲！

- [currentColor 与 CSS 自定义属性之间的差异](https://www.w3cplus.com/css/currentcolor-vs-custom-properties.html)

  > **currentColor** 只可以在接受 <color> 值的地方使用它；如果该属性不能接受 <color> 值，它就不能接受 currentColor 作为值。  
  > currentColor 关键词不是在计算值时解析，而是对本地 color 属性的使用值的引用。

  currentColor 被子元素 inhert，取字面量值在子元素本地解析最终值。  
  CSS 自定义属性被子元素 inhert，取自定义属性被解析后的最终值。
