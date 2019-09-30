## 广告活动落地页

### v1.0.0 上线事宜

https://www.example.com/a  
https://www.example.com/a/

Nginx 接受到以上两个 URL 会如何处理？有何区别？  
其实处理和区别在于如何配置，相关参考阅读：  
[How can I create a location in nginx that works with AND without a trailing slash?](https://serverfault.com/questions/376162/how-can-i-create-a-location-in-nginx-that-works-with-and-without-a-trailing-slas)

### v1.0.0 复盘总结

媒资 v1.2 | 广告活动落地页 v1.0.0

做的好的：

1. 各端沟通顺畅、及时，未出现延误进度的情况。
2. 产品能够灵活调整产品设计，并且没有偏离方向。
3. 测试能够有自己对产品的思考，并提出自己的意见，帮助完善产品。

做的不好的：

1. 因时间原因，产品规划不够细致，出现许多各端理解不一致的地方。
2. 因时间和个人原因，无法 100% 还原设计稿，让设计感觉没有被尊重。
3. 因项目性质原因，后端对产品的理解不够深入、细致，接口层存在设计问题。
4. 因个人原因，未提前跟运维大佬确定生产环境部署是否正常，导致上线后访问异常。

### 解决业务试用产品后的需求

新增年龄表单项，用来区分成年或未成年流量。  
.html 文件缓存问题，现在媒资系统所有 .html 文件响应头都没有加 cache-control 字段，导致发版之后必须手动强制刷新。

---

### 跟 @彭旭 讲解 sentry 工作流

1. 平台搭建
2. 接入项目
3. 异常收集（筛选）
4. 处理异常，自动分配到人和 Gitlab issues，邮件通知
5. 异常跟进并解决
6. 发布
