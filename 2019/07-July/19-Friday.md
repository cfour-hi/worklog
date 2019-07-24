## 计划任务

- [x] 工单 v1.27 版本开发任务

  已完成

- [x] CRM v1.22 版本初审第二回

  仍存在一个问题：通过天润融通拨打完电话之后，天润融通的回调会有多长的延迟时间，这涉及到产品如何定义交互。

- [ ] 自动化播报业绩

  昨天完成的在页面点击按钮生成图片并下载并不满足需求...
  真正的需求是通过一个链接就可以拿到这张图片，然后将这张图片发送到企业微信群中...
  我这边给出的方案是使用无头浏览器抓取页面内容、截图、传输。  
  今天先尝试是否可行...

  已确定方案是可行的，只需运维配合定时任务调用我的接口，获取图片内容即可。
  无头浏览器使用的是 [puppeteer](https://github.com/GoogleChrome/puppeteer)，puppeteer 作为 npm 依赖，在国内安装比较坑，需要指定源。

  ```bash
  PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org npm install puppeteer
  ```
