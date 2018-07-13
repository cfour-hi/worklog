// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard'
    'airbnb-base',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'comma-dangle': [2, 'always-multiline'],
    'no-var': [2], // 禁止使用var定义变量
    'no-extra-semi': [2], // 禁止多余分号
    // 'comma-dangle': [2, { imports: 'ignore', exports: 'ignore' }], // 数组，对象末尾逗号
    'linebreak-style': [0], // 关闭换行风格检测
    'react/sort-comp': [0], // 允许react下生命周期函数出现在普通成员函数的后面
    'import/no-named-default': [0], // 允许在import时给default重命名
    'max-params': [2, 6], // 函数参数最多6个
    'no-script-url': [0], // 允许 a标签的href属性里面出现javascript:;
    'no-nested-ternary': [0], // 允许三元表达式嵌套
    'no-throw-literal': [0], // 允许抛出字面量类型的错误
    'no-cond-assign': [2], // 不能在if,for,while,do...while条件中出现赋值操作
    'no-unused-vars': [2, { ignoreRestSiblings: true }], // 禁止出现未使用的变量
    'no-magic-numbers': [1, { ignore: [1], ignoreArrayIndexes: true }], //不能出现魔术数字

    'func-names': 0, // 允许函数表达式 'function' 标识符后面不带函数名称
    'space-before-function-paren': 0, // 允许函数表达式 'function' 标识符后面不带空格
    'arrow-parens': [0, 'as-needed'], // 允许箭头函数在只有一个参数的情况下包裹在括号内
    'no-param-reassign': [2, { props: false }], // 函数参数不可重新赋值但参数属性可以修改
    'object-curly-newline': [2, { consistent: true }], // 允许对象内容写在一行
    'function-paren-newline': [2, 'consistent'], // 允许函数参数为函数表达式时参数换行
    'max-len': [2, { code: 300 }], // 允许一行代码的最大长度（主要放松对 .vue 文件 template 模板内容的限制）
  },
};
