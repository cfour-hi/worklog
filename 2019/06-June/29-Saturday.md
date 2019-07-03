## 临时任务

- [x] 解决 [void elements](https://www.w3.org/TR/html/syntax.html#void-elements) 格式化自闭和问题

  img 元素在标准和规范中都是不建议自闭和，但是 [vetur](https://vuejs.github.io/vetur/) 使用 [pretthtml](https://github.com/Prettyhtml/prettyhtml) 插件却会给 img 元素格式化为自闭和标签。目前没有接口暴露修改这一行为，所以暂定方案是先屏蔽 ESLint 规则，跟进 vetur、pretthtml 相关调整我们再作调整。
