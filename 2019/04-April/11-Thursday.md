## 计划任务

- [x] 优化 element-ui cascader 部门组件

  已完成，其实昨天是把问题搞复杂了。  
  另外发现 element-ui cascader 组件的一个小 bug，打开下拉面板的情况下，点击选择某个内容，然后切换到其它应用程序，此时下拉面板不会关闭，再通过点击下拉面板内容切换回浏览器，则会触发两次 cascader 组件的 change 事件。  
  [bug 示例](https://codepen.io/Monine/pen/eoWBYG)  
  暂时忽略这个 bug

## 临时任务

- [x] element table 业务封装 TzTable 支持自定义 header

  添加 header slot 即可，不过 vue@2.6.0 开始对 slot 做了更新，语法有修改。
