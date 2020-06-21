# 20200611

## 计划任务

- [x] 协助运维处理鲁班系统多版本发布
- [ ] 落地页相关任务

## 临时任务

- [ ] 统计插件上报字段梳理

## 分析思考

### Nuxt 细节

> Nuxt.js transforms every \*.vue file inside a pages directory as a route for the application.

Nuxt 会对 pages 目录下的直属 .vue 文件当做路由处理。  
如果 pages 目录下没有 index.vue 文件，则 build 后的 dist 目录下也不会有 index.html 文件。
