## 计划任务

- [x] work-v1.27 代码审查

  @三炮：工单详情拆分（下一次版本有改动）；模板代码中使用 ==；存在重复逻辑和重复数据定义

  @彭泽华：修改 DialogGift 目录结构；接口数据 deepFreeze；

- [ ] YAPI mock 使用

  YAPI mock 服务的问题还挺多的，当一个接口使用过多的 mockjs 语法，响应内容就不会随机生成 mock 数据。  
  让运维大佬在原版升级，结果 yapi-cli 找不到 v1.8.0 的版本，需要升级 yapi-cli 到最新版本。  
  运维大佬使用 `yapi update -v 1.8.0` 结果网络错误，查看源码发现 yapi 查询版本信息的接口存放在 easy-mock 这个公共 API 服务平台上，而 easy-mock 的 API 服务本身就不是很稳定。
