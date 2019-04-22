## 计划任务

- [x] pre-commit hook

  eslint 检测还是报错，文件匹配不上，不知道啥原因。

- [x] 处理一些 eslint rule 配置

  vue-cli3 生成的项目，eslint 规则要求针对 .vue 文件写后缀名，配置文件在 @vue/eslint-config-airbnb/index.js 内。  
   但是项目一直以来不需要这样处理，然后也觉着没必要，处理这个问题需要在 eslint config 文件内做些配置。

  ```json
  {
    "rules": {
      "import/extensions": [
        "error",
        "always",
        {
          "js": "never",
          "mjs": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never",
          "vue": "never"
        }
      ]
    }
  }
  ```

  保险起见，将 settings 也添加上来。

  ```json
  {
    "settings": {
      "import/resolver": {
        "import/extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
      }
    }
  }
  ```

## 阅读思考

### [2019 年 Node 趋势解读：大前端如何与 Node 结合？](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247490877&idx=1&sn=e1cdc6be87238eec9c5d0148c6b44b10)

我司在本地服务器也搭建了 yapi 服务，但是仅仅作为接口文档说明使用，并没有发挥其全部作用，比如 mock 数据。

Node.js 我一直想深入去了解、应用，但却总找不到正确的切入点，看了很多，缺乏实践。

### [张小龙：笨是一种人品](https://mp.weixin.qq.com/s?__biz=MzU1MzQ0MzA2Mw==&mid=2247483756&idx=1&sn=684ae544d7c62d0df10662d831f26d18)

微信真的是中国最好的产品，没有之一，张小龙的际遇，冥冥之中自有安排。

> “我坚持了一个原则，如果一个新的产品，没有获得自然的增长曲线，我们就不应该推广它。所以在前 5 个月里面，我们基本上没有推广微信。”

> “微信已经诞生八年了，你想一想这八年里，你是花在朋友家人身上的时间多，还是花在微信的时间多？微信可能会多一点。如果微信是一个人，它一定是你最好的朋友，你才愿意花那么多时间给它。那么，我怎么舍得在你最好的朋友脸上，贴一个广告呢？让你每次见他，都要先看完广告才能跟他说话。”
