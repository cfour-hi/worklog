# 20200706

## 计划任务

- [x] 帮助 @彭旭 解决落地页项目结构调整出现的问题
- [x] 面试
- [x] lerna 实践

## 记录总结

### lerna 实践

之前使用 lerna 遇到一些问题，无法在 package 目录下运行根目录下安装的 rollup 命令。

```bash
rollup: command not found
```

根据 lerna 官方文档描述：

> Note that devDependencies providing "binary" executables that are used by npm scripts still need to be installed directly in each package where they're used.

可执行文件仍需安装在每个 package 项目内，所以需要使用 `lerna add rollup` 将 rollup 安装在所有 package。
