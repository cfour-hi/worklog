## 每日阅读

- [what-happens-when-zh_CN](https://github.com/skyline75489/what-happens-when-zh_CN)

	> 这个仓库试图回答一个古老的面试问题：当你在浏览器中输入 google.com 并且按下回车之后发生了什么？

	1. 检查 HSTS 列表
	2. DNS 查询
		1. 浏览器 DNS 缓存查询
		2. 本地 hosts 内 DNS 查询
		3. 向 DNS 服务器发送查询请求
	3. TLS 握手
	4. 服务器响应
	5. 浏览器接收
	6. HTML 解析
	7. CSS 解析
	8. 页面渲染
	9. GPU 渲染

	<!-- TODO: 深入探索 -->
			