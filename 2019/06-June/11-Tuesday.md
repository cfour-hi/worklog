## 计划任务

- [x] 跟进补余款工单无法提交问题

  后端已放开被禁用部门筛选，但前端还有一层逻辑是如果部门被禁用，则将部门值设置为 undefined，导致部门内容为空。这很奇怪，用户会不知道发生了什么，而感到莫名其妙。其实应该将所有被禁用部门添加 disabled 属性，禁止选中。

- [x] ESLint npm 包

  已完成，实现还是按照昨天的思路，现有如下三个 npm 包：

  1. @tzfe/eslint-config-airbnb

     依赖 [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)，对其进行扩展。

  2. @tzfe/eslint-config-vue

     依赖 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)，对其进行扩展。

  3. @tzfe/eslint-config-vue-airbnb

     依赖 @tzfe/eslint-config-airbnb、@tzfe/eslint-config-vue、[@vue/eslint-config-airbnb](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/eslint-config-airbnb)、[babel-eslint](https://github.com/babel/babel-eslint)，作为项目直接使用的 npm 包，还包含实际所需共有配置。

## 阅读思考

### [十四亿人的口腹之欲，是如何被满足的？](https://www.weibo.com/ttarticle/p/show?id=2309404370494647344427)

👍
