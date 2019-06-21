## 计划任务

- [x] sentry 工作流

  昨日的遗留问题：脚本自动化处理版本标识和 tag

  想了很多，最终的方案是通过 `npm version <semver>` 命令和 npm scripts postversion hook 脚本解决此问题。

  过程中有一些被折腾到的地方，`npm version <semver>` 命令会修改 package.json 和 package-lock.json 的 version 字段值，更新版本号，同时以此版本号生成 git tag，并且 commit。但是我们项目的 tag 并不与 version 一致，所以需要屏蔽此行为。

  查阅 [npm version 文档](https://docs.npmjs.com/cli/version) 知道原来是 git-tag-version 这个配置的原因，只要将这个值设置为 false，就不会生成 git tag 和 commit。

  ```bash
  npm version <semver> --no-git-tag-version
  ```

  每次执行版本更新命令还要加后面那串 --no-git-tag-version 总觉得有点麻烦，不合适，很容易出错，尤其当小伙伴去执行这个命令，很没保障。

  思考如何消灭后面这段配置命令，走了一点弯路，弯到准备动 mkt-cli 去做这件事，但是一想 mkt-cli 针对的是营销线所有项目，这个问题只是这个项目的特性，不应该在 mkt-cli 处理。

  然后是想着把这段命令配置在项目的 npm scripts 内，在脚本中加上 --no-git-tag-version，使用时只需要 `npm run <command>`。但是做着做着又总感觉哪别扭，`<command>` 怎么定义名词？除了 version 其它任何名词都觉得不合适，但 version 本身就是 npm scripts hook，脑袋疼...

  后来休息会，不知怎么灵光乍现，想到现在项目还有一个问题是小伙伴和 jenkins 在安装依赖的时候，需要手动修改注册源为内网地址。然后就想到了 .npmrc 这个配置文件上去，这两问题其实都可以通过在项目中添加 .npmrc 配置解决。

  ```bash
  registry=http://npm.tanzk.com:7001/
  git-tag-version=false
  ```

  好心酸，这么简答的问题居然绕了这么久...现在小伙伴和 jenkins 安装依赖时都不需要手动指定注册源，更新版本时也不需要添加 --no-git-tag-version 参数。

  以上问题解决后，就可以安心写脚本了，代码如下：

  ```js
  const { execSync } = require('child_process');
  const inquirer = require('inquirer');

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

  async function run() {
    const { tag } = await askTag();
    const { version } = require('../package.json');

    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "version: ${version} & tag: ${tag}"`, {
      stdio: 'inherit',
    });
    execSync(`git tag ${tag}`, { stdio: 'inherit' });

    process.exit(0);
  }

  run();
  ```

  最后还有一个需要提及的地方，npm scripts hook 不能使用 version，得用 postversion，因为 package-lock.json version 内容修改是在 version hook 之后。
