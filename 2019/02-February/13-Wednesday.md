## 工作计划

* [x] CRM v1.13.1 上线

* [x] CRM v1.15 任务排期

	交由 @巧云 处理

## 临时任务

* [x] 解决线上问题：财务工单导出查询项时间范围值错误

	由于 element-ui el-date-picker 组件当用户选择开始时间和结束时间为同一天时，给出的值都是这一天 0 点时间值。之前查询相关任务都是由后端处理这个时间范围，但目前导出需要前端给出正确的一天时间范围值，也就是开始时间为 0 点，结束时间为 24 * 60 * 60 * 1000 - 1 的时间戳值。

	交由 @田斌 处理

## 阅读思考

* [🎉喜大普奔，ES2019登场](https://juejin.im/post/5c512592e51d4507786250b6)

	目前并没有想到这些个新特性有什么用途

* [YodaOS：一个属于 Node.js 社区的操作系统](https://zhuanlan.zhihu.com/p/55959617)

	一直觉得 IoT 未来潜力无限，这个系统让我看到一些曙光。

* [[译]使用Flutter一年后，这是我得到的经验](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2651013049&idx=2&sn=02d3be0c89406ba89d88ec6d4c093209)

	Flutter 潜力巨大，现在还是初期，早些掌握以及跟进发展，提升自己的竞争力。当然，前提是自己对这方面感兴趣。

* [The TypeScript Tax](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)

	> As TypeScript stands, I would definitely use it again in small open-source libraries, primarily to make life easier for other TypeScript users. But I will not use the current version of TypeScript in my next large scale application, because the larger the project is, the more the costs of using TypeScript compound.

	虽然作者给出 “成本大于收益” 这样的结论，但这并不能影响我尝试将 TypeScript 融入我司现在我负责的项目中。

	> 纸上得来终觉浅，绝知此事要躬行。 --《冬夜读书示子聿》

* [The Great Divide - Two front-end developers are sitting at a bar. They have nothing to talk about.](https://css-tricks.com/the-great-divide/)

	1. 国内像张鑫旭那样专注 CSS 的大神能有几个？
	2. 许多框架内前端 JS 开发人员真的不知道如何简化、语义化 HTML，也不知道 CSS 的经典解决方案。
	3. 都认为 JavaScript 才是前端人员的正经工作，知道基本的 HTML 和 CSS 就可以了。

	近两年才从事前端开发的小伙伴大多都有这样的问题，HTML 和 CSS 非常薄弱。

* [HTML5 Input Types: Where Are They Now?](https://www.smashingmagazine.com/2019/01/html5-input-types/)

	印象中以前在移动端使用 `type=search` 可以将键盘右下角按钮文字由确认变为搜索。
