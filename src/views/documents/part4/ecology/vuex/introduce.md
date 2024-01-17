<script lang="ts" setup>
import Demo1 from "./introduce/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('v30001')
</script>

# <AppCode code="123" /> 介绍

<ClientOnly><AppRead code="v30001" /></ClientOnly>

:::warning 注意
在阅读此文章之前请确保你已经掌握了组件中的选项 data、计算属性 computed、methods 方法等相关知识。
:::

## 什么是 Vuex？

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

你完全可以理解 vuex 中的状态 state 就是和选项 data 几乎一模一样，唯一不同的是选项 data 是定义在组件内的，不同组件之间访问需要传来传去。而 vuex 中的 state 是全局的，在任何组件内，只需要通过 `this.$store.state.$variable` 就能访问了。

Vuex 可以让 Vue 实例内的所有组件共享同一个状态（变量）。因为是共享的，所以多个组件如果同时对一个变量进行直接修改 `this.$store.state.$variable = $value`，那就会特别容易出问题。而且也破坏了单向数据流的模式。

## 安装

在我们使用脚手架搭建项目的时候，默认是没有帮我们安装的。需要自己手动进行安装。安装的 Vuex 插件时需要注意版本信息，Vue2.0 使用的是 `vuex3.x` ，而 Vue3.0 使用的是 `vuex4.x`。

通过命令安装 vuex 插件

```sh
$ yarn add vuex@3.6.2
```

## 开始使用

每一个 Vuex 应用的核心就是 store（仓库）。store 基本上就是一个容器，它包含着你的应用中大部分的状态 state 。

Vuex 和单纯的全局对象有以下两点不同

-   Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

-   你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

### 基础案例

1. 创建 store 文件，并且实例化 `Vuex.Store`。

```javascript
// src/store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

export default store
```

<br />

2. 在 Vue 实例中注册 store。

```javascript
// src/main.js

import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
```

<br />

3. 组件中获取 store 数据，并且尝试修改 `store.state`。

```vue
<!-- src/components/Home.vue -->

<template>
    <div class="home">
        {{ $store.state.count }}
    </div>
</template>

<script>
export default {
    mounted() {
        setInterval(() => {
            this.$store.commit('increment')
        }, 1000)
    }
}
</script>
```

<br />

4. 预览页面效果，可以发现每间隔 1 秒页面上绑定的 `count` 就会得到更新。

<AppCard>
    <Demo1 />
</AppCard>

<br />

再次强调，我们通过提交 mutation 的方式，而非直接改变 `store.state.count`，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让你的意图更加明显，这样你在阅读代码的时候能更容易地解读应用内部的状态改变。此外，这样也让我们有机会去实现一些能记录每次状态改变，保存状态快照的调试工具。有了它，我们甚至可以实现如时间穿梭般的调试体验。

## 那什么场景下适合使用 Vuex 呢？

例如我有个登录页面，登录后的用户信息，我可以存储到 vuex 中，因为我每个页面可能都会用到这份数据。在例如我有个全局的筛选地区组件，每个页面也会使用到这个地区参数，那也能作为 vuex 来使用。

大家可以自行分析整个项目中，有哪些数据是需要全局使用的，哪些数据是局部使用的。局部使用的直接在你的组件里面定义就好了。全局使用的就在 vuex 中的 state 中定义。个人建议千万不要滥用 vuex，否则你的状态管理器会难以维护，不要想着什么东西都往里面去定义。

官方描述：如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。

<AppComment />