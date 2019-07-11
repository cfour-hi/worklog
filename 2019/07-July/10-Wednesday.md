## 计划任务

- [x] CRM v1.21 和 工单 v1.26 版本发布及 sentry 线上问题跟踪

  此次发布在版本合并出现了问题，前一晚的一些改动内容并没有合并发布。  
  原因是由于自身失误，通过 git fetch 命令获取了远程代码，但是执行 merge 命令的时候目标分支是 local-branch，其实应该使用 remote-branch。  
  另外一个解决此问题的方法是不使用 git fetch 命令获取远程代码，而是直接通过 git pull 命令。因为 git fetch 命令仅将代码从远程下载，保存到 `refs/remotes/<remote>/`，locan-branch 不会有任何改动，非最新代码。git pull 命令会做两件事情，git fetch 和 git merge remote-tracking-branch，也就是说，除了 fetch，还会 merge 当前分支所跟踪的远程分支内容，再合并分支时，可直接 merge local-branch。

  以上涉及到一些概念需要对 git 有一定的了解，可参考 [What is the difference between 'git pull' and 'git fetch'?](https://stackoverflow.com/questions/292357/what-is-the-difference-between-git-pull-and-git-fetch)

  在没有 fetch 的情况下执行 merge origin/<branch-name>，导致前一晚的改动内容丢失。

- [ ] sentry issue 自动分配

  相关文档已查阅许多，但是自动分配暂未找到配置。

- [x] 调研图表库在项目中的应用

  内心一点都不想使用百度的 EChart，替选方案是 [AntV G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html)。
