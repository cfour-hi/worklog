## 计划任务

- [x] 预约导出版本技术方案评审

  方案未考虑 1w 条数据这个节点的处理

  下午已出方案结论，需要考虑 1w 调数据这个节点情况，>1w 条数据才做预约导出。

- [x] 协助 @巧云 梳理预约导出版本任务排期

  处理预约导出时接口传参难题，已完成。

- [x] 关于 form-item 相关组件的推行

  由 @彭泽华 给 @三炮、@巧云 讲解实现方案，再分配具体任务给到个人。

  关于文件目录划分、命名的说明：

  > .vue 文件除 index.vue 之外的其它所有文件命名都使用 **大驼峰命名**，例：
  >
  > FormItemInput.vue
  > FormItemSelect.vue
  >
  > 同类型组件存在一个目录，目录名称使用 **连字符命名**，例：
  >
  > form-item
  > |-- Input.vue
  > |-- Select.vue
  >
  > **但！** Input.vue 和 Select.vue 文件内 name 属性值应该为 目录名 + 文件名 组合，例：
  >
  > Input.vue 的 name 属性值：FormItemInput
  > Select.vue 的 name 属性值：FormItemSelect

## 临时任务

- [x] 业绩播报添加 衡阳分公司
