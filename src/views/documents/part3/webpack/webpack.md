<script setup>
import Image1 from "./webpack/_image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('w10004')
</script>

# <AppCode code="84" /> Webpack 介绍

<ClientOnly><AppRead code="w10004" /></ClientOnly>

## 什么是 webpack？

:::tip 官方描述
webpack 是一个用于现代 JavaScript 应用程序的静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。
:::

怎么理解这段话呢，我们项目一般都是由 html 文件、css 文件、js 文件组成。使用 webpack 模块化打包工具，可以把整个项目的代码全部打包并且压缩成一个名为 bundles.js 的文件，通过 index.html 去引入它。

我们在学习 webpack 的时候，可能会觉得很难，那是因为你还没想通。我们应该要多一点思考为什么会有这个东西，它存在的意义是什么？解决了什么问题？抱着这种心态去学习，复杂的问题也会变的很简单。

官方文档地址：[https://webpack.docschina.org](https://webpack.docschina.org)

<AppImage :src="Image1" />

## webpack 核心

webpack 中的核心是 loader，假设没有 loader，那么 webpack 就是一个合并代码的工具。

## webpack 工作原理

1. 一般项目都会散落各种代码以及资源文件
2. webpack 会根据配置找到资源文件的入口（一般都是 js 文件）
3. 顺着入口文件的代码寻找 import 或者 require 语句，解析推断出来所对应的资源模块，
4. 然后分别解析每个资源模块所对应的依赖，最终将项目中有用到的文件形成一个依赖树
5. webpack 遍历依赖树，找到每个资源节点所对应的文件，然后通过配置的 loader 加载器去加载
6. 最后将加载到的结果添加到 bundle.js 中

<AppComment />