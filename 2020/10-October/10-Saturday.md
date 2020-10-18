# 20201010

## 计划任务

- [x] 【项目】讨论视频自动播放降级方案和转码方案
- [x] 【项目】梳理鲁班前台改版需求和讨论前端方案
- [ ] 【项目】落地页 v3.0（视频落地页），完成多版本部署相关。

## 临时任务

- [ ] 【技术】图片文字识别

## 记录总结

### 【项目】讨论视频自动播放降级方案和转码方案

### 自动播放降级方案

1. 全自动播放，仅 Android 微信使用 canvas 播放，需转码为 ts 格式；❌
2. IOS 自动播放，Android 非微信自动播放，自动播放要求静音，Android 微信必须点击视频进行播放，其它暂不处理；✅

方案 1 对 ts 格式要求较高，需指定视频 MPEG1 和音频 MP2 的编码格式，华为云不支持而且画质和音质较差。

> MPEG-1 随后被 Video CD 采用作为核心技术。VCD 的分辨率只有约 352×240，并使用固定的比特率（1.15Mbps），因此在播放快速动作的视频时，由于数据量不足，令压缩时宏区块无法全面调整，结果使视频画面出现模糊的方块。因此 MPEG-1 的输出质量大约和传统录像机 VCR 相当，这也许是 Video CD 在发达国家未获成功的原因。

### 转码方案

仅在落地页用户使用视频资源的时候，华为云转码成 m3u8 格式，转码完成之前不允许保存落地页。转码完成之后需返回转码后资源地址，保存到视频组件数据。

## 发现思考

### [Running GitHub Actions for Certain Commit Messages](https://ryangjchandler.co.uk/articles/running-github-actions-for-certain-commit-messages)

> A quick look at how you can configure your GitHub Actions workflows to only run when a certain phrase is present in the commit message.

如何在特定的提交中运行 GitHub Action

### [infer](https://github.com/facebook/infer)

> A static analyzer for Java, C, C++, and Objective-C

静态代码分析工具
