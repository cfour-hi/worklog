## 项目结构设计

关键词：模块化

- 项目模块化
- 页面模块化
- 组件模块化
- 功能模块化

暂时不谈高内聚、低耦合之类的抽象概念

### 项目模块化

- micro-frame
- portal
- CRM 和 工单

#### micro-frame

包含 项目配置、项目依赖、项目子模块

#### portal

micro-frame 子模块，存放 CRM 和 工单 项目所需 公共模块 和 API。

历史原因 CRM 和 工单 是两个项目，现在是拼合在一起。

后端 API 分布不合理，工单可能调用 CRM API，反之亦然，所以为了解耦，将 API 划分到 portal，避免未来拆分后代码混乱。

面向未来的核心思想：不允许 CRM 和 工单 项目之间存在依赖关系

#### CRM 和 工单

micro-frame 子模块，实际项目。

### 项目之间如何关联？

觉得很难，其实很简单。

基础（portal） + 业务（CRM 或 工单）

关键点：路由

### 如何进行开发？

关键：[git submodule](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)

缺点：vscode 自带 git 工具某些场景无法更新状态

## 表单

### form 表单与接口所需数据的关系

form 对象只包含可与用户进行交互的属性（表单项 disabled 也属可交互），接口数据包含 form 对象，同时还包含分页等其它数据。

实际场景：https://crm-test.shiguangkey.com/#/ad-serving/info-ad-creative  
代码演示：CRM/page/ad-creative/SearchForm.vue

### 如何处理动态表单？

遵循数据渲染视图的理念，只渲染 form 对象所拥有的属性，其对应的表单项。

实际场景：https://crm-test.shiguangkey.com/#/ad-serving/info-ad-creative  
代码演示：CRM/page/ad-creative/SearchForm.vue

## 组件

### 分类

- 基础组件
- 功能封装组件
- 业务组件

#### 基础组件

element-ui 之类的 UI 框架提供的组件，提供基础功能。

#### 功能封装组件

针对实际业务场景所需，基础组件未提供相关功能，而对基础组件进行功能封装的组件。

实际场景：级联组件双击选择
代码演示：portal/components/cascader/index.vue

实际场景：级联组件最小可选级别
代码演示：portal/components/cascader/MinLevelSelect.vue

#### 业务组件

实际业务所需组件，包含一个或多个基础组件、功能封装组件，解决业务实际所需。

实际场景：科目级联组件  
代码演示：portal/components/cascader/Subject.vue  
核心讲解：业务要求可 双击选中 和 设置最小可选级别

实际场景：部门级联组件  
代码演示：portal/components/cascader/Department.vue  
核心讲解：业务要求可 隐藏 root 部门 和 移除没有子级部门的部门

#### 如何处理 新增/编辑 这样的业务组件？

### 组件的数据透传
