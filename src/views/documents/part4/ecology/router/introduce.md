<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('v20001')
</script>

# <AppCode code="119" /> 介绍

<ClientOnly><AppRead code="v20001" /></ClientOnly>

:::warning 注意
在阅读本问文章之前已经确认你对单页面应用有一定的了解，并且清楚知道单页面应用的工作原理，以及它的优点、缺点。
:::

Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。那么什么时候需要用到路由呢？最简单的想法就是切换页面的时候，想要实现类似切换页面的效果，也是可以使用路由实现的。

<AppComment />