<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'

loginRead('v10018')
</script>

# <AppCode code="117" /> 动态组件 Components

<ClientOnly><AppRead code="v10018" /></ClientOnly>

:::warning 注意
在阅读本问文章之前已经确认你对 Vue 组件有一定的了解。
:::

## 基础案例

我们先看一下非动态组件的写法，也就是我们平时常用的组件写法。

```vue
<template>
    <div class="home">
        <Component1 v-if="active === 'Component1'"></Component1>
        <Component2 v-if="active === 'Component2'"></Component2>
        <Component3 v-if="active === 'Component3'"></Component3>
    </div>
</template>

<script>
import Component1 from './Component1.vue'
import Component2 from './Component2.vue'
import Component3 from './Component3.vue'

export default {
    components: { Component1, Component2, Component3 },
    data() {
        return {
            active: 'Component1'
        }
    }
}
</script>
```

代码中我们引入了三个组件，并且都通过 `active` 进行判断展示不同的组件。这个是比较常见的一个场景。现在遇到了一个问题，假设我有 50 个组件，那你是不是要用 `v-if` 判断 50 次。这样操作就会显得很繁琐。

接下来我们使用动态组件进行代码改造。

```vue
<template>
    <div class="home">
        <component :is="active"></component>
    </div>
</template>

<script>
import Component1 from './Component1.vue'
import Component2 from './Component2.vue'
import Component3 from './Component3.vue'

export default {
    components: { Component1, Component2, Component3 },
    data() {
        return {
            active: 'Component1'
        }
    }
}
</script>
```

只需要一行代码就能解决了。

## 动态组件

Vue 内部提供了一个全局组件，名称叫 component，主要用来进行动态渲染组件。它可以接受 `is` 参数，`is` 参数代表要渲染的组件名称。当你切换 `is` 属性时，整个组件是会进行重新渲染的，不会保留之前的组件状态。如果想要保留，则需要使用 `keep-alive` 组件进行包裹。

<AppComment />