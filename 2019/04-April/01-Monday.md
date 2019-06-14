## 计划任务

- [x] 小伙伴绩效考核评定

- [x] 更新 micro-frame 项目配置

  配置 svg-sprite-loader 处理 svg，默认处理 svg 的 loader 是 file-loader。  
  ![V5FGAe.png](https://s2.ax1x.com/2019/06/14/V5FGAe.png)

  配置环境变量，NODE_ENV 表示模式，更多的应用于项目构建行为。应用程序中的环境变量意思是针对应用程序所处环境而言，跟后端服务紧密相关。  
  使用 cross-env 在 package.json scripts 配置 VUE_APP_ENV 作为应用程序环境变量：

  ```
  "build": "cross-env VUE_APP_ENV=production vue-cli-service build",
  "build:dev": "cross-env VUE_APP_ENV=development vue-cli-service build --mode development",
  "build:test": "cross-env VUE_APP_ENV=test vue-cli-service build",
  "build:pre": "cross-env VUE_APP_ENV=pre vue-cli-service build",
  ```

  同样，根据环境变量配置外部依赖，使用 CDN 加载较大的第三方依赖。  
  ![V5F37D.png](https://s2.ax1x.com/2019/06/14/V5F37D.png)  
  babel-polyfill 还需要确定到底需不需要引入完整包  
  ![V5FN9A.png](https://s2.ax1x.com/2019/06/14/V5FN9A.png)

  小伙伴今天开发也遇到一些问题，子模块项目的任何修改都会触发主项目对子模块项目 commit hash 追踪，会在主项目产生改动，需要提交到远程仓库。  
  但是在多个小伙伴并行开发的情况下，每个小伙伴都会对子模块项目进行修改，导致主项目产生改动，需要提交。如果 A 将主项目的改动提交到远程 dev 分支，其它小伙伴也产生改动并 commit，然后执行 `git pull --rebase origin dev` 合并 dev 分支最新内容，就会产生冲突：  
  ![V5FYhd.png](https://s2.ax1x.com/2019/06/14/V5FYhd.png)  
  最无奈的是这种冲突还是没办法解决的，后来跟 @田斌 讨论之后，我们认为可以暂时不管主项目对子模块项目的追踪改动，并不影响其他人在子模块开发，暂时先这样。

- [x] 周报

## 今日概览

晚上参与了 4 月份目标会议，还是挺佩服校长的，思维、逻辑、重点、方式 等等都很清晰，当务之急，前因后果的讲解无懈可击。  
之后又跟 波哥 和 Fighting 单独聊，很多无奈，都不知道该怎么说。  
感觉就是，每天都很忙，但又不知道每天到底都忙了些什么。
