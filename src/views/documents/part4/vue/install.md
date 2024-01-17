<script setup>
import Image1 from "./install/_image1.png"
import Image2 from "./install/_image2.png"
import Image3 from "./install/_image3.png"
import Image4 from "./install/_image4.png"
import Image5 from "./install/_image5.png"
import Image6 from "./install/_image6.png"
import Image7 from "./install/_image7.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10002')
</script>

# <AppCode code="101" /> Vue2.0 安装

<ClientOnly><AppRead code="v10002" /></ClientOnly>

一般我们都不会单独用 npm 去安装 Vue 插件，而是通过脚手架 Vue CLI 去初始化一个 Vue 项目。

## Vue CLI 安装

::: warning 注意
使用默认的镜像源安装 npm 第三方包可能要很长时间，建议你已经替换了新的镜像源。如需要请查看 [npm 镜像源修改](/documents/part3/webpack/env.html#npm-镜像源修改)
:::

Vue CLI 官网：[https://cli.vuejs.org/zh](https://cli.vuejs.org/zh)

通过 npm 全局安装 vue cli 脚手架 `npm install -g @vue/cli`

<AppImage :src="Image1" />

目前安装的版本是 5.0.8

## Vue CLI 初始化项目

1. 新建一个空文件夹，用来存放项目文件。

<AppImage :src="Image2" />

2. 通过 `vue create hello-world` 命令初始化一个 Vue 项目。之后会出现一些选项。

3. 选择 `Default ([Vue 2] babel, eslint)` 代表默认安装 Vue2.0 并且集成了 babel 和 eslint 插件。

<AppImage :src="Image3" />

## 启动项目

1. 通过 `cd hello-world` 命令进入项目根目录，或者直接把 hello-world 文件夹拖到新的 VS Code 窗口中。

2. 通过 `npm run serve` 或者 `yarn serve` 运行项目。

<AppImage :src="Image4" />

<br />

3. 在浏览器中输入 `http://localhost:8080/` 或者在终端中按住 Ctrl + 鼠标左键点击它即可预览页面。

<AppImage :src="Image5" />

<AppVSCode href="https://noxussj-note2demo1-vws4sejk5a0.ws-us85.gitpod.io" />

## 目录结构分析

-   node_modules（项目依赖包文件）
-   dist（项目打包文件）
-   public（公共静态资源）
    -   favicon.ico（网页图标）
    -   index.html（静态页面）
-   src（编译文件）
    -   assets（静态资源）
    -   components（全局组件）
    -   App.vue（根组件）
    -   main.js（打包入口）
-   .gitignore（git 过滤配置）
-   babel.config.js（ECMAScript 解析文件）
-   package.json（依赖包/插件/项目信息记录）
-   README.md（介绍文档）
-   vue.config.js（运行/打包配置文件）

## 安装 Vue 相关插件

**Vuter**

后续在访问 `.vue` 文件时，代码可能会黑白色的，没有语法高亮，需要安装一下 Vueter 插件 。请参考 [Vuter 插件](/documents/part1/html5/vscode.html#扩展插件)

<AppImage :src="Image6" />

<AppImage :src="Image7" />

**Prettier - Code formatter**

代码格式化工具，使得代码更加简洁易读。请参考 [Prettier - Code formatter 插件](/documents/part1/html5/vscode.html#扩展插件)

<AppComment />