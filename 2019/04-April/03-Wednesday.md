## 计划任务

- [x] 子模块项目 commit 时针对 commit 文件内容执行 lint 检测

  在主项目 package.json scripts 添加 install 钩子，将已经写好的 pre-commit 脚本，复制到 `~/micro-frame/.git/modules/src/<submodule-name>/hooks/` 内。

  install.js

  ```js
  const fs = require('fs');
  const path = require('path');

  fs.readFile(path.join(__dirname, '../.gitmodules'), 'utf8', (err, data) => {
    const submodulePaths = data.match(/(?<=\[submodule\s")([^"]+)/g);
    submodulePaths.forEach(smPath => {
      fs.createReadStream(path.join(__dirname, 'pre-commit')).pipe(
        fs.createWriteStream(
          path.join(__dirname, `../.git/modules/${smPath}/hooks/pre-commit`)
        )
      );
    });
    // eslint-disable-next-line no-console
    console.log('Completed pre-commit hook for submodules');
  });
  ```

  pre-commit

  ```bash
  #!/bin/sh
  # 参考：https://gist.github.com/broofa/730fab6ceb1686f4a1fa9977b791b1b5

  # 获取当前位置
  SHELL_DIR=$(dirname $(readlink -f "$0"))

  # 截取到项目根目录
  ROOT_DIR=${SHELL_DIR%%.git*}

  ESLINT="${ROOT_DIR}node_modules/.bin/eslint"

  # 已添加到暂存区文件
  # 子模块所有文件都需要被 lint 检测
  STAGED_FILES=`git diff --cached --name-only`

  if [[ "$STAGED_FILES" = "" ]]; then
    exit 0
  fi

  # 检测并修复可修复代码
  # issue: 子模块项目对 import 内容的检测因为目录结构问题无法正确解析
  $ESLINT --rule 'import/no-unresolved: 0' "${STAGED_FILES[@]}" --fix

  ESLINT_EXIT="$?"

  # Re-add files since they may have been fixed
  git add "${STAGED_FILES[@]}"

  if [[ "${ESLINT_EXIT}" != 0 ]]; then
    exit 1
  fi

  exit $?
  ```

  pre-commit 还是存在一些问题，比如子模块对 webpack alias 配置别名无解析，猜测是因为在子模块进行 eslint 检测，子模块根目录没有 eslint 配置文件的原因。

  晚上还是使用了 prettier 格式化代码，配合 vscode prettier 插件和 `"editor.formatOnSave": true` 的工作区配置，已基本完成。

  vscode 工作区配置

  ```json
  {
    "editor.formatOnSave": true,
    "files.insertFinalNewline": true,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
        "language": "vue",
        "autoFix": true
      }
    ],
    "vetur.format.defaultFormatterOptions": {
      "prettyhtml": {
        "wrapAttributes": true
      }
    }
  }
  ```

  .prettierrc.js

  ```js
  module.exports = {
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
  };
  ```

  eslint 仍需忽略两个 vue eslint plugin rule（找时间再处理）

  ```
  'vue/multiline-html-element-content-newline': 0,
  'vue/singleline-html-element-content-newline': 0,
  ```

## 今日概览

下午读完书没控制住脾气，语气有点重的说了 @巧云 一顿，把她给说哭了。  
一方面因为她实在不争气，做了这么久前端，基础知识还是很差，处理问题毫无章法。另一方面，中午读书在那站半个小时太憋屈，火越憋越大。  
后来还是跟 @巧云 道歉了，语气确实重了点，也希望她经过这次之后能有所改变。
