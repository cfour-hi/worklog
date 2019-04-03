## 计划任务

- [x] 跟进工单 v1.17 版本

## 临时任务

- [x] 粘贴上传图片功能

  参考：[直接剪切板粘贴上传图片的前端 JS 实现 - 张鑫旭](https://www.zhangxinxu.com/wordpress/2018/09/ajax-upload-image-from-clipboard/)

  需要这个功能推送财务出纳去使用系统

- [x] git commit hook 对改动文件做 lint 操作

  小伙伴在提交代码时没有开启本地开发服务，就没有发现代码格式问题，导致其他小伙伴拉取代码后，本地运行报错。  
  看了 .git/hooks 目录下的 pre-commit 钩子，第 2 行显示 `#yorkie 2.0.0`，然后 Google 查阅了 github repository。package.json scripts 有 install 钩子：`node bin/install.js`，最终依赖安装完成之后执行 install 钩子写入 .git/hooks 钩子文件。  
  根据 vue-cli 文档，可配置 [Git Hook](https://cli.vuejs.org/zh/guide/cli-service.html#git-hook)，但只应用于主项目，子模块项目因为是单独的 git repository，有自己的 git 配置。  
  查看子模块项目，发现没有 .git 隐藏目录，但是有 .git 文件，只有一行内容：

  ```
  gitdir: ../../.git/modules/src/CRM
  ```

  很明显，意思是子模块的 .git 目录指向主项目的 .git/modules/src/，也就是说子模块的 .git 配置存在主项目。  
  所以，子模块项目的 git hook 也是写在主项目的 .git 目录内。

  现在要解决的是如何在所有子模块项目 commit 时针对 commit 文件内容执行 lint 检测？
