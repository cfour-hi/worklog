## 计划任务

- [x] 跟进 CRM v1.15 灰度环境测试

## 探索发现

### [cleave.js](https://github.com/nosir/cleave.js)

> Cleave.js has a simple purpose: to help you format input text content automatically.

类似于 [text-mask](https://github.com/text-mask/text-mask)，帮助自动格式化 input 输入内容。

<!-- TODO: vue 实现 -->

目前支持 react 和 angular，但不支持 vue，可以花点时间研究源码，实现 vue 支持，提交 PR。

### [posh-git](https://github.com/dahlbyk/posh-git)

> posh-git is a PowerShell module that integrates Git and PowerShell by providing Git status summary information that can be displayed in the PowerShell prompt, e.g.:
>
> ![V5C0nU.png](https://s2.ax1x.com/2019/06/14/V5C0nU.png)
>
> posh-git also provides tab completion support for common git commands, branch names, paths and more. For example, with posh-git, PowerShell can tab complete git commands like checkout by typing git ch and pressing the tab key. That will tab complete to git checkout and if you keep pressing tab, it will cycle through other command matches such as cherry and cherry-pick. You can also tab complete remote names and branch names e.g.: git pull or<tab> ma<tab> tab completes to git pull origin master.

PowerShell 显示当前 repository Git 信息，但是会有一丢丢性能上问题。
