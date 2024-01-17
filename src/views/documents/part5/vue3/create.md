# 新的创建 Vue 实例的语法

## 创建 app 应用

Vue 3.0 中，我们可以使用 `createApp` 函数来创建 app 应用，而不是使用 `new Vue`。

```ts
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)
```

## 全局 API

通过 `app.component()` 方法，我们可以注册全局组件。

通过 `app.directive()` 方法，我们可以注册全局指令。

通过 `app.use()` 方法，我们可以注册全局插件。

## Vue.prototype 替换为 app.config.globalProperties

```ts
// 之前 - Vue 2
Vue.prototype.$http = () => {}
```

```ts
// 之后 - Vue 3
const app = createApp(App)
app.config.globalProperties.$http = () => {}
```

## 挂载 App 实例

使用 `createApp` 创建的 app 应用，需要使用 `app.mount()` 方法来挂载到页面上。

```ts
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)
app.mount('#app')
```
