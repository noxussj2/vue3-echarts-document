# Vue3.0 介绍

:::tip 即将阅读 Vue3 文档

-   阅读本篇文章之前，请确保你已经掌握了 Vue2

-   Vue2 将于 2023 年 12 月 31 正式停止维护。

-   Vue3 是在 2020 年 9 月 18 日发布的。可通过 [GitHub](https://github.com/vuejs/core/blob/main/changelogs/CHANGELOG-3.0.md) 更新记录查看。

:::

Vue3 相比 Vue2 从内到外、从源码、框架、语法、性能上都有很大的变化。例如 Vue2 的源码是采用 `JS` 开发的，而 Vue3 的源码是采用 `TS` 开发的，正式取消了类的语法 `this`，改为了函数式编程思想 `组合式 API` 等等，后续会逐个进行详细介绍。

<!-- JS、TS 源码插图 -->

## 未来是否有必要转向 Vue3

:::danger 警告
由于 Vue3 源码中使用了 `Proxy` 实现数据响应式，而且该 API 无法降级为 `Object.defineProperty` ，所以 Vue3 是不支持 IE 的，如果项目中有硬性的需求需要使用回 Vue2。
:::

这个也是很多小伙伴会比较关心的问题，以后是不是都要转向 Vue3 抛弃 Vue2 ？

按照博主的想法是认可的，官方已经通知了 Vue2 即将停止维护，在 IT 技术中，只要是停止维护的框架/库。都会意味着要被淘汰。

但是目前会有一个过渡时间，毕竟大部分公司的项目都是采用 Vue2 进行开发的，而 Vue3 刚出来也会有一部分的 bug 或者不太友好的地方。

最终会慢慢转向 Vue3，所以是非常有必要学习的。

## Vue3 值得关注的新特性

-   TS 语法开发

-   组合式 API

-   单文件组件中的组合式 API 语法糖 `<script setup>`

-   `<TelePort>` 组件

-   Fragments 片段

-   Emits 组件选项

-   `<style>` 样式中使用 `v-bind`

-   `<style scoped>` 针对组件样式更改

-   `<Suspense>` 异步组件

## Vue3 生态框架/库推荐

由于 Vue3 的发布，其生态的相关库也进行了更新。

-   脚手架： Vue CLI -> [Vite](https://cn.vitejs.dev/)

-   状态管理： Vuex -> [Pinia](https://pinia.vuejs.org/zh/)

-   Vue 代码插件： Vetur -> [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

-   静态网站生成： VuePress -> [VitePress](https://vitepress.dev/)
