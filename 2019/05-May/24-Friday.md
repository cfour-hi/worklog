## 计划任务

- [x] git pre-commit hook shell

  shell 使用 eslint 和 vue-cli-service 执行 lint 都不能正确执行检测，通过 `npm run lint` 执行才正确，自己对 shell 太不了解。  
  另外 eslint 检测需要过滤掉被删除的文件，不然检测找不到文件也会报错。  
  `git diff --cached --name-only --diff-filter=d`

- [x] 解决 console debugger 在开发时需要 eslint-disable 问题

  因为 vue-config.js 配置 devServer overlay warning false、error true 无效，warning 仍然会显示在浏览器上，所以需要手动在 console debugger 后添加 eslint-disable。这样很繁琐，而且 disable 后就可以绕过 eslint 检测提交代代码，这不应该。现在添加 git pre-commit hook 之后，代码的规范检测又有一层新的把关，本地开发时可以暂时不需要 overlay，等有时间再抽空看源码如何解决。

  在组群里抛出这个问题，说明情况之后，已经被 @田斌 找到解决方案。通过查看源码找到 eslint-loader 和 vue-cli-eslint 之间的关系，最后解决方案 vue.config.js 配置如下：

  ```js
  {
    // ...
    lintOnSave: 'default',
    devServer: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  }
  ```

  将 lintOnSave 设置为 default，devServeer 正常配置。

  @vue\cli-plugin-eslint\index.js 相关代码：  
  ![VkfnBD.png](https://s2.ax1x.com/2019/05/25/VkfnBD.png)  
  不是很理解为什么 allWarnings 和 allErrors 的赋值，设置为 default 后都会 false。

  然后再看 @vue\cli-service\lib\commands\serve.js 相关代码：  
  ![VkfcuT.png](https://s2.ax1x.com/2019/05/25/VkfcuT.png)  
  这里默认去 vue.config.js devServer 配置作为 webpack 默认配置，最终结果就正确了。

  很坑的是，vue-cli 官网没有任何地方提及到了 [lintOnSave](https://cli.vuejs.org/zh/config/#lintonsave) 可设置为 default。

- [x] 代码审查 @三炮

  一些简单的查询列表页面，仍有重复逻辑没有抽象，让他自己去思考吧。

- [x] 协助 @彭泽华 完成 工单 v1.21 退款相关业务功能

  @产品老彭 今天又改了需求，被禁用的分成部门允许用户手动选择部门，之前的需求是默认一直往上层取未被禁用的部门。
