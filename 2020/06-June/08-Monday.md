# 20200608

## 计划任务

- [ ] 解决统计插件在使用 vue-router 实例方法 `push、forward、back...` 进行路由跳转时 `document.referrer` 不更新问题

## 今日总结

[Document.referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer)

目前发现只有通过用户点击 `a` 标签和使用 `window.location` 修改地址才能产生 `document.referrer`。

vue-router 的 hash 模式和 history 模式，并非真实页面跳转，其实都只是局部更新页面内容，只是这个局部范围可大可小。如果 “局部” 对应的是页面全部内容的更新，在感知上会误以为是页面跳转了，其实并没有。

本质上，浏览器必须从服务器获取（请求） html 内容。
