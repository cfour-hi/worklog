## 计划任务

- [x] 完成 媒资 v1.4.2 支付状态和表单提交状态的场景切换，目标提测。

  已完成并提测，同时完成代码评审。

## 工作周报

一、 上周任务

1. 媒资 v1.4.1.2 和 v1.4.2 开发
   v1.4.1.2 已上线，完成微信公众号流量数据回传
   v1.4.2 今天提测，延期一天。

二、 本周任务

1. 媒资 v1.4.2 上线和 v1.4.3 开发

三、 工作总结
媒资 v1.4.1.2 在微信公众号回传的前端设计方案上存在一个问题，将授权标识和信息放到了 URL 上，目的是为了让访问用户尽可能快的无感知进行授权，无须等到后台接口响应。但是接下来 v1.4.2 的多公众号授权在这方面吃了亏，多公众号的授权如果继续依赖 URL，会造成无法预测的混乱。尤其后来大家一起测试时才发现还有分享这种操作，场景切换会在 URL 上添加标识，被分享出去之后，因为标识而让新用户打开了错误的场景。公众号授权会引发页面跳转和重定向，早期的方案中也并没有考虑到返回这种操作会导致返回会导致重新授权并重定向回去，也就是说用户根本无法返回。当然，现在仍然存在这个问题，但只针对用户第一次打开不同发布渠道微信公众号的落地页。

营销线前端的小伙伴最近负面情绪有点高，各方面因素一点点累积其实是一直存在，只是上周刚好遇到的燃点。小伙伴可能心智不够成熟，容易冲动，很正常，因为他们是没有负担的。现在前端团队实际上已经是一潭死水，不应该再走维稳的政策。
