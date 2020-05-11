## 计划任务

- [x] 跟两个新人 @王景 @刘超 沟通目标的事情
- [x] 协助 @刘文兵 审查代码
- [x] 面试
- [ ] 落地页 v2
- [x] 完善华为云视频功能

  获取已上传视频的元信息（时长、宽、高等）



## 今日总结

跟两位新加入的前端小伙伴聊了潭州的规则（文化、业务、架构）和目标的事情，@王景 分配在媒资，主攻活动营销编辑器，@刘超 分配在业务中台，主攻业务中台相关业务迭代跟进，目标是成为业务中台前端的负责人。  

视频上传完成之后获取视频元信息的方式：

```js
const video = document.createElement('video');
video.preload = 'metadata';
video.onloadedmetadata = () => {
  window.URL.revokeObjectURL(video.src);
  file.duration = video.duration;
  file.specification = `${video.videoWidth}*${video.videoHeight}`;
};
video.src = URL.createObjectURL(file);
```
