<script setup>
import Image1 from "./advanced/_image1.png"
import Image2 from "./advanced/_image2.png"
import Image3 from "./advanced/_image3.png"
import Image4 from "./advanced/_image4.png"
import Image5 from "./advanced/_image5.png"
import Image6 from "./advanced/_image6.png"
import Image7 from "./advanced/_image7.png"
import Image8 from "./advanced/_image8.png"
import { loginRead } from '@/utils/login-read'

loginRead('v20004')
</script>

# <AppCode code="122" /> 进阶

<ClientOnly><AppRead code="v20004" /></ClientOnly>

## 导航守卫

官方文档上面描述的会比较深奥，而守卫类型也比较多，其中包含了全局前置守卫、全局解析守卫、全局后置钩子、路由独享守卫、组件内守卫。每一种守卫的作用和用法都不相同。这会使得大家去学习的时候觉得比较困难，这边主要介绍比较常用的守卫，全局前置守卫，其他的基本上没有那么常用就不讲解了，大家只需要学会全局前置守卫即可。另外导航守卫其实你可以理解成组件的生命周期那样，就是在路由变化过程中的每一个环节，都会触发特定的钩子函数，去做一些事情。

## 全局前置守卫

这个守卫的作用就是，当你的页面路由改变时（不含包路由中的参数变化），新页面被完全渲染之前，就会触发这个全局前置守卫 `router.beforeEach`。实际项目开发中，一般都会在全局前置守卫中进行路由权限的判断，如果用户没有这个路由的权限，则不允许它进行访问，或者是强制让路由改为登录页。

### 基础案例

1. 创建全局前置守卫。

```javascript
// src/router/index.js

import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes.js'

Vue.use(Router)

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    const validate = true

    if (to.path === '/login') {
        return next()
    }

    if (validate) {
        next()
    }

    if (!validate) {
        next('/login')
    }
})

export default router
```

<br />

2. 创建路由表。

```javascript
// src/router/routes.js

const routes = [
    {
        path: '/login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/user',
        component: () => import('../components/user/index.vue')
    }
]

export { routes }
```

<br />

3. 当校验通过时 `validate = true` ，访问 `user` 页面，验证路由。

<AppImage :src="Image1" />

<br />

4. 当校验不通过时 `validate = false` ，访问 `user` 页面，验证路由。

<AppImage :src="Image2" />

### router.beforeEach

接下来继续介绍全局前置守卫 `router.beforeEach`，该守卫是一个函数，需要传入一个回调函数。回调函数中分别返回了 `to` `from` `next` 参数。

**to 参数**

代表即将要进入的目标（路由对象）。

<AppImage :src="Image3" />

<br />

**form 参数**

代表当前导航正要离开的路由对象。

<AppImage :src="Image4" />

<br />

**next 参数**

前面两者都是一个对象，而 `next` 是一个函数。用来决定当前路由是否被允许放行。 `router.beforeEach` 是一个异步函数，就像是一个 `promsie` ，而 `next` 就像是 `resolve` 触发器。`next` 方法的调用参数不同，就会实现不同的路由效果。

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>next 调用方式</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>next()</td>
            <td>代表进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。就会渲染页面。</td>
        </tr>
        <tr>
            <td>next('/login')</td>
            <td>代表当前访问的导航 to 被中断，然后进行一个新的导航。</td>
        </tr>
        <tr>
            <td>next({ path: '/login' })</td>
            <td>另外一种写法</td>
        </tr>
    </tbody>
</table>

## 路由元信息

定义路由的时候可以配置 `meta` 字段。作用是在不同路由下都可以通过路由信息对象，或者是在路由守卫中获取到 `meta` 传入的对象数据。例如访问 `/user` 路由时，需要判断用户是否已经登录。而访问 `/news` 时，是不需要判断用户是否登录的。

### 基础案例

1. 修改路由表。

```javascript
// src/router/routes.js

const routes = [
    {
        path: '/login',
        component: () => import('../components/MyLogin.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/user',
        component: () => import('../components/user/MyIndex.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/news',
        component: () => import('../components/MyNews.vue'),
        meta: { requiresAuth: false }
    }
]

export { routes }
```

<br />

