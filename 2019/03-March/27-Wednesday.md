## 计划任务

- [x] 跟进 CRM v1.15 灰度测试

  测试通过，代码合并到 master 分支，明天早上 6 点发布。

- [x] micro-frame 搭建

  vue-cli v3 生成项目  
  安装依赖，dependencies 参考 portal，暂时屏蔽移动端拨打电话页面，所以不需要 cube-ui 相关依赖。devDependencies 暂时只需要 babel-plugin-dynamic-import-node 和 babel-plugin-lodash。  
  删除 src 目录下默认内容，作为项目子模块存放位置。  
  添加 eslint rules  
  通过 `git submodule add <git-repositorie> src/<repositorie-name>` 添加子模块，将子模块 src 内容移动到子模块根目录。

## 探索发现

发现 element-ui 一个非常隐晦的 bug，已向官方 github repository 提交 [issue](https://github.com/ElemeFE/element/issues/14860)。  
随后也将自己的解决方案提交 [PR](https://github.com/ElemeFE/element/pull/14863)

## 人生感悟

人这一生的成就好比做菜  
首先需要一堆原材料  
经过打磨加工称为成品  
使用这些成品材料  
每个人做出来的味道都不一样  
因为每个人炒菜的手法、对火候和时机的把控、材料放入的顺序都不一样  
烹饪的过程中会融合一些材料  
不会产生太大的口味区别  
但是积少成多、材料的选择最终将会造成口感上的差异  
菜上桌后  
大部分人的评价将会是一致的  
因为大众的口味基本没什么差别  
但因为地域、习惯的区别  
不能将很辣的菜给喜欢清淡口味的人吃  
不然将会得到负面评价  
...

原材料从哪里来？  
如何打磨加工？  
做成什么？  
这些都是人生
