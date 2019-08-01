## 计划任务

- [ ] 绩效考核

  这个月目标定的太难，小伙伴要拿 S 好难...

- [ ] 前进中...

- [ ] YAPI mock 高级语法示例

  写了一丢丢，有其它优先级更高的事情需要完成。

## 临时任务

- [x] 自动化业绩播报

  添加贵阳分公司业绩  
  定时任务添加 2:30

- [x] @田斌 Workbox Service-Worker

  Workbox 的出现就是为了解决 Service-Worker 过于底层，使用时需要非常小心翼翼的问题。  
  Service-Worker 在提升页面加载速度方面是肯定有帮助的，但是很遗憾，我们项目目前没有相关监控平台记录用户对站点的加载时间（貌似所有项目都没有，是不是可以加个？），无法计算出加上 Service-Worker 之后对性能提升的幅度。然后就是离线亦可加载出页面内容，当然，针对我们后台系统，并没有实质帮助，这个特性更多体现在移动端。

  跟 @田斌 做了一些相关讨论，对缓存策略方面有了确定的认识，相关内容可参考淘宝前端团队文章 [Workbox 3：Service Worker 可以如此简单](http://taobaofed.org/blog/2018/08/08/workbox3/)。

- [x] 工单到账时间交互修改

  针对 工单管理>工单列表 和 财务管理>工单审核列表 两个页面的查询项 到账时间 做出交互修改：当用户选择完成时间范围之后，结束时间的时分秒默认值应为 23:59:59。

## 阅读思考

### [还算有点用的 scrollTo 和 scrollBy 两个 JS API](https://www.zhangxinxu.com/wordpress/2019/07/js-scrollto-scrollby/)

scrollTo：滚动到指定位置；scrollBy：相对当前位置滚动指定距离；可设置 options behavior 属性为 smooth 平滑滚动，支持 window 和 Element 调用，不支持 IE。  
其它 scroll 相关 API：Element 有 scrillLeft/scrollTop，window 有 pageXOffset/pageYOffset
