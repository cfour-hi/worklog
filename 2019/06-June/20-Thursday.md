## 计划任务

- [x] sentry 工作流

  昨天的遗留问题 401 未授权已经找到原因，是没有配置身份验证，本地没有 ~/.sentryclirc 文件。[相关文档](https://docs.sentry.io/cli/configuration/)

  解决 401 问题之后又遇到项目配置上的问题，运行脚本又报错项目找不到。

  ![ZSMtyD.png](https://s2.ax1x.com/2019/06/21/ZSMtyD.png)

  这里是我自己的问题，一直以为是 gitlab 上的项目，但其实是 sentry 上的项目。最后脚本如下：

  ```bash
  #!/bin/sh

  # export SENTRY_LOG_LEVEL=debug

  # Assumes you're in a git repository
  export SENTRY_AUTH_TOKEN=adc6cbeffb8d459fa38c131a357517fb18acec76a4d34197a794a780e4c03
  export SENTRY_ORG=sentry

  VERSION=$(sentry-cli releases propose-version)

  # Create a release
  sentry-cli releases new -p marketing-line-fe $VERSION

  # Associate commits with the release
  sentry-cli releases set-commits --auto $VERSION
  ```

  运行没有报错，成功发布版本。

  ![ZSWwYd.png](https://s2.ax1x.com/2019/06/21/ZSWwYd.png)

  后续步骤暂时先放着，先思考工作流上的两个问题，异常如何自动分配到小伙伴？小伙伴修复异常之后如何关闭 sentry 异常？

  异常自动分配到小伙伴很简单，主要的工作量是关系匹配。最简单的就是将小伙伴与路由绑定起来，每个小伙伴负责一部分模块。

  小伙伴修复异常之后以怎样的 方式/流程 关闭 sentry 异常，这个问题关系到版本标识的定义。  
  首先，异常上报的时候需要版本标识号，确定这个异常是发生在哪个版本，这个可以在项目代码内 sentry 初始化的地方进行配置：

  ```js
  Sentry.init({
    release: 'sentry-project-name@<version>',
  });
  ```

  当异常上报到 sentry，小伙伴先得清楚在哪个版本进行修复和发布，这个版本标识与 sentry 项目的版本标识必须一致。这样小伙伴才能在修复异常之后，告知 sentry 与之关联的异常在哪个版本被解决，更新异常的状态标识变成 resolve。

  查阅文档，集成 gitlab 后，小伙伴可以在 commit message 包含 `FIXES <sentry-issue-id>` 告知 sentry 已修复异常，只要带有此 commit 的版本发布，sentry 就会关闭异常。

  _PS: 关于 sentry 关闭异常的个人理解有待验证_

  参考文档：[Sentry Workflow and Integrations Releases](https://docs.sentry.io/workflow/releases/?platform=browser)

  然后问题又来了，由于项目结构原因，我们的项目并不遵循 semver 版本规范，所以不能以 package.json version 作为版本标识。

  思考过后，想清楚我们项目的真正版本标识其实是 git tag，那我们可以就拿 tag 作为版本标识。而目前我们项目的版本标识并没有通过脚本自动化处理，纯手工操作的话，不仅麻烦而且容易出错，所以首先得解决脚本自动化处理版本标识和 tag 的问题。
