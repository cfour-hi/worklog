## 计划任务

- [x] ESLint npm 包

  公司内网搭了 NPM 镜像，折腾了好久登录的问题，登录的时候总是报 409 错误，最后竟然是密码错误的原因 💀。  
  目前应用到项目中 ESLint 检测还存在 循环依赖 问题。

## 今日收获

### Git 创建无 commit history 分支

相关参考：

- [How to push new branch without history](https://stackoverflow.com/questions/12543055/how-to-push-new-branch-without-history)

基于一下几点考虑：

1. 目前 工单 和 CRM 并行开发，有时需要共享 开发/测试 环境，两个项目版本分支的代码需要合并到另外一个公共分支才能发布。这样的模式操作起来很麻烦，需要合并到项目版本分支，再又合并到公共分支，而且会产生大量 merge commit；
2. 现在小伙伴的代码已经基本没有个明显（格式、命名等）问题，不需要再像以前那样提交 PR 让我审查；
3. 组织小伙伴一起进行代码评审，commit history 定位更加清晰；
4. 版本分支可保留，内容只包含本次版本改动，方便未来溯源；
5. 合并到 master 之前可方便清理掉所有 merge commit；
