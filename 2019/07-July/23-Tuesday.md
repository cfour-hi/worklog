## 计划任务

- [x] 自动化播报业绩

  今天凌晨并没有自动化播报业绩到企业微信群里，到服务器上测试运行脚本服务发现是因为 puppeteer 运行错误。  
  经过几番折腾，找到 [puppeteer docs Troubleshooting](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md)，跟着文档一步步处理，最终成功解决问题。

  puppeteer 在服务器 CentOS 7 系统运行正常后，又发现截图出来的中文字体成了部分是长方形，很容易发现是因为字体问题，在 puppeteer 的 github issues 找到相关讨论解决此问题 [The problem of Chinese disorderly code](https://github.com/GoogleChrome/puppeteer/issues/1143#issuecomment-428030945)。

  测试更新之后部署到服务器，再看明天凌晨自动化播报业绩是否正常。
