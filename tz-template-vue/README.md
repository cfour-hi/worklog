# tz-template-vue

> 潭州中后台项目 Vue 模板

## 开发前

阅读 [潭州课堂前端组规范](http://git.tanzk.cn/frontend/Front-End-Standards)

## 开发工作流

- 克隆并关联远程 dev 分支

  ```bash
  git clone -b dev <project-download-link>
  ```

- 切换到项目根目录

  ```bash
  cd <project-name>
  ```

- 创建自己的专属分支并推送关联到远程仓库

  ```bash
  # 当前处于 dev 分支

  # 先创建自己的专属分支
  git checkout -b <self-branch>

  # 推送并关联到远程分支
  git push -u origin <self-branch>
  ```

- 功能开发

  ```bash
  # 当前处理 <self-branch> 分支

  # 安装项目依赖
  npm i

  # 任务（功能）开发
  git checkout -b <task>

  # 任务开发完成之后进行常规提交流程
  git status
  git add <file-name>
  git commit
  # 以上三步操作建议直接在 vscode 源代码管理完成

  # commit 之后先通过 rebase 方式拉取远程 dev 分支最新代码
  git pull --rebase origin dev

  # 此时如果产生冲突则会在自动创建的临时分支进行处理
  # rebase 冲突处理示例：https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md#%E5%B0%8F%E7%BA%A2%E8%A7%A3%E5%86%B3%E5%90%88%E5%B9%B6%E5%86%B2%E7%AA%81

  # 切换到自己的专属分支 <self-branch>
  git checkout <self-branch>

  # 冲突解决之后再切换到 <self-branch> 分支对任务分支代码进行合并
  git merge <task>

  # 合并之后再推送 <self-branch> 分支最新代码到远程仓库
  git push

  # 然后去项目远程仓库 <self-branch> 分支发起 Pull Request 请求

  # 确认 Pull Request 通过之后再删除已完成的 task 分支
  git branch -d <task>
  ```

## 目录结构

```bash
ROOT/
|── build/                # 构建
|── config/               # 构建配置
|── mock/                 # 接口数据模拟
|── src/                  # 项目代码
|── static/               # 静态文件
|── .babelrc              # babel 配置
|── .editorconfig         # 不同编辑器代码风格统一配置
|── .eslintignore         # eslint 忽略检测配置
|── .eslintrc.js          # eslint 配置文件
|── .gitignore            # git 忽略提交配置
|── .postcssrc.js         # postcss 配置
|── .prettierrc.js        # prettier 配置
|── index.html            # 项目挂载页面
|── jsconfig.json         # vscode javascript 服务配置
|── package-lock.json     # 依赖锁定文件
|── package.json          # 项目描述文件
|── README.md             # 项目说明文档
```

## Mock

使用 VSCode [easy-mock](https://marketplace.visualstudio.com/items?itemName=EasyMock.easymock) 插件，使用方式参考文档。

## VSCode

### 插件

- [EasyMock](https://marketplace.visualstudio.com/items?itemName=EasyMock.easymock)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

### 工作区设置

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "files.insertFinalNewline": true,
  "javascript.validate.enable": false,
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "eslint.validate": [
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "emmet.includeLanguages": {
    "vue-html": "html"
  },
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 80
    }
  }
}
```

## 构建

```bash
# 安装依赖
npm i

# 本地 Mock 开发
npm run dev:mock

# 后端联调开发
npm run dev

# 开发环境构建
npm run build:dev

# 测试环境构建
npm run build:test

# 生产环境构建
npm run build:prod # 或者 npm run build

# 构建统计报告
npm run build --report # 默认生产环境

# 自动修复 eslint 错误
npm run lint:fix
```

## TODO

- 用户行为追踪
