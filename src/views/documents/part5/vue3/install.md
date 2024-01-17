<script setup>
import Image2 from "./images/image2.png"
import Image3 from "./images/image3.png"
import Image4 from "./images/image4.png"
import Image5 from "./images/image5.png"
import Image6 from "./images/image6.png"
</script>

# Vue3.0 安装

:::warning 注意
Vite 需要 node 版本在 14.18.x 以上，建议版本和博主的一致。
:::

初始化 Vue3 项目本次采用 [Vite](/documents/part5/vite/introduce.html) 脚手架实现，不再使用 `Vue CLI`

博主这边使用的 node 版本是 `18.16.1` npm 版本是 `9.5.1`

## 搭建第一个 Vite 项目

使用 YARN 命令

```sh
yarn create vite
```

输入命令后将会显示一系列选项，分别是让你输入项目名称、选择技术框架、选择开发环境等。

```sh
√ Project name: ... vite-project
√ Select a framework: » Vue
√ Select a variant: » TypeScript
```

<AppImage :src="Image2" />

## 启动项目

通过命令 `cd vite-project` 或者在 `VS Code` 直接打开项目。

<AppImage :src="Image3" />

<br />

在命令行工具中输入 `yarn` 进行安装相关依赖包。

<AppImage :src="Image4" />

<br />

通过命令 `npm run dev` 启动项目。

<AppImage :src="Image5" />

<AppImage :src="Image6" />

到此我们的 Vue3 项目就搭建好啦！
