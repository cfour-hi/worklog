## 计划任务

- [x] CRM v1.15 需求梳理和二次评审

- [x] 下次版本的前置工作

  1. api 调整合并到 dev 分支；
  2. 部门级联组件优化合并到 dev 分支；

## 阅读思考

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

  温故知新

  > Symbols cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.

  Symbols 不能被正确的 polyfill，所以在不能原生支持 symbol 类型的 浏览器/环境 中，不应该使用。

  > Only quote properties that are invalid identifiers.  
  > Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

  仅当对象属性为无效标识符的情况下使用引号包裹  
  主观上更加易读，优化语法高亮，更易于 JS 引擎优化。

  > Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf.  
  > Why? These methods may be shadowed by properties on the object in question - consider { hasOwnProperty: false } - or, the object may be a null object (Object.create(null)).

  不要直接使用 `Object.prototype`，同样还有 `hasOwnProperty`、`propertyIsEnumerable`、`isPrototypeOf`。  
  因为这些方法可能被覆写，或者是通过 `Object.create(null)` 创建的无属性对象。

- [How to control web page caching, across all browsers?](https://stackoverflow.com/questions/49547/how-to-control-web-page-caching-across-all-browsers?tdsourcetag=s_pctim_aiomsg)

  提问者因为安全测试，发现用户退出登录之后可以通过点击浏览器返回按钮，查看被浏览器缓存的上个页面。

  ```
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0
  ```

- [Optimize Website Speed With Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/speed/get-started)

  > **always start with an audit**
  >
  > - It creates a **baseline** for you to measure subsequent changes against.
  > - It gives you **actionable tips** on what changes will have the most impact.

  篇幅好长，一步步跟着实践，已经明白 Chrome Devtool Audit 如何使用。文中提到的几个优化点，其实也是践行早年的 [雅虎性能优化原则](https://developer.yahoo.com/performance/rules.html)。
