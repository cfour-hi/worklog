## 计划任务

- [x] 探索 vue-template-compiler 分析 [上周六问题的具体原因](./15-Saturday.md)

  想要继续探索问题原因就需要深入 vue-template-compiler 源码调试，但是编译时要怎么调试呢？  
   也不是不能调试编译时，只是太麻烦，没必要。  
   先概览了一遍 vue-template-compiler 文档和源码，知道就是调用 compile 方法传入模板，就会输出一个包含 render 属性的对象。我的目的就是要调试这段过程，所以更简单的方法就是跑一个 node 脚本，引入 vue-template-compiler，调用 compile 方法传入模板，进入 compile 方法进行调试即可。

  使用 VSCode 可以轻松做到，代码如下：

  ![Vq9RGF.png](https://s2.ax1x.com/2019/06/18/Vq9RGF.png)

  先看最终执行结果：

  [![VqCCIf.png](https://s2.ax1x.com/2019/06/18/VqCCIf.png)](https://imgchr.com/i/VqCCIf)

  render 属性 with 代码块内代码格式化后如下，对比之前运行时的 render 函数，结果是一致的。

  ![VqClJU.png](https://s2.ax1x.com/2019/06/18/VqClJU.png)
  ![Vbv2dO.png](https://s2.ax1x.com/2019/06/18/Vbv2dO.png)

  证实我是可以使用这段 node 脚本进行调试的，调试过程中有几个关键函数调用节点需要关注：

  - baseCompile
  - parse
  - parseHTML

  parseHTML 函数内需要关注 stack 对象，此对象储存模板解析过程中的 HTML 标签信息。

  [![VqP69U.md.png](https://s2.ax1x.com/2019/06/18/VqP69U.md.png)](https://imgchr.com/i/VqP69U)

  解析两个 template 标签时的 stack 内对象如下：

  ![Vq6OhQ.png](https://s2.ax1x.com/2019/06/18/Vq6OhQ.png)
  ![Vq6Ltg.png](https://s2.ax1x.com/2019/06/18/Vq6Ltg.png)

  调试过程中观察 stack 对象信息，定位到问题的关键函数 closeElement：

  ![VqIy28.png](https://s2.ax1x.com/2019/06/18/VqIy28.png)

  这是解析第一个 tempalte 结束时 closeElement 方法执行的地方，可以看到 currentParent.scopedSlots 就是保存 动态具名插槽 的对象，以 name 作为 key，name 取的是 element.slotTarget，值为 `propertyName`。

  OK，以上都没问题，但是当解析到第二个 template 结束时，再瞧瞧 closeElement 方法执行到这个地方是怎样的。未执行关键步骤时，监视对象内的 element 和 currentParent.scopedSlots 值如下图所示：

  ![VqTY0H.png](https://s2.ax1x.com/2019/06/18/VqTY0H.png)

  当执行完关键步骤之后，currentParent.scopedSlots.propertyName 被直接覆盖了！  
   因为 element.slotTarget 值与第一个 template 解析时的值是一样的，都是 `propertyName`，所以后者覆盖了前者。  
   问题的终点就在此处，也不需要继续往下调试了，后续也就是根据 root tag 对象生成代码对象了。
