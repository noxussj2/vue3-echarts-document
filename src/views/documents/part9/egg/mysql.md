# 数据库配置

框架内部提供了 `egg-mysql` 插件来操作 `MYSQL` 数据库。

:::code-group

```javascript [config/config.default.js]
exports.mysql = {
    // 单数据库信息配置
    client: {
        // host
        host: '10.0.0.1',

        // 端口号
        port: '3306',

        // 用户名
        user: 'root',

        // 密码
        password: 'root',

        // 数据库名
        database: 'db'
    },

    // 是否加载到 app 上，默认开启
    app: true,

    // 是否加载到 agent 上，默认关闭
    agent: false
}
```

:::

最后需要启用插件 `egg-mysql`

:::code-group

```javascript [config/plugin.js]
exports.mysql = {
    enable: true,
    package: 'egg-mysql'
}
```

:::
