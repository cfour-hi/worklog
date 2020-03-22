## 计划任务

- [x] 跟进媒资 v1.4.7 迭代

  完成渲染器组件内容渲染的抽象；

- [x] 面试

## 探索发现

### [【Vue】通过 \$emit 抛出的事件，如何知道上层是否完成事件回调](https://github.com/vuejs/vue/issues/5443)

利用 Promise 特性，其实也是一种另类的发布订阅模式。

```js
// in a method
await new Promsie((resolve, rekect) => {
  this.$emit("eventname", args, resolve, reject);
});
// then... do something
```
