## 临时任务

- [x] 协助 @彭泽华 解决 Vue 动态插槽名（变量名）相同导致内容渲染不全问题

  简化后的模板代码如下图，动态插槽名都是变量 propertyName，最终只会渲染 propertyName 为 goalAmountMonth 的内容。

  ![Vbb0Gq.png](https://s2.ax1x.com/2019/06/18/Vbb0Gq.png)

  通过 debugger 和 条件断点 找到问题点原因是在 vue renderSlot 方法中，父组件 vm 的 \$scopedSlots 对象中只有 goalAmountMonth，当动态插槽名为 achieveRatioMonth 时 renderSlot 方法返回的值为 null。

  ![VbbfiR.png](https://s2.ax1x.com/2019/06/18/VbbfiR.png)
  ![VbqGf1.png](https://s2.ax1x.com/2019/06/18/VbqGf1.png)

  那为什么 \$scopedSlots 对象只有 goalAmountMonth 呢？继续查找 \$scopedSlots 对象内的数据是如何来的。  
   通过全局搜索 Vue 项目源码 \$scopedSlots 关键词，找到 \$scopedSlots 的赋值语句在 src/core/instants/render.js 文件内。

  ![VbOYqO.png](https://s2.ax1x.com/2019/06/18/VbOYqO.png)

  通过条件断点运行到 \$scopedSlots 赋值语句，进入 normalizeScopedSlots 方法，可以发现 \_parentVnode.data.scopedSlots 就已经确定了只有 goalAmountMonth，也就是说还要再往上找。

  ![VbjkuV.png](https://s2.ax1x.com/2019/06/18/VbjkuV.png)
  ![Vbjij0.png](https://s2.ax1x.com/2019/06/18/Vbjij0.png)

  往上继续查找 \_parentVnode 的 scopedSlots 数据是从哪来的，条件断点继续添加条件。  
  终于找到问题的根节点是在 render 函数，只有动态插槽名为 goalAmountMonth 的 scopedSlots。💀

  ![Vbv2dO.png](https://s2.ax1x.com/2019/06/18/Vbv2dO.png)

  动态插槽名为 achieveRatioMonth 的 scopedSlots 哪去了？  
   这里很容易就能想到，render 函数是 [vue-loader](https://github.com/vuejs/vue-loader) 对 .vue SFC 编译后的结果，vue-loader 编译 .vue SFC 使用的是 [vue-template-compiler](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler)。
