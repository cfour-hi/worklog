## 计划任务

* [x] （紧急）修复线上问题：新增退款有多个分成部门情况下无法提交退款单

	问题已修复并发布 test 和 pre 环境测试通过，明日上线。问题产品原因是代码细节处理不够严谨，并且问题产生场景比较特殊。

* [x] 融入 TypeScript 到现有项目

	* .vue 文件保存时格式化 HTML 存在多个属性时不会分行处理

        ```html
        <img alt="Vue logo" src="../assets/logo.png">
        ```

		在 .vscode/settings.json 添加配置：

        ```js
        "vetur.format.defaultFormatterOptions": {
          "prettyhtml": {
            "wrapAttributes": true // HTML 多个属性换行处理
          }
        }
        ```

        ```html
        <img
          alt="Vue logo"
          src="../assets/logo.png"
        >
        ```

	* vue-eslint-plugin Priority B: Strongly Recommended 要求自闭合标签尾部 / 符号前需要空格

		vscode 插件 Vetur Formatter 不支持此规则，相关讨论：[Space before self closing tags](https://github.com/Prettyhtml/prettyhtml/issues/80)。

		个人觉得这个规则可有可无，最主要还是团队统一，所以我选择在 .eslintrc.js rules 添加配置：

        ```js
        'vue/html-closing-bracket-spacing': 0,
        ```
