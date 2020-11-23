# 20201111

## 计划任务

- [x] 【方案】图片编辑器 psd 解析
- [x] 【管理】@周奇 读书后沟通
- [x] 【项目】图片编辑器重构

## 临时任务

- [ ] 【管理】北斗事业部前端 Q3 绩效考核表

## 记录总结

### 【方案】图片编辑器 psd 解析

@彭旭 仍采用 psd.js，目前困难点不是在解析上面，而是如何找到有用的解析数据和还原。

### 【项目】图片编辑器重构

1. 解决 viewport 与 history 的问题  
   重新设计 viewport 缩放功能，依赖画布原始宽高。
2. 新增组件可自定义配置 moveable 行为

- feat: improve moveable resizable
  support custom keepRatio and renderDirections
- refactor: straw index props
- refactor: improve viewport
- refactor: not completed history
