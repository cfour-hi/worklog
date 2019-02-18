## 计划任务

* [x] 2 月份目标计划表

* [] 工作周报

* [x] 跟进工单项目 v1.15

	另外让 @巧云 @三炮 将页面的魔法数字全部替换掉

## 阅读思考

* [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)

	1. Server Rendering（服务端渲染）

		> Server rendering generates the full HTML for a page on the server in response to navigation. This avoids additional round-trips for data fetching and templating on the client, since it’s handled before the browser gets a response.

		服务端渲染为在服务器上生成完整的 HTML 以响应导航（页面请求），这避免了在客户端上进行数据获取和模板化的额外往返，因为它是在浏览器获得响应之前处理的。

		> generating pages on the server takes time, which can often result in a slower Time to First Byte (TTFB).

		在服务器上生成页面需要时间，这通常会导致较慢的 TTFB（客户端接收到来自服务端响应的第一个字节的时间）。

	2. Static Rendering（静态渲染）

		> static rendering means producing a separate HTML file for each URL ahead of time.

		静态渲染意味着提前为每个 URL 生成单独的 HTML 文件，

		> One of the downsides to static rendering is that individual HTML files must be generated for every possible URL. This can be challenging or even infeasible when you can't predict what those URLs will be ahead of time, or for sites with a large number of unique pages.

		静态渲染的一个缺点是必须为每个可能的 URL 生成单独的 HTML 文件，如果无法提前预知这些 URL，或者对于具有大量唯一页面的网站，这具有挑战性甚至是不可能的。

		> it’s important to understand the difference between static rendering and prerendering: static rendered pages are interactive without the need to execute much client-side JS, whereas prerendering improves the First Paint or First Contentful Paint of a Single Page Application that must be booted on the client in order for pages to be truly interactive.

		理解静态渲染和与渲染之间的区别非常重要：静态渲染页面是交互式的而无需执行更多客户端 JS，而预渲染改进了必须在客户端上启动的单页应用程序的 First Paint 和 First Contentful Paint 使页面具有真正交互性。

	3. Client-Side Rendering (CSR)（客户端渲染）

		> Client-side rendering (CSR) means rendering pages directly in the browser using JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.

		客户端渲染意味着使用 JavaScript 直接在浏览器中渲染页面。所有逻辑，数据获取，模板和路由都在客户端而不是服务器上处理。

**找事情做的能力**

昨天在喜马拉雅听书采采的段子频道听闻如何去掉 WPS 广告，今天尝试一下。

1. 卸载 WPS

	选择 “不喜欢弹窗广告”，橙色按钮文字会变为 “关闭广告”。

	![](./assets/20190218091817.png)

2. 点击 “关闭广告” 按钮

	会弹出 WPS Office 配置工具窗口，取消所有勾选，点击 “确定” 按钮，会回到卸载 WPS 窗口。

	![](./assets/20190218091852.png)

3. 点击 “已完成”，结束。

666666666666666666...
