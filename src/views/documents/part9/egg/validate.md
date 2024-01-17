# 参数校验

一般在获取到用户的请求参数后，要对必传的参数进行校验。可以借助 `egg-validate` 插件实现。

客户端使用 `POST` 等接口请求时，需要设置 `Content-Type` 为 `application/x-www-form-urlencoded` ，后端才能通过 `this.ctx.request.body` 进行接收。

:::code-group

```javascript [app/controller/read.js]
class _Controller extends Controller {
    async index() {
        this.ctx.validate(
            {
                visitorId: { type: 'string' },
                code: { type: 'string' }
            },
            this.ctx.request.body
        )
    }
}
```

:::

除了使用 `this.ctx.validate` 进行参数校验以外，还需要在 `config/plugin.js` 启用校验插件。

:::code-group

```javascript [config/plugin.js]
exports.validate = {
    enable: true,
    package: 'egg-validate'
}
```

:::
