## 计划任务

- [x] 跟进上线后 sentry 异常

  之前 sentry 平台积累了很多无需上报的异常，已全部清空，用了一个很清奇的方式，脚本模拟点击。

  ```js
  (function() {
    document.querySelector('.chk-select').click();

    setTimeout(() => {
      document
        .querySelector('.stream-select-all-notice')
        .querySelector('a')
        .click();

      setTimeout(() => {
        document.querySelector('.dropdown-actor.action-more').click();

        setTimeout(() => {
          document.querySelector('.action-delete').click();

          setTimeout(() => {
            document.querySelector('.eqrebog0.css-m47q4r').click();
            window.location.reload();
          }, 300);
        }, 300);
      }, 300);
    }, 300);
  })();
  ```

  以上放到 开发者工具 Sources Snippets 内运行即可。

  目前已基本稳定异常监控上报的内容，不会再达到之前那样的数量级。接下来要集成 sentry 和 gitlab，以及确定可行的异常修复工作流。工作流的核心在 release，不然如何确定异常已经修复？

  官方文档介绍使用 sentry-cli，安装之后官网下面这段代码死活跑不通，debug 模式下给出的错误信息是 401 未授权，但是我明明已经生成了 Auth Tokens，不明所以。

  ```bash
  #!/bin/sh

  export SENTRY_LOG_LEVEL=debug

  # Assumes you're in a git repository
  export SENTRY_AUTH_TOKEN=adc6cbeffb8d459fa38c131a357517fb18acec76a4d34197a794a780e4c03
  export SENTRY_ORG=sentry

  VERSION=$(sentry-cli releases propose-version)

  # Create a release
  sentry-cli releases new -p micro-frame $VERSION

  # Associate commits with the release
  sentry-cli releases set-commits --auto $VERSION
  ```

  报错信息：

  ![ZSMkiq.png](https://s2.ax1x.com/2019/06/21/ZSMkiq.png)
