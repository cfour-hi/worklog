# 20200702

## 计划任务

- [x] 潭州大学播报调整
- [x] 鲁班需求外审、Q3 季度计划
- [x] 落地页项目改造讨论
- [x] 面试

## 记录总结

### Q3 季度计划

七月份上旬

1. 后端服务拆分
2. 头条链接切换：降低投放成本，仅表单落地页、投放渠道为头条/抖音
3. 账号合并
4. 官网支持

七月份下旬

1. 素材管理
2. 企业微信入库
3. 落地页数据回传
4. RBAC 接入

### 落地页改造

1. 将不同项目迁移到不同文件夹下面
2. common 里面存放常量（环境相关）、公用组件（预览、svg 等）、工具类（样式、js）
3. request 改造
4. 改造新增组件配置方式
5. 要求运维修改 jenkins 打包发布
6. 区分 editor 和 site 的 index.html
7. favicon 使用统一，跟产品确认使用鲁班还是平台？子公司站点是否需要切换
8. 环境变量：VUE_APP_DEPLOY_VERSION、VUE_APP_ENV、VUE_APP_RENDERER_VERSION 和 VUE_APP_VERSION（改成 VUE_APP_UNION_VERSION）、可移除 TZ_ENV