2. 修改路由守卫，模拟判断用户是否登录。

```javascript
// src/router/index.js

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth === false) {
        return next()
    }

    if (to.meta.requiresAuth === true) {
        const validate = true

        if (validate) {
            next()
        }

        if (!validate) {
            next('/login')
        }
    }
})
```

代码中的逻辑是：如果访问的页面不需要校验 `requiresAuth = false` 则放行，如果访问的页面需要校验 `requiresAuth = true` 则进行校验，校验中判断用户是否已经登录 `validate`，已登录 `validate = true` 则放行，未登录 `validate = false` 就会自动跳转到登录页面。

<br />

打印 `to` 对象，校验是否存在 `meta` 信息。

<AppImage :src="Image5" />

## 路由懒加载

我们都知道项目打包的时候，最终会生成一个包 `bundle.js` ，里面包含了所有的应用代码，几乎包含了 css、javascript、甚至是 image base64 部分，最后通过 `index.html` 页面进行引入，然后渲染页面。由于 `bundle.js` 包体积过大，我们首次渲染白屏的时间就会加长，导致用户体验感会降低。

为了解决 `bundle.js` 包体积过大，我们需要拆分包，我们所有页面的代码都会打包进 `bundle.js` 中，通过路由懒加载的形式，每个页面的代码会独立分成一个包，这样我们首次访问的时候，就没有必要加载那些不访问的资源进来，从而加快首次渲染时间，当然我们后续进行访问其他未加载的资源时就会进行轻微的等待状态，但是这样也算是给首次加载分担了很多压力。

在打包之前需要在 `vue.config.js` 中关闭一下 `sourceMap`，这个是源代码地图，目前不做太多介绍。因为打包后会将我们的源代码进行了压缩、混淆。所以无法清晰的看到我们自己编写的 JavaScript 代码。通过 `sourceMap` 就可以看见，但是打包后的项目文件中会多出来 `.map` 的文件，这个是不安全的，建议打包的时候关闭。

```javascript
// vue.config.js

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false
})
```

### 基础案例

以下正常写法是通过 `import` 提前将组件引入进来，然后在使用。这种就是非路由懒加载方式。

```javascript
// src/router/routes.js

import Login from '../components/MyLogin.vue'
import User from '../components/user/MyIndex.vue'
import News from '../components/MyNews.vue'

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/news',
        component: News
    }
]

export { routes }
```

<br />

验证打包结果。输入命令 `npm run build` 后可以看到在 `dist` 目录下生成了 2 个文件。

<AppImage :src="Image6" />

<br />

修改为路由懒加载方式。

```javascript
// src/router/routes.js

const routes = [
    {
        path: '/login',
        component: () => import('../components/MyLogin.vue')
    },
    {
        path: '/user',
        component: () => import('../components/user/MyIndex.vue')
    },
    {
        path: '/news',
        component: () => import('../components/MyNews.vue')
    }
]

export { routes }
```

<br />

验证打包结果。输入命令 `npm run build` 后可以看到在 `dist` 目录下生成了 5 个文件。

<AppImage :src="Image7" />

但是到了这里同学会有一个疑问，我怎么知道哪个文件刚好对应的是 `/login` `/user` `/news` 路由呢？接下来就会继续介绍魔法注释。

## 魔法注释

使用前提是路由懒加载的方式。由于 Vue2.0 底层是依赖 Webpack 进行项目打包的，所以利用 Webpack 的 特点，可以给每个包设置不同的名称。通过 `webpackChunkName` 进行设置。注意：如果 `webpackChunkName` 相同则会打进同一个包中。

### 基础案例

1. 给每个路由添加魔法注释。

```javascript
// src/router/routes.js

const routes = [
    {
        path: '/login',
        component: import(/* webpackChunkName: "login" */ '../components/MyLogin.vue')
    },
    {
        path: '/user',
        component: import(/* webpackChunkName: "user" */ '../components/user/MyIndex.vue')
    },
    {
        path: '/news',
        component: import(/* webpackChunkName: "news" */ '../components/MyNews.vue')
    }
]

export { routes }
```

<br />

2. 验证打包结果。是不是就可以很明显看到哪个包是属于哪个页面的。

<AppImage :src="Image8" />

<AppComment />