## 计划任务

- [x] 解决 ESLint 检测非 .js .vue 文件导致检测不通过问题

  问题暴露出来是因为添加 Excel 模板文件时，ESLint 对 Excel 文件进行检测时不通过。  
  理所当然，ESLint 是针对 JavaScript 代码的检测工具，对 Excel 文件怎么可能检测通过。

  一开始解决此问题思路有所跑偏，想通过指定文件扩展名来检测指定文件，ESLint Command Line Interface 可添加 --ext 参数，用来指定 JavaScript 文件扩展名，这里我配置为 `--ext .js,.vue`。

  但最终执行时仍旧对 Excel 文件进行了 ESLint 检测，因为我们在命令行中指定了被检测文件路径，其中就包含 Excel 文件。但我不是配置了被检测的文件扩展名吗？为什么还会出现这个问题？

  通过仔细阅读 --ext 介绍文档，才明白 --ext 是用来在指定目录中搜索 JavaScript 文件时将使用的文件扩展名。

  > --ext  
  > This option allows you to specify which file extensions ESLint will use when searching for JavaScript files in the directories you specify. By default, it uses .js as the only file extension.

  也就是说只有当我们在指定被检测目录时，使用 --ext 参数指定 JavaScript 文件扩展名才有意义。而目前我们在命令行中提供的是通过 `git diff --cached --name-only --diff-filter=d` 查询出的位于 Git 暂存区文件路径，并不是指定检测目录，所以使用 --ext 并没有效果。

  经过思考，我其实只需要提供 Git 暂存区中的文件扩展名为 `.js,.vue` 文件给到 ESLint 进行检测即可，所以最终还是需要在 `git diff` 命令中筛选出指定文件路径。最终命令如下：

  ```bash
  git diff --cached --name-only --diff-filter=d -- '*.js' '*.vue'
  ```

## 今日收获

### Vue 父组件给子组件 prop 传递字面量对象与变量对象区别

父组件 update 会导致子组件重新 render，属性中的字面量对象等于是个新的对象，如果子组件有 watch 字面对象的 prop，则会执行。而如果将字面量对象修改为变量名称，则重新 render 时依然是同一个对象。
