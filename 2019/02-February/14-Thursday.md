## 计划任务

* [x] 跟进 CRM v1.15 进度

* [x] 融入 TypeScript 到现有项目

	1. 使用 vue-cli v3 `vue ui` 命令进入 Vue 项目管理器，创建新的 vue 项目。

		-	在预设面板选择手动（手动配置项目）
		- 在功能面板必选 Babel、TypeScript、Linter / Formatter
		- 在配置面板取消默认选择的 Use class-style component syntax，我们不需要。原因有两点：一是装饰器的学习理解成本太高；二是不稳定，目前属于过渡方案，以后改成什么样谁也保证不了。选项 Pick a linter / formatter config 选择 ESLint + Airbnb config

	2. 创建项目后打开 .eslintrc.js，将 `'plugin:vue/essential'` 修改为 `'plugin:vue/recommended'`；添加 rules 配置 `'linebreak-style': 0`，因为 windows 系统的换行符为 CRLF。

	3. 在根目录创建新文件 vue.config.js，内容如下：

        ```js
        // vue.config.js
        module.exports = {
          devServer: {
            overlay: {
            warnings: true,
            errors: true
            }
          }
        }
        ```

## 阅读思考

* [TypeScript 不适合在 vue 业务开发中使用吗？](https://www.zhihu.com/question/310485097/answer/591869966)

	Vue 作者尤大大的回答：

	> 必须要承认的是，2.x 的 TS 支持显然跟 React 和 Angular 是有差距的，这也是为什么 3.0 要加强这一块。

	> 问题的本质其实很简单：因为当初 API 的设计根本就没有考虑类型系统。

	> Vue 的组件本质上就是一个 “包含了描述组件选项的对象”

	> 总结一下：
	> * 现有的 API 和类型系统的结合存在缺陷，属于历史遗留；改新的 API 有个时机问题，请耐心等待 Vue 3；  
	> * TSX 类型支持好是因为 TS 专门开了后门给做了支持；模版只要工具链到位一样可以做到。  
	> * Vue 2 一开始内部实现就有类型系统，但是没想到 Flow 烂尾了，而 TS 整个生态越做越好。这个属于就是押错宝了，只能说... 真香

	个人认为目前 vue 2.x 的版本可以尝试结合 TypeScript 实践玩一下，顺便可以加深理解 Decorator 装饰器语法，但不会应用到项目中。