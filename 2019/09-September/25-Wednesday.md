## 工作时间轴

### 上午

解决广告活动落地页编辑器预览出现 x 轴滚动条问题  
因为预览视区定死了宽高，而页面页面内容过长导致出现 y 轴滚动条，滚动条会占据 17px 宽度，从而导致视区展示页面内容的宽度少了 17px，x 轴出现滚动条。  
解决方式很简单粗暴，使用 css 隐藏滚动条：

```css
::-webkit-scrollbar {
  display: none;
}
```

### 下午

解决图片组件高度适配不同手机问题  
编辑器内定死了视区宽度为 375px，因此高度也是根据图片 实际高度\*(视区宽度/实际宽度) 计算得来。这样计算有一个问题，不同手机端的浏览器可是区域宽度不一样，就会导致浏览器可视区域宽度不为 375px 的图片组件高度不准确。  
其实不止图片组件的高度不准确，其它类型的组件其实也是不准确的，只是高度太小，没看出来。

解决方案是根据不同手机打开页面的实际情况，动态修改 html font-size 值为 window.innerWidth/10，修改组件高度的计算公式，先计算出 视区宽度/组件宽度 得出高度增加的比例，再用 组件高度\*比例 得出图片组件在当前手机浏览器中的高度值，最终再将高度值换算成 rem 值。

（PS：晚上写这个日志的时候想到，好像没必要动态修改 html font-size 值为 window.innerWidth/10，只要计算出图片在当前手机浏览器的实际高度即可，组件高度的 rem 值只是换算操作而已，html font-size 作为基础参考值进行换算操作并不会影响组件实际高度，明天将这点改过来。）

解决此问题过程中，又捡回了 fiddler 截包的相关技巧：[Fiddler (四) 实现手机的抓包](https://www.cnblogs.com/TankXiao/p/3063871.html)；PC 端远程运行调试手机页面：[Weinre 远程调试工具](https://developer.mozilla.org/zh-CN/docs/Archive/B2G_OS/Platform/Gaia/Weinre%E8%BF%9C%E7%A8%8B%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7)。

### 晚上

优化和完善广告活动落地页相关项目代码  
完成表单验证不通过则屏幕自动滚动到不通过表单项位置，使用 [Element.scrollIntoView()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)
