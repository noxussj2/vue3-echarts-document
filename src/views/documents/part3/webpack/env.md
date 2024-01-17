<script setup>
import Image1 from "./env/_image1.png"
import Image2 from "./env/_image2.png"
import Image3 from "./env/_image3.png"
import Image4 from "./env/_image4.png"
import Image5 from "./env/_image5.png"
import Image6 from "./env/_image6.png"
import { loginRead } from '@/utils/login-read'

loginRead('w10002')
</script>

# <AppCode code="82" /> 搭建工程化开发环境

<ClientOnly><AppRead code="w10002" /></ClientOnly>

## 下载 Node.js

**官方下载地址**

[https://nodejs.org/zh-cn/download/releases](https://nodejs.org/zh-cn/download/releases)

node.js 版本迭代的非常快，目前官方已经推出到 v19.2.0 版本了，相对是一个比较新的版本了。建议下载 v14.18.3 版本，至少这个版本目前在很多项目中运用过，算是比较稳定。

<AppImage :src="Image1" />

<br />

根据自己的操作系统选择安装，我的是 Windows 11 64 位操作系统。

<AppImage :src="Image2" />

安装的时候全部按默认即可。目前好像不需要配置环境变量了。

## 验证 Node.js 环境是否搭建成功

在终端输入 `node -v` 和 `npm -v` 命令后查看版本号有没有出来，如果有证明配置成功了。

<AppImage :src="Image3" />

请确保上面两个版本号跟我一样，否则后期安装项目依赖包时候出现问题时不好排查。

## npm 镜像源修改

镜像源就像你去市场买菜一样，肯定是想去近的那个，不用大老远跑去很远的地方买。

默认镜像源：`https://registry.npmjs.org` 下载一般都很慢。

国内淘宝镜像源：`https://registry.npm.taobao.org`

国内淘宝镜像源（新版）：`https://registry.npmmirror.com`

通过 `npm config set registry https://registry.npmmirror.com` 修改 npm 镜像源，使得下载第三方包更加快速。

## 安装 yarn

在命令行工具中运行 `npm install yarn -g`

主要为了后续工程化项目中安装插件使用。

<AppImage :src="Image4" />

<br />

系统默认会禁止使用 `yarn` 需要通过 `set-ExecutionPolicy RemoteSigned` 命令设置允许一下。

<AppImage :src="Image6" />

<br />

否则使用 yarn 安装插件时候会报错。

<AppImage :src="Image5" />

<AppComment />