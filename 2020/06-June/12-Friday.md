# 20200612

## 计划任务

- [ ] 媒资 v1.6.4 跟进（需加快进度、压缩工期）
- [ ] 统计插件上报字段梳理

## 阅读思考

### [如何删除 git submodule](https://gist.github.com/myusuf3/7f645819ded92bda6677)

To remove a submodule you need to:

- Delete the relevant section from the .gitmodules file.
- Stage the .gitmodules changes git add .gitmodules
- Delete the relevant section from .git/config.
- Run git rm --cached path_to_submodule (no trailing slash).
- Run rm -rf .git/modules/path_to_submodule (no trailing slash).
- Commit git commit -m "Removed submodule <name>"
- Delete the now untracked submodule files rm -rf path_to_submodu

其它小伙伴如果需要同步，则最好重新 pull 项目，不然也需要去删除 .gitmodules 和 .git/config 文件的内容。

## 今日总结

媒资 v1.6.4 开发时间压缩 2 天，端午之前上线。
