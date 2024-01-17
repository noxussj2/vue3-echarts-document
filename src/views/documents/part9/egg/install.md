# 安装

## 使用 NPM 命令快速初始化一个应用

```sh
$ npm init egg
```

运行 `init` 命令后，会出现一系列选项，我门只需要选择 `simple` 代表简单的空项目。

```sh
? Please select a boilerplate type (Use arrow keys)
  ──────────────
> simple - Simple egg app boilerplate
  microservice - Microservice app boilerplate based on egg
  sequelize - egg app with sequelize
  ts - Simple egg && typescript app boilerplate
  empty - Empty egg app boilerplate
  plugin - egg plugin boilerplate
  framework - egg framework boilerplate
```

安装相关依赖项

```sh
$ yarn
```

最后可以启动应用来体验了

```sh
$ npm run dev
$ open http://localhost:7001
```

## 应用部署

如果需要在服务端部署该应用，无需依赖 `pm2` 进行托管。直接使用命令 `npm run start` 即可。停止应用则为 `npm run stop`

## 目录结构

-   app/controller（控制器）
-   app/service（业务逻辑）
-   app/router.js（路由）
