# 20200720

## 计划任务

- [ ] 跟鲁班前端小伙伴讲解目标、描述未来
- [x] 前端委员会周会议
- [x] 鲁班复盘会议
- [ ] 调整业绩播报域名

## 记录总结

招聘初级开发人员计划

因数据不准确，暂停业绩相关播报。

## 学习思考

### [tapable](https://github.com/webpack/tapable)

[Webpack tapable 使用研究](https://juejin.im/post/5d36faa9e51d45109725ff55)

#### SyncHook

同步钩子，每个插件无条件顺序执行。

#### SyncBailHook

插件返回非 undefined 值，后续插件不再执行。

#### SyncWaterfallHook

插件回调函数参数为上一个插件执行完成之后的返回值，如果返回值为 undefined，则沿用上上个插件的返回值，以此类推。

#### SyncLoopHook

插件返回非 undefined 值，则重复执行当前插件，返回 undefined，则继续执行其它插件。

#### AsyncParallelHook

并行执行  
此 hook 的重点，是保证所有异步插件执行完成，并调用回调之后，再执行触发事件时的回调。

#### AsyncParallelHook 的 Promise 形式

使用 Promise 特性的 AsyncParallelHook

#### AsyncParallelBailHook

并行执行  
根据异步插件注册顺序（不关心异步插件执行完成的顺序），插件回调传入非 undefined 参数，会立即触发最终的回调。当然，其它异步插件仍会执行。

#### AsyncParallelBailHook 的 Promise 形式

使用 Promise 特性的 AsyncParallelBailHook

#### AsyncSeriesHook

串行执行  
??? bug
根据异步插件的注册顺序执行，插件执行回调时传入非 undefined 参数，则终止后续其它异步插件执行，直接执行最终回调。
???
等到前一异步插件任务执行完成再执行后续异步插件任务。

#### AsyncSeriesHook 的 Promise 形式

使用 Promise 特性的 AsyncSeriesHook

#### AsyncSeriesBailHook

串行执行  
根据异步插件的注册顺序执行，插件执行回调时传入非 undefined 参数，则终止后续其它异步插件执行，直接执行最终回调。
