## 计划任务

- [x] ESLint 替换 Prettier 保存时格式化代码实践

  在 VSCode 编辑器中，添加 ESLint 插件，在配置中添加 `"eslint.autoFixOnSave": true`，即可在保存文件时自动格式化成符合规范的代码。

  能否完全替代 Prettier 呢？这里需要做一些对比工作，Prettier 的格式化配置 ESLint 能否完全替代？

  Prettier 的 print-width 对应 ESLint 的 max-len，这条就没办法格式化，所以暂时先不考虑吧。
