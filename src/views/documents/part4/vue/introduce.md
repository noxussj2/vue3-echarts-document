<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('v10001')
</script>

# <AppCode code="101" /> Vue2.0 介绍

<ClientOnly><AppRead code="v10001" /></ClientOnly>

:::warning 注意
在学习 Vue 之前建议你已经学会了 HTML5、CSS3、Javascript、ES6、ESLint、Webpack、Sass、前端工程化等基础。否则你学习起来可能会有点吃力。
:::

在我们传统模式中，都是通过 HTML5、CSS3、JavaScript 进行页面开发，但是其中会存在一系列的问题。而使用目前主流的框架则是解决了这些问题。当前三大主流框架分别有、Vue、React、Angular。目前建议先学习 Vue，相对于其他两款主流框架，Vue 相对更简单，更容易上手，中小型公司也是主要使用 Vue 开发项目。

Vue 官方教程 [https://v3.cn.vuejs.org/guide/introduction.html](https://v3.cn.vuejs.org/guide/introduction.html)

你也可以去看官网的教程，包含了如何安装 Vue、以及如何使用。当然阅读的难度也是比较大的。这里开始正式介绍什么是 Vue ？

Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。比较核心的就是你不用关心它是如何利用 JS 渲染 DOM 的，你只需要管定义数据和在哪个位置展示数据即可。

## 传统开发模式的痛点

1. 多人协同开发时，代码混乱没有规范
2. 多个页面有相同模块时，无法抽离公共组件
3. 部署时需要手动压缩所有 Css、JavaScript 代码（一个个压缩）
4. 源码代码量太多，冗余代码一堆
5. 频繁通过 JS 操作 DOM，性能很差
6. 需要思考通过 JS 操作 DOM 从而达到想要的业务需求效果，增加思考空间，增加开发时间成本
7. 代码部署时需要手动部署
8. 如果代码使用了 ES6 语法，需要手动降级处理
9. 如果代码使用了 Sass 语法，需要手动降级处理
10. ...

使用 Vue 可以解决以上的一系列问题。

## Vue 核心功能

-   MVVM 模式
-   单文件组件形式
-   模板编译
-   指令
-   组件化
-   组件 & 组件通讯
-   插槽
-   响应式
-   生命周期钩子
-   动态 Class & Style
-   过滤器 Filters
-   Mixin 混入
-   跨级通信 Provide & inject
-   计算属性 Computed
-   侦听器 Watch
-   动态组件 components
-   单页面应用
-   ...

## Vue 生态

-   路由 Vue Router
-   状态管理器 Vuex
-   ...

<AppComment />