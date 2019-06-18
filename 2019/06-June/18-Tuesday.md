## 计划任务

- [x] 明天版本发布的准备工作

  将 CRM v1.19 和 工单 v1.22 合并到 master 分支，解决冲突。

## 今日收获

### npm script 多命令

#### 串行：使用 `&&` 连接多个命令

```json
{
  "scripts": {
    "lint": "npm run lint:js && npm run lint:vue"
  }
}
```

#### 并行：使用 `&` 连接多个命令

```json
{
  "scripts": {
    "lint": "npm run lint:js & npm run lint:vue"
  }
}
```

> 注： 并行命令，为了稳定复现一些错误，可在命令最后加上 & wait。另外，加上 & wait 还有一个好处，如果我们在子命令启动长时间运行的进程，可用 ctrl + c 来结束进程。

#### 快捷命令：`npm-run-all` 默认串行

```json
{
  "scripts": {
    "lint": "npm-run-all lint:js lint:vue"
  }
}
```

可以使用通配符简化命令：

```json
{
  "scripts": {
    "lint": "npm-run-all lint:*"
  }
}
```

并行：

```json
{
  "scripts": {
    "lint": "npm-run-all --parallel lint:*"
  }
}
```
