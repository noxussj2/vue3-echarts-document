# 环境变量

:::danger 警告
当环境变量文件发生更改后，必须要重新启动项目才能生效。
:::

Vite 默认提供了 `import.meta.env` 环境变量对象的使用，分别包含以下的一些属性。

-   `import.meta.env.MODE` 表示应用运行的模式，分别是 `development` `production`

-   `import.meta.env.PROD` 表示应用是否运行在生产环境中，分别是 `true` `false`

-   `import.meta.env.DEV` 表示应用是否运行在开发环境中，分别是 `true` `false`

## `.env` 文件

Vite 内部会结合 [dotenv](https://github.com/motdotla/dotenv) 插件进行处理用户自定义的环境变量。

可以在项目根目录下建立以下环境变量文件。

```sh
.env                    # 所有情况都会加载
.env.development        # 开发环境下会加载
.env.production         # 生产环境下会加载
```

::: code-group

```sh [.env]
VITE_NAME = xiaoming
```

```sh [.env.development]
VITE_API_URL = https://noxussj.top/api
```

```sh [.env.production]
VITE_API_URL = https://baidu.com/api
```

:::

加载后的环境变量可通过 `import.meta.env` 对象进行访问。

:::tip 环境变量优先级
当多个环境遇到重复变量名称时 `.env[mode]` 中的环境变量优先级会大于 `.env`
:::

<br />

## 意外情况

为了防止意外的暴露了一些未知的环境变量，只有以 `VITE_` 为前缀的变量才会提供给 `import.meta.env` 对象。

::: code-group

```sh [.env]
VITE_API_URL = https://noxussj.top/api
DB_PASSWORD = admin
```

:::

::: code-group

```typescript [App.vue]
console.log(import.meta.env.VITE_API_URL) // https://noxussj.top/api
console.log(import.meta.env.DB_PASSWORD) // undefined
```

:::
