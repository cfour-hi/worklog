## 计划任务

- [x] 工单 v1.21 上线跟进

  我这边有个问题是科目组件的科目名称没有同步更新，原因是更换组件时没有注意到这个逻辑，这又反映出自己的粗心和单元测试没有跟上。

- [x] 信息流广告创意 批量导入 和 单个导入 按钮百度统计追踪

  百度统计的统计追踪还需要规范化处理，交由 @彭泽华。

## 临时任务

- [x] 解决生成环境服务器构建找不到 .git/modules 报错问题

  因为在生产环境服务器构建时，所有子模块都是从单独的项目仓库获取的，并没有执行 `git submodule update --init` 生成相关子模块内容，所以不存在 .git/modules 目录。而项目有个 package.json scripts 有配置 install hook，导致 clone 完项目安装依赖时触发了 install hook，install hook 会执行一段脚本将 pre-commit 文件写入到 .git/modules 目录下的所有子模块内。找不到 .git/modules，所以报错。

  解决方案分两种，第一种是在生产环境服务器构建时采用 `git submodule update --init` 加载所有子模块，这样就会生成 .git/modules 目录；第二种是在 install hook 脚本内进行判断是否存在 .git/modules 目录，不存在则不执行写入操作。  
  目前使用上述第二种方案，通过 `fs.existsSync('../.git/modules')` 判定 .git/modules 是否存在。

## 今日收获

### [Chrome 请求头 Provisional headers are shown 解决方式](https://stackoverflow.com/a/34318995/11586828)

原因是因为 Google 团队模块化重构了 Chromium 引擎 [相关官方信息](https://www.chromium.org/servicification)
