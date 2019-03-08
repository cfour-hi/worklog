## 计划任务

- [x] 在 Mac 的安装 Flutter 开发环境

  已经能使用模拟器运行 demo

- [x] 工单 v1.17 需求评审

  财务的部门分成业绩统计和退款的优化，需要优化部门级联组件。

## 临时任务

- [x] 【紧急需求】更改下业绩播报的小贴士——第二点

  更改下业绩播报的小贴士，第二点，更改为：“ 今天的业绩 10 分钟更新一次，其他时间的业绩 15 分钟更新一次；”

## 阅读思考

- [Get Started With Analyzing Runtime Performance](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/)

  1. 使用 chrome Incognito Mode（隐身模式）打开 [https://googlechrome.github.io/devtools-samples/jank/](https://googlechrome.github.io/devtools-samples/jank/)，打开 DevTools（开发者工具）。
  2. 点击 Performance tab，勾选 Screenshots；点击 Capture Setting （右上角小齿轮），将 CPU 设置为 4x slowdown。
  3. 点击页面 add 10 按钮，直到页面蓝色正方形运动有明显卡顿。
  4. 点击 DevTools Performance 面板内左上角 Record （灰色实心圆圈）开始记录，等待几秒钟，点击 stop 按钮，Performance 面板将展现刚才几秒钟记录的数据结果。
  5. FPS（frames per seconds）如果是红色条，则表示帧率低，可能影响用户体验。通常，绿色条越高，FPS 越高。
  6. FPS 下面是 CPU，颜色与底部 Summary 面板颜色相对应，图表内容表示 CPU 使用情况。
  7. Frames 选项，鼠标移动到绿色方块会显示当时的 FPS。
  8. 按下 Command+Shift+P (Mac) 或者 Control+Shift+P (Windows, Linux) 打开命令菜单，输入 `Rendering` 选择 Show Rendering，在底部打开的 Rendering 面板勾选 FPS meter，页面右上角会展示 Frame Rate 面板。
  9. Main 选项，点击其中一个 Event，底部 Summary 面板会显示当前 Event 的信息。点击 reveal 链接，Main 选项图标会突出展示启动动画帧触发事件的事件。点击 Details 旁的索引链接会跳转到 source code。
  10. 分析代码

  以上是文章的概述，需要结合文章才能一步步操作才能知道 Performance 能做些什么。
