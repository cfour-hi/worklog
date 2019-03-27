## 计划任务

- [x] 跟进 CRM v1.15 灰度环境测试

- [x] 修复科目组件 change 事件触发时机错误问题

- [x] 运营后台

  已确认暂停开发

## 临时任务

- [x] 路由权限判定升级，支持多种角色的判定。

  路由的访问权限配置写在 `route` 配置的 `meta` 对象内，但之前的设计不支持多种角色判定。  
  实际业务场景是某个路由只允许管理员和售前部门的负责人访问，这里限定了部门必须是售前，但管理员所属的部门是根级部门潭州教育。

## 探索发现

### [webpack-chain](https://github.com/neutrinojs/webpack-chain)

vue-cli 生成的项目无法直接修改 webpack 配置文件，只能通过在 vue.config.js 内进行修改。  
如果要深度修改 webpack 配置，也只能使用 webpack-chain，它的链式调用非常灵活。  
vue-cli-service 本身也是使用 webpack-chain 生成的 webpack 配置。
