## 计划任务

- [x] 完善科目组件

  感觉并不是昨晚确认的 focus 处理函数内 timeout 值的问题，timeout 值终究不能在机器性能不好的情况下，保证业务处理正确。  
  早上又花时间研究了下，最终确认是因为选中内容后，下拉面板关闭，由于我切换到开发者工具，再切换到页面时，又触发了 focus 事件。也就是说当 input 处于 focus 状态，切换到其它应用程序，再切换到浏览器，会再次触发 input 的 focus 事件。（已经 demo 测试确认）

- [x] element-ui cascader 双击选择组件封装

  核心是自定义一个 prevValue 变量，记录用户上次点击的 value，与本次点击的 value 值进行对比，在 选择及改变 的情况下，双击直接关闭下拉面板；非选择及改变 的情况下，emit dblclick\_ 事件。  
  element-ui cascader 组件本身提供 cahnge 事件，每次点击选择都会触发，但业务方面需要 关闭下拉面板并且值发生改变 的事件，所以自定义 changeOnClose\_ 事件。element-ui@2.7.2 cascader 组件提供 visible-change 事件，可以方便处理此功能需求。

  科目级联组件业务方面需求是：不能选择第一级，可选第二级及后面的所有级别。基于此需求，在 cascader 双击选择组件 的基础上再封装一层 可选最小级别 的级联组件，此组件强制要求 change-on-select 为 false，prop minLevel 最小为 2（如果为 1 的话直接将 change-on-select 设置为 true 即可）。  
  核心点在 active-item-change 事件是判断级别并更新值，以及双击确定满足级别需求则直接关闭下拉面板，后面这点需要 cascader 双击选择组件 提供接口。

- [x] 优化 element-ui cascader 部门组件

  基本内容搞定，使用 cascader 双击选择组件，可以不用关心双击选择功能。目前还卡在如果不包含 root 部门情况下，值的更新不正确问题上。
