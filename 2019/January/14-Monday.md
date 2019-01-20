## 计划任务

- [x] 完善 CRM 系统登录页面

	登录页面的登录失败错误提示之前一直使用 element-ui 的 message 消息提示，这个改版除了登录页面整体风格变化，登录失败的提示也做了调整。  
	最终与设计再次进行了确认，只针对登录失败的错误提示依照设计稿的交互方式实现，其它的不做改变，比如用户被调动部门之类。

	![CRM 系统登录页面](./assets/20190114_151648.gif)

- [x] 工作周报

## 每日阅读

- [浏览器往返缓存（Back/Forward cache）问题的分析与解决](https://efe.baidu.com/blog/bfcache-analysis-and-fix/)

	这篇文章让我想起之前我在打造 blog 时遇到的一个无解问题 [SPA 遇到 bfcache 所引发的无解闪现](https://monine.github.io/#/article/27)，我那会遇到这样的问题并没有深入去研究浏览器内核相关代码，所以文章标题写了一个词 “无解”。  
	今天看到的这篇文章通过追溯 webkit 源码，在源头上找到问题所在，分析找到解决问题的方案，非常赞。  
	可是我的 blog 是 SPA 页面，是否能够以相同的方式解决问题还有待探索，加入 TODO，有待实践。

- [精读《setState 做了什么》](https://github.com/dt-fe/weekly/blob/master/87.%E7%B2%BE%E8%AF%BB%E3%80%8AsetState%20%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%E3%80%8B.md)

	通过这篇文章又去读了 [How Does setState Know What to Do?](https://overreacted.io/how-does-setstate-know-what-to-do/)，感慨 react 的设计思想前卫。  

	> the react package intentionally only exposes APIs for defining components. Most of the implementation of React lives in the “renderers”.  
	> react-dom, react-dom/server, react-native, react-test-renderer, react-art are some examples of renderers   
	> --《How Does setState Know What to Do?》

	react 只提供 API，具体实现是在 renderers 内，所以 react 需要配合 renderer 使用。  
	好比现在很多大厂实现的 “一份代码，多端使用” 框架，比如京东的 [taro](https://github.com/NervJS/taro)，思想上都是用一个意思。  
	666...

- [常见的CSS图形绘制合集](https://www.zhangxinxu.com/wordpress/2019/01/pure-css-shapes/)  
	[粉丝群第1期CSS小测点评与答疑](https://www.zhangxinxu.com/wordpress/2019/01/css-quiz-1/)  
	[分享三个纯CSS实现26个英文字母的案例](https://www.zhangxinxu.com/wordpress/2019/01/pure-css-26-letters/)  
	[小tips: 纯CSS实现打字动画效果](https://www.zhangxinxu.com/wordpress/2019/01/css-typewriter-effect/)  
	[CSS/CSS3 box-decoration-break属性简介](https://www.zhangxinxu.com/wordpress/2019/01/css-css3-box-decoration-break/)

	大佬张鑫旭的一系列干货，我等渣渣只能仰望~~~  
	等等，说要仰望，今天在扇贝阅读的时候，听说 21 号凌晨会有月全食  
	🌕🌖🌗🌘🌑🌒🌓🌔🌕

## 探索折腾

- Trilium

	已经大概了解如何使用，不过我并不打算使用 Trilium。通过了解 Trilium 的设计，思考之后，我还是决定将工作日志放到 Github 上，只是不再像从前那样写在 Issues 内，而是参考 Trilium 将工作日志依据年月日的方式模块划分，以目录文件的形式保存在仓库内。  
	所以这是重新起航写工作日志的第一篇，其实公司已经要求写工作日志几个月了，不过是写在公司内网搭建的产品上。以后会每天在这里写好，再临下班时 copy 到公司内网产品上去。
