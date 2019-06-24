## 计划任务

- [x] sentry 工作流

  因为项目结构的原因，修复线上问题 或 多项目同时发布 时，一次项目版本发布可能存在两个 tag，也就是说需要 release 两个 sentry 项目版本。

  以上场景，如果只 release 一个 sentry 版本，会造成什么问题？

  假设两个 tag 分别为 A 和 B，某个异常预计 resolve 是在 A，但是最终只会发布 tag B，那异常是否有效 resolve？

  单项目结构的情况下，只要每次生产环境 build 的时候执行 sentry release 脚本即可。  
  但仔细一想，单项目结构如果也存在多版本合并同时发布的情况，同样需要一次项目版本发布执行两次 sentry release。

  思考再三，决定暂时不考虑这种场景，暂时不对这种场景做解决方案。因为目前没有实践落地，不完全清楚 sentry 的 resolve 处理机制，所以暂缓，等落地之后出现这种问题再做解决方案处理。

  _已解决_：系统在运行时如何获取到当前 tag？

  > 系统运行时 sentry 初始化需要配置 [release](https://docs.sentry.io/workflow/releases/?platform=browser#configure-sdk) 属性知道当前系统运行版本标识

  经过前两天的工作已经确定，代码全部合并到 master 分支后，会通过 `npm version <semver>` 命令生成版本号和 tag。但是这个 tag 只储存在当前项目的 git 中，项目本身不知，所以 npm postversion hook 还需要做一件事情，就是将 tag 写入到 package.json，通过环境变量的形式在 build 时获取 tag 值，注入到项目。

  package.json 新增 tag 属性，IO 的方式参考 npm version 源码，加了几个插件。postversion.js 脚本最终如下：

  ```js
  const { execSync } = require('child_process');
  const fs = require('fs');
  const path = require('path');
  const inquirer = require('inquirer');
  const detectIndent = require('detect-indent');
  const detectNewline = require('detect-newline');
  const writeFileAtomic = require('write-file-atomic');
  const stringifyPackage = require('stringify-package');

  function askTag() {
    return inquirer.prompt({
      type: 'input',
      name: 'tag',
      message: '标签（Tag）名称：',
      validate: input => {
        if (!input) {
          return new Error('请输入...');
        }
        let tags = execSync('git tag');
        tags = tags
          .toString()
          .split('\n')
          .filter(t => t);
        if (tags.includes(input)) {
          return new Error(`标签 ${input} 已存在`);
        }
        return true;
      },
    });
  }

  const FILENAME = 'package.json';
  const FILEPATH = path.join(__dirname, '..', FILENAME);

  function updatePackageTag(newTag) {
    return new Promise((resolve, reject) => {
      let data = fs.readFileSync(FILEPATH, { encoding: 'utf8' });
      let indent;
      let newline;
      try {
        indent = detectIndent(data).indent;
        newline = detectNewline(data);
        data = JSON.parse(data);
      } catch (e) {
        data = null;
      }

      if (data) data.tag = newTag;

      writeFileAtomic(
        FILEPATH,
        stringifyPackage(data, indent, newline),
        err => {
          if (err) {
            console.error('tag', `Failed to update tag in ${FILENAME}`);
            return reject();
          }
          resolve();
        }
      );
    });
  }

  async function run() {
    const { tag } = await askTag();
    const { version } = require(FILEPATH);

    await updatePackageTag(tag);

    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "version: ${version} & tag: ${tag}"`, {
      stdio: 'inherit',
    });
    execSync(`git tag ${tag}`, { stdio: 'inherit' });

    process.exit(0);
  }

  run();
  ```

  接下来是 Vue 项目的环境变量配置，[官方文档 - 在客户端侧代码中使用环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%9C%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BE%A7%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F) 说明非常清晰，只要在 vue.config.js 文件中计算环境变量即可。

  ```js
  const { tag, sentry } = require('./package.json');
  process.env.VUE_APP_TAG = tag;
  process.env.VUE_APP_SENTRY = sentry;
  ```

  这里我将 sentry 项目的名称也加入到 package.json 配置，跟 tag 一样通过环境变量注入到项目中。最终项目的 sentry 初始化 release 配置如下：

  ```js
  {
    release: `${process.env.VUE_APP_SENTRY}@${process.env.VUE_APP_TAG}`,
  }
  ```

  接下来到 release.sh 脚本，需要修改发布的版本标识，修改为项目 tag 值。  
  shell 脚本中获取 package.json 数据内容我是参考 [代码片段](https://gist.github.com/DarrenN/8c6a5b969481725a4413)，最终采用 node 的方式实现：

  ```bash
  #!/bin/sh

  # export SENTRY_LOG_LEVEL=debug

  # Assumes you're in a git repository
  export SENTRY_AUTH_TOKEN=adc6cbeffb8d459fa38c131a357517fb18acec76a4d34197a794a780e4c03
  export SENTRY_ORG=sentry

  TAG=$(node -pe "require('./package.json').tag")

  # VERSION=$(sentry-cli releases propose-version)

  # Create a release
  sentry-cli releases new -p marketing-line-fe $TAG

  # Associate commits with the release
  sentry-cli releases set-commits --auto $TAG
  ```

  测试执行后，打开 sentry 平台对应项目，查看版本已经发布。

  ![ZAccLR.png](https://s2.ax1x.com/2019/06/24/ZAccLR.png)

## 阅读思考

### [koa 源码解析](https://www.yuque.com/jianxu/study/lm5dlc)

发现一个小技巧，以做 Vue 项目业务开发为例，后端响应数据内需要插入自定义数据，直接往响应数据内插入自定义数据的方式不太友好。这时可以通过 `Object.create` 将自定义数据加入到响应数据的原型对象。

```js
createContext(req, res) {
  const context = Object.create(this.context);
  const request = context.request = Object.create(this.request);
  const response = context.response = Object.create(this.response);
  // ...
}
```
