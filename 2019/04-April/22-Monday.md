## 计划任务

- [ ] 协助 @巧云 梳理工单 v1.19 版本计划

  需要优化 查询课程、赠品 组件

- [x] 工作周报

## 临时任务

- [x] 查询表单-表格 页面 表单项 clear 不触发查询处理

  ```js
  /**
   * 此 mixin 用来处理 查询表单-表格 页面
   * 点击 查询表单项 clear-x 按钮不触发 change 事件
   *
   * 产品需求
   * 1. 查询表单项 都有 clear-x 按钮（即都有 clearable 属性）
   * 2. 查询表单 选择类（ElSelect、ElDatePicker 等）查询项
   *    改变（选择）即触发 查询 业务
   *    但是点击 clear-x 按钮不触发 查询 业务
   *
   * 默认情况下点击 clear-x 按钮
   * 会先触发 change 事件再触发 clear 事件
   * change 事件在业务层会触发 查询 业务
   *
   * 如果让业务处理这层逻辑太过繁琐、
   * 每个这样的业务场景都需要写相同的判断逻辑
   * 所以在通过 minxin 针对特定 element-ui 组件
   * 控制业务层绑定的 change 事件执行
   */

  import Vue from 'vue';

  // 点击 clear-x 按钮不触发 change 事件的 element-ui 组件
  const componentNames = [
    'ElSelect',
    'ElCascader',
    'ElDatePicker',
    'ElTimeSelect',
    'ElCascader',
  ];

  Vue.mixin({
    mounted() {
      const { name } = this.$options;

      // 先确定是否为需要处理的组件
      if (componentNames.includes(name)) {
        let parent = this.$parent;

        // 遍历父级确定当前组件是否处于 ElForm 内
        while (parent && parent.$options.name !== 'ElForm') {
          parent = parent.$parent;
        }

        /**
         * 依赖业务层 父级组件 的 ElForm 组件 className
         * 仅当 当前组件 处于 ElForm 组件内
         * 并且 父级组件 ElForm className 包含 search-form
         * 才判定 clear 事件不触发 change 事件绑定函数
         */
        if (
          parent &&
          parent.$el &&
          typeof parent.$el.className === 'string' &&
          parent.$el.className.includes('search-form')
        ) {
          // eslint-disable-next-line no-underscore-dangle
          const { change } = this._events;
          if (change) {
            for (let i = 0, l = change.length; i < l; i += 1) {
              /**
               * 上层通过自定义元素传递事件 @change="handleChange"
               * handleChange 会被 Vue 包装成 invoker
               * 成为 this.$listeners.change
               * this._events.change 包含 this.$listeners.change
               */
              if (change[i] === this.$listeners.change) {
                change[i] = function _change(value, ...args) {
                  /**
                   * ElCascader 和 ElSelect(multiple) 组件的 value 值为 Array 类型
                   * 点击 clear-x 按钮会将 value 设置为 空数组
                   * 其它组件点击 clear-x 按钮会将 value 设置为 null
                   */
                  if (Array.isArray(value)) {
                    if (value.length > 0) {
                      this.$listeners.change(value, ...args);
                    }
                  } else if (value !== null) {
                    this.$listeners.change(value, ...args);
                  }
                };
                break;
              }
            }
          }
        }
      }
    },
  });
  ```

- [x] 处理项目中所有模板下载找不到资源问题

  前段时间调整项目结构和升级 vue-cli v3 之后，忘记更新 copyWebpackPlugin 配置，将子模块项目中的静态文件打包时 copy。

  ```js
  // filename: vue.config.js
  module.exports = {
    // ...
    chainWebpack: config => {
      // ...
      config.plugin('copy').tap(args => {
        const [arg0] = args;
        const { toType } = arg0[0];
        const to = path.resolve('dist/static');
        const statics = [
          path.resolve('src/CRM/static'),
          path.resolve('src/worksheet/static'),
        ];
        return [[...arg0, ...statics.map(from => ({ from, to, toType }))]];
      });
    },
  };
  ```

## 阅读思考

### [24 个实例入门并掌握「Webpack4」(一)](https://juejin.im/post/5cae0f616fb9a068a93f0613)

关于 code split，之前一直不清楚如何将单独的依赖包打包成单独的文件，这篇文章让我在这方面有所收获。  
webpack v4 出来之后一直没有深入了解、实践过相关新特性，这次了解到 [SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin/) 就是 code split chunk 的方案，以前的 CommonsChunkPlugin 的一种改进。

> The CommonsChunkPlugin was used to avoid duplicated dependencies across them, but further optimizations were not possible.  
> Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks.

实践了一下，基本明白 SplitChunksPlugin 的概念和使用方式。

## 探索发现

### [quickchart](https://github.com/typpo/quickchart)

才知道可以这样展示图表，它的介绍是：

> Google Image Charts alternative

Google Image Charts 替代品？好奇的去搜索 Google Image Charts，打开站点看到一行 Warning:

![EkP4SJ.png](https://s2.ax1x.com/2019/04/22/EkP4SJ.png)

原来 Google 早在 2012 年以前就已经有 url chart 方案实现，不过在 2012 年就已声明废弃相关 API，2019 年 3 月关闭正式关闭。现在维护的 [Google Charts](https://developers.google.com/chart/) 并不是 url chart 思路方案，也不清楚为什么，第一感觉是 url chart 局限性比较大吧。
