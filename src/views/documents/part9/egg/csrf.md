# 鉴权

## 安全威胁 CSRF 的防范

CSRF（Cross-site request forgery） 跨站请求伪造。`CSRF` 攻击会对网站发起恶意伪造的请求，严重影响网站的安全。所以为了保障数据安全性，

## 防范方式

首先通过接口获取到 `token`，然后将 `token` 存储到客户端本地中，在提交 `GET` 以外的请求时，必须要携带上此 `token`。

在 `header` 请求头中设置 `x-csrf-token` 为对应的 `token` 值。

## 设置 CSRF 请求头接收字段

:::code-group

```javascript [config/config.default.js]
exports.security = {
    csrf: {
        enable: true,
        headerName: 'x-csrf-token' // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    }
}
```

:::

## 定义获取 CSRF token 接口

:::code-group

```javascript [app/router.js]
module.exports = (app) => {
    const { router, controller } = app

    /**
     * 鉴权
     */
    router.get('/api/v1/csrf', controller.csrf.index) // 获取 csrf token
}
```

:::

:::code-group

```javascript [app/controller/csrf.js]
'use strict'

const { Controller } = require('egg')

class _Controller extends Controller {
    async index() {
        const ctx = this.ctx
        ctx.body = ctx.csrf
    }
}

module.exports = _Controller
```

:::

通过 `ctx.csrf` 可以直接获取到 `token` 并返回给客户端
