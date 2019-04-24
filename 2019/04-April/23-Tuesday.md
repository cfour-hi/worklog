## 计划任务

- [ ] 优化 查询课程、赠品 组件

  工单 v1.19 需求

- [x] mixin 处理初始化 prop 值

  现在所有 查询表单-表格 页面 el-form 元素都需要添加 inline 属性，所以想尝试能否通过 mixin 直接修改 prop 值，减少业务代码的重复代码。如果可行，同样可以用到 size、clearable 属性，因为现在所有按钮都需要手动添加 size="small" 属性，查询表单的每个查询项都需要添加 clearable 户型。

  今天的最终尝试结果是无法通过 mixin 初始化 prop 值，达到修改第三方组件初始化 prop 的效果。  
  调试了很久 vue 源码，并没有找到可行方案。  
  最初通过 beforeCreate 钩子将 \$options.propsData 的 inline 属性设置为 true，这样是有效的。但是之后又会多次触发 update（Vue.prototype.\_update）,每次 update 都会调用 render（Vue.prototype.\_render）方法解析 template 获取 propsData，但 update 过程中没有找到合适的机会修改 propsData。有尝试过 beforeUpdate 钩子，但发现 beforeUpdate 执行后，还会多次执行 update，原因/原理 暂时不明。

- [x] 完善 form-search mixin 注释说明

  form-search mixin 有个 bug，某些场景下没有效果。  
  经过调试发现时因为 beforeCreate 钩子内向上查找 parent.$el 有可能为 undefined。想想也是，子组件 beforeCreate 的时候父组件的确有可能没有 $el 属性，\$el 属性的添加实在 beforeMounte 与 mounted 钩子之间。  
  解决这个 bug 就是讲 beforeCreate 改为 mounted 即可。
