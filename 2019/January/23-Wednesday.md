## 计划任务

- [x] CRM v1.13 需求评审并确认方案和可行性

	需求背景是业务人员打电话时手动输入电话号码太麻烦，产品想提升业务人员打电话的效率。  
	产品原型就是通过扫描二维码打开页面，展示当前业务人员手上的所有客户的电话号码和昵称，通过点击一个按钮可以快速拨打电话。拨打电话完成之后返回页面，弹出跟进登记弹窗，让业务人员进行快速跟进登记。  
	这里有个不好控制的点，如何监听手机从系统拨打电话界面返回到我们的页面，这是系统层的应用，web 端完全无能为力。💀

	虽说 web 端在宏观层面上确实无法做到监听，但是从侧面入手的话，其实也还是有技巧搞定的。 [页面可见性 API](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API)，借助 `visibilitychange` 事件监听页面的可见性。当用户点击号码拨打电话，Android 会切换到系统拨打电话界面，需要用户手动点击拨打按钮，而 IOS 是直接拨打电话呼叫号码。同样，拨打结束后，Android 会回到系统拨打电话界面，需要手动操作（返回）才能回到页面，而 IOS 会直接回到页面。

	> The visibilitychange event is fired when the content of a tab has become visible or has been hidden.

	写 Demo 时发现一个问题，Android 按照预期触发了 `visibilitychange` 事件，而 IOS 没有如愿以偿，用户挂断电话后直接回到页面根本不会触发 `visibilitychange` 事件。💀  
	原因不得而知，这种需求本身就比较奇葩，所以也不打算深究。跟产品协商确认换种交互方式，当用户点击手机号码时就弹出跟进登记的弹窗即可。

	最后此版本交由 @田斌 负责，@彭泽华 配合，@三炮、@巧云 待命协助。

## 阅读思考

- [深度调查 | 为什么我们不能访问谷歌？(长文慎入)](https://medium.com/@moreless/%E6%B7%B1%E5%BA%A6%E8%B0%83%E6%9F%A5-%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E4%BB%AC%E4%B8%8D%E8%83%BD%E8%AE%BF%E9%97%AE%E8%B0%B7%E6%AD%8C-%E9%95%BF%E6%96%87%E6%85%8E%E5%85%A5-be7f4611780)

- [热修复、生态、混合工程，Flutter 产品路线图正式公布](https://zhuanlan.zhihu.com/p/55169974)

	感觉今年已经可以正视 Flutter 啦

- [我们是如何将 3 万代码从 Flow 移植到 TypeScript 的？](https://www.infoq.cn/article/2_bXlxhUgmZE6lwK1E5K)

	> 不过，Babel 7（支持 TypeScript）的发布引起了我的注意。这个版本意味着采用 TypeScript 并不一定要引入整个 TypeScript 生态系统，我们可以继续使用 Babel。更重要的是，这意味着我们可以使用 TypeScript 作为类型检查器，而不是一门“语言”。

	打算在 monine.github.io 博客项目使用 TypeScript


## 探索发现

- [spritejs](https://github.com/spritejs/spritejs)

	> Draw graphics on a canvas through simple object-oriented dom-like API. Vue & React/Preact supported.

	基于 canvas 的图形渲染引擎

	[干货 | 跨平台 Canvas 绘图引擎背后的黑科技](https://mp.weixin.qq.com/s/8J-uDw0qwDbj21UkQch2KA)

- [flutter-go](https://github.com/alibaba/flutter-go)

	> flutter 开发者帮助 APP，包含 flutter 常用 140+ 组件的demo 演示与中文文档
