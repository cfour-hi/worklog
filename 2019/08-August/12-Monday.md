## 计划任务

- [x] 组内会议

  1. 严抓开发质量，质量太差当月绩效直接为 B。
  2. 海川系统团队并入营销线
  3. 八月份绩效目标
  4. 工单 v1.28 和 CRM v1.22 代码评审发现的问题梳理
  5. Sentry 平台异常追踪由 @彭泽华 负责
  6. 表单项组件封装

- [x] 协助 @巧云 完成工单异步导出方案

  导出需要保存当时的查询参数数据，让用户能够知道导出的内容所属范围。

  首先考虑与后端交互的接口数据结构该如何设计，不同页面的导出所对应的查询参数是不一样的，无法像常规方式一样确定字段名称。所以肯定是要将查询参数作为一个字段，所有有效查询参数通过 JSON.stringify 处理成字符串作为其值，后端接受到参数也只需要将字符串保存到数据库即可。

  数据格式确定后，再确定数据内容，发现有个难点：如何通过字段标识确定 label 和 value？

  因为前后端接口交互是标识 key 和 value，用户是无法直观理解的，而且每个页面的查询参数业务字段是不一样的，无论是 key 还是 value 是无法在后端转换成用户可直观理解的 label 和 value 的。

  接口字段数据是这样的：

  ```json
  {
    "name": "Monine",
    "reviewState": 2,
    "payTimeStart": 1564588800000,
    "payTimeEnd": 1565625599000
  }
  ```

  如果展示给用户看就会是这样：

  ![mSaFje.png](https://s2.ax1x.com/2019/08/12/mSaFje.png)

  而用户想要看到的应该是这样：

  ![mS1M1s.png](https://s2.ax1x.com/2019/08/12/mS1M1s.png)

  所以保存到数据库的数据应该是这样的：

  ```json
  {
    "姓名": "Monine",
    "审核状态": "待审核",
    "付款时间": "2019-08-01 00:00:00 - 2019-08-12 23:59:59"
  }
  ```

  通过接口传递数据时将以上 JSON 对象通过 JSON.stringify 转换成字符串保存到数据库即可。

  可是转换后的这层用户可直观理解的数据是在前端写的，并且目前是写死在 vue template 代码里的。那这个难点的本质其实就是如何通过接口字段 key 匹配上对应的用户可直观理解的 label 和 value，就是在页面查询表单什么样，展示就应该什么样。

  解决方案很简单也很复杂，接口字段 key 与转换后的 label、value 需要有一层匹配关系，但是仅仅是匹配关系无法满足目前复杂场景的需求。比如上面例子中 state 是 select 选项，2 表示待审核，如何通过 2 找到 待审核？还有付款时间，明明是两个字段，最终显示只能是一个字段内容。

  所以需要对匹配关系做一些调整，再加上一层转换器。有个问题，转换器如何识别哪个数据需要进行转换了？参考 mock.js 语法，我们对匹配关系的 key 做一些设计：

  ```json
  {
    "name": "姓名",
    "reviewState|select": "审核状态",
    "payTime|time|Start-End": "付款时间"
  }
  ```

  转换器大致代码如下：

  ```js
  const transformForm = (form, formLabel) => {
    const result = {};
    Object.keys(formLabel).forEach(key => {
      if (key.includes('|')) {
        const [name, type, interval] = key.split('|');
        if (type === 'time') {
          // do something
        } else if (type === 'select') {
          // do something
        }
      } else if (form[key]) {
        result[[formLabel[key]]] = form[key];
      }
    });
    return result;
  };
  ```

  转换器还需根据实际业务场景进行扩展和优化...

  另外跟后台讨论数据安全方面问题得出结论，主要避免 OSS 资源直接暴露地址给用户，所以用户点击下载按钮时调用后端服务，后端进行鉴权判定当前用户是否有权限下载此资源，如有则响应数据流给到前端，前端接收后转换成 Blob 进行下载。

* [x] 工作周报

  上周大部分时间花在活动页面编辑器上面，目前已完成通过点击选项生成页面组件数据的功能，接下来需要实现通过页面数据生成页面内容的功能，也就是渲染器。

  前端团队目前也准备落实“边区换防”调整，另外同时调整项目主要负责人，阶段性调整，让每个小伙伴都有实践的机会，后期还会逐步放开对生产环境上线整体流程的限制。

  针对提升项目提升质量，提升开发质量也形成大致方案，追其本质，还是要做好前期准备工作，认真评审需求，细化拆解任务，沟通实现方案。开发过程中遵循项目开发规范，有条不紊的完整自己的细化拆解任务。

## 阅读思考

- [Bypassing anti-incognito detection in Google Chrome](https://mishravikas.com/articles/2019-07/bypassing-anti-incognito-detection-google-chrome.html)

检测 Google Chrome 当前是否为隐身模式

Chrome 74 之前，隐身模式不允许使用 FileSystem API。

```js
var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
if (!fs) {
  console.log('check failed?');
} else {
  fs(
    window.TEMPORARY,
    100,
    console.log.bind(console, 'not in incognito mode'),
    console.log.bind(console, 'incognito mode')
  );
}
```

Chrome 74 之后，通过临时储存的大小判断是否为隐身模式。

```js
if ('storage' in navigator && 'estimate' in navigator.storage) {
  const { usage, quota } = await navigator.storage.estimate();
  console.log(`Using ${usage} out of ${quota} bytes.`);

  // 小于 120M 则判定为隐身窗口
  if (quota < 120000000) {
    console.log('Incognito');
  } else {
    console.log('Not Incognito');
  }
} else {
  console.log('Can not detect');
}
```
