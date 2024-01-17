# 从此再无 `this`

`Vue2` 创建实例的语法是 `new Vue()`

`Vue3` 的语法是 `createApp()`

也就是说 `Vue2` 更偏向于类的写法，而 `Vue3` 已经脱离了类的概念，更偏向于函数式编程的写法，所以在 `Vue3` 中基本上不会在使用 `this` 来指向到 `Vue` 实例。

## 通过 `this` 访问变量

在 `Vue2` 中，我们可以通过 `this` 来访问到 `Vue` 实例，从而可以做一些事情。

```vue
<!-- 之前 - Vue 2 -->

<script>
export default {
    data() {
        return {
            name: 'xiaoming'
        }
    },
    mounted() {
        console.log(this.name) // xiaoming
    }
}
</script>
```

```vue
<!-- 现在 - Vue 3 -->

<script lang="ts" setup>
import { ref } from 'vue'

const name = ref('xiaoming')
console.log(name.value) // xiaoming
console.log(this) // undefined
</script>
```

## 从 `this.$emit` 到 `emit`

在 `Vue2` 中，我们可以通过 `this.$emit` 来触发一个事件，而在 `Vue3` 中，我们可以通过 `emit` 来触发一个事件。

```ts
// 之前 - Vue 2

this.$emit('my-event', 'xiaoming')
```

```ts
// 现在 - Vue 3

emit('my-event', 'xiaoming')
```

## 从 `this.$refs` 到 `ref`

在 `Vue2` 中，我们可以通过 `this.$refs` 来访问到 `dom`，而在 `Vue3` 中，我们可以通过 `ref` 来访问到 `dom`。

```vue
<!-- 之前 - Vue 2 -->

<template>
    <div ref="home"></div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$refs.home)
    }
}
```

```vue
<!-- 现在 - Vue 3 -->

<template>
    <div ref="home"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const home = ref(null)

onMounted(() => {
    console.log(home.value)
})
</script>
```

## 从 `this.$router` 到 `useRouter`

在 `Vue2` 中，我们可以通过 `this.$router` 来访问到路由，而在 `Vue3` 中，我们可以通过 `useRouter` 来访问到路由。

```vue
<!-- 之前 - Vue 2 -->

<script>
export default {
    mounted() {
        console.log(this.$route)
        console.log(this.$router)
    }
}
</script>
```

```vue
<!-- 现在 - Vue 3 -->

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue'
const router = useRouter()
const route = useRoute()

console.log(router)
console.log(route)
</script>
```

## 从 `this.$store` 到 `useStore`

在 `Vue2` 中，我们可以通过 `this.$store` 来访问到 `vuex`，而在 `Vue3` 中，我们可以通过 `useStore` 来访问到 `vuex`。

```vue
<!-- 之前 - Vue 2 -->

<script>
export default {
    mounted() {
        console.log(this.$store)
    }
}
</script>
```

```vue
<!-- 现在 - Vue 3 -->

<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
</script>
```

## 从 `this.$nextTick` 到 `nextTick`

在 `Vue2` 中，我们可以通过 `this.$nextTick` 来添加任务，而在 `Vue3` 中，我们可以通过 `nextTick` 来实现。

```vue
<!-- 之前 - Vue 2 -->

<script>
export default {
    mounted() {
        this.$nextTick(() => {
            console.log('nextTick')
        })
    }
}
```

```vue
<!-- 现在 - Vue 3 -->

<script lang="ts" setup>
import { nextTick } from 'vue'

nextTick(() => {
    console.log('nextTick')
})
</script>
```
