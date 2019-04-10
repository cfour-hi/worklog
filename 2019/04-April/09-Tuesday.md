## 计划任务

- [x] 完善一些项目文档

- [x] vscode jsconfig.json

  支持 F12 跳转到变量和引用定义文件位置  
  参考：[vscode jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)、[Vetur Project Setup](https://vuejs.github.io/vetur/setup.html#project-setup)

## 临时任务

- [x] 修复页面同时包含多个科目级联组件时产生的问题

  昨天晚上解决 element-ui 升级导致的科目组件问题，当点击外部元素关闭级联下拉选择面板时不触发 focus 事件，导致不向上层 emit change 事件，实现方案仍然有问题，未考虑有多个科目组件同时存在的情况。  
  解决问题的核心在于：仅当级联下拉选择面板打开时才在 document 上绑定 click 事件，处理点击外部元素关闭下拉选择面板的场景。

  晚上发现在抽象封装 element-ui cascader 组件时，发现科目组件仍然有问题，change 事件被多次调用。  
  原因在 focus 事件触发事件比较早，内部业务的代码做了 setTimeout 处理，因为没有设置 timeout 值，执行业务代码时，判定是否打开 下拉面板 的变量值不准确。  
  其实主要问题还是 focus 事件的触发无法掌控。
