## 计划任务

- [x] cascader 组件 changeOnCloseOrClear\_ 拆分为 changeOnClose\_ 和 clear\_ 事件

  在所有业务代码进行替换

- [x] 重构部门级联组件

  也是用基于 element-ui cascader 组件的业务包装组件  
  在所有业务代码进行替换

## 阅读思考

### [简单盘点浏览器的几种滚动行为](https://xiaotianxia.github.io/blog/vuepress/js/scroll_behaviors.html)

Get 新知识点：

1. `overscroll-behavior: contain;`  
   多滚动区域，滚动不传播。  
   元素区域滚动不影响页面滚动

2. `scroll-snap-*`  
   规范滚动元素的定位  
   就是那种整屏滚动

3. history.scrollRestoration  
   设置返回页面是否返回原滚动位置  
   浏览器会对历史页面滚动位置进行缓存，通过此属性可以丢弃缓存。
