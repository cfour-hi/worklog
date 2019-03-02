## 计划任务

- 跟进 业绩播报 版本测试进度

  此版本两个页面，按提单部门统计和部门目标设定，因为没有做分页处理，当数据量大时（> 500），页面渲染和操作体验非常不顺畅，必须进行处理。  
  已跟产品协商，提单部门统计页面做伪分页，后端依然返回所有数据。部门目标设定页面只展示当前选择部门和直属子级部门数据，分为两个 table。  
  按提单部门统计页面相关功能开发完成后，每页 table 数据在只有 20 条的情况下，依然没有解决页面渲染慢的问题。后来经过问题排查，发现时因为 element-ui table 的属性 summary-method 方法，每次 table 数据更新都被调用超过 50 次。通过 console.time 发现 summary-method 方法每次的执行时间是 100+ms，也就是说每次 table 更新都最少需要 5s 时间。  
  很显然，问题是出在 summary-method 方法，因为在此方法内执行了 table 每列数据的合计计算。其实只需要在此方法内返回早已计算完成的合计数据即可，而不应该再此方法内执行计算。

## 阅读思考

- [使用 document.scrollingElement 控制窗体滚动高度](https://www.zhangxinxu.com/wordpress/2019/02/document-scrollingelement/)

  两年前写过一篇关于滚动条归属的文章 [Scrollbar 的归属之谁拥有滚动条？](https://monine.github.io/2016/11/27/ScrollBar-%E7%9A%84%E5%BD%92%E5%B1%9E%E4%B9%8B%E8%B0%81%E6%8B%A5%E6%9C%89%E6%BB%9A%E5%8A%A8%E6%9D%A1.html)，噼里啪啦写了一堆，现在回看简直不明所以。

  > scrollingElement （ Document 的只读属性）返回滚动文档的 Element 对象的引用。 在标准模式下, 这是文档的根元素, document.documentElement.  
  > 当在怪异模式下， scrollingElement 属性返回 HTML body 元素（若不存在返回 null ）。

  然后又去回顾了一下 [scrollTo 方法](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)，如果想要实现平滑滚动，可以使用如下方式。

  ```js
  document.scrollingElement.scrollTo({
    top: 9999,
    behavior: 'smooth',
  });
  ```

  )
