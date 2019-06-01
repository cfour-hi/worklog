## 计划任务

- [x] socket.io 应用

  已实现 A 用户发送消息到服务端 socket，触发消息推送给指定 B 用户。

- [x] 工单 V1.21.1 补丁版本：解决系统更新后用户端更新问题

  axios 全局配置 withCredentials 为 true  
  响应拦截器判定 status 如果为 999999901 则刷新页面

## 阅读思考

### [How do browser cookie domains work?](https://stackoverflow.com/questions/1062963/how-do-browser-cookie-domains-work)

主要是不太记得 Set-Cookie 时 Domain 设置 .example.com 于 example.com 之间的区别，就查了 cookie domain match rule。  
区别就是 example.com 只能匹配自身，而 .example.com 可以匹配子域名。

> If there is a Domain attribute present, its value will be used as effective domain (if the value does not start with a . it will be added by the client).

这里说会被客户端加上 . 前缀，打开百度搜索页，在开发者工具通过 console 面板设置 cookie  
`document.cookie='a=1;domain=baidu.com;path=/'`  
最终 domain 字段显示的确实是 `.baidu.com`，也就是说浏览器自动添加了 . 前缀。

然后，至于 http 请求的响应头 Set-Cookie 是不是同样会自动添加 . 前缀，后天联调时再看。

## 今日收获

### http 缓存之响应头 Vary

1. http 的默认缓存方式是 请求方式 + URL
2. Origin 请求头只出现在 CORS 请求和 POST 请求中
3. 元素标签的跨域属性 [crossOrigin](https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_settings_attributes)

实际场景：

页面通过 img 标签请求一张跨域图片，因为 img 标签请求的资源没有跨域限制，所以请求成功并缓存。  
再通过 http 请求跨域图片，图片已配置 Access-Control-Allow-Origin: \*，在不携带 cookie 的情况下，TODO:
