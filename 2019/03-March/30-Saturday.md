## 计划任务

- [x] 修改项目开发模式和结构

  使用 git submodule 特性，对项目进行结构改造。  
  因为项目还有版本在迭代中，所以等到今天上灰度环境后才动工。portal 没有改动，所以可以基于 dev 分支进行改造，CRM 和 工单 项目基于 pre 分支进行改造，所有项目都新建并切换到 next 分支进行改造。

  1. 子模块项目的内容存放于主项目 src 目录内
  2. 子模块项目本身内容改为本身 src 目录下内容
  3. 全局替换别名 @portal -> @/portal @CRM -> @/CRM @worksheet -> @/worksheet
  4. api 全部移动到 portal 子模块并且同样需要全局替换引用代码
  5. 根据 lint 提示修复不合规范的代码
