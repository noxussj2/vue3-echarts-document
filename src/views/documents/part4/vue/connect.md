<script lang="ts" setup>
import Image1 from "./connect/_image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10008')
</script>

# <AppCode code="107" /> 组件 & 组件通讯

<ClientOnly><AppRead code="v10008" /></ClientOnly>

:::warning 注意
阅读本文章之前，你应该先要了解 ESM 模块化的 import export，如需要请查看 [ESM 模块化](/documents/part2/es6/features.html#esm-模块化)。
:::

上一篇有介绍到什么是组件化，就是把一个页面拆分成若干个小模块，然后重新组成一个页面。其中的每个小模块就是对应一个 `.vue` 文件。在组件的使用上我们还需要注意组件的引入和调用的命名方式，以及组件之间的数据是如何传递的。

## 组件注册

组件在使用之前必须要先注册。注册后才能够使用该组件。

```vue
<template>
    <div class="hello">
        <!-- 调用组件 -->
        <MyChildren></MyChildren>

        <!-- 或者简化写法 -->
        <MyChildren />
    </div>
</template>

<script>
import MyChildren from './MyChildren.vue' // 引入组件

export default {
    components: { MyChildren } // 注册组件
}
</script>
```

## 组件命名

组件的命名一般有两种，上面的例子中就是属于第一种，PascalCase 大写驼峰的形式。第二种是 kebab-case 小写横杠形式。

```vue
<template>
    <div class="hello">
        <!-- 调用组件 -->
        <my-children></my-children>

        <!-- 或者简化写法 -->
        <my-children />
    </div>
</template>

<script>
import MyChildren from './my-children.vue' // 引入组件

export default {
    components: { MyChildren } // 或者简化写法
}
</script>
```

当使用 `kebab-case` 注册一个组件时，你只能使用 `kebab-case` 形式进行调用组件，例如 `<my-component-name />`

当使用 `PascalCase` 注册一个组件时，你可以使用 `PascalCase` 或者 `kebab-case` 形式进行调用组件。例如 `<my-component-name />` 或者 `<MyComponentName />`

## 组件通讯

组件通讯分为父子组件通讯、兄弟组件通讯、祖孙组件通讯。本章重点介绍父子组件通讯。
以上面的例子继续讲解。

### Props

props 是用来接收父组件传递过来的静态/动态数据。

Home.vue

```vue
<template>
    <div class="hello">
        <MyChildren name="xiaoming" :age="age" />
    </div>
</template>

<script>
import MyChildren from 'MyChildren.vue'

export default {
    components: { MyChildren },
    data() {
        return {
            age: 18
        }
    }
}
</script>
```

MyChildren.vue

```vue
<template>
    <div class="my-children">
        {{ name }}
        {{ age }}
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        age: {
            type: Number,
            default: 0
        }
    }
}
</script>
```

通过上面的例子可以看到父组件 `Home.vue` 向子组件 `MyChildren.vue` 传递了 `name` 和 `age` 属性。子组件如果想要使用该属性，就必须在 props 选项中进行接收。

Props 接收的语法有几种，分别是数组、对象的形式。推荐使用对象形式，并且设置默认值。

<br />

**Props 语法**

使用字符串数组的形式。

```vue
<script>
export default {
    props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
}
</script>
```

但是，通常都会希望每个 prop 都有指定的值类型。这时，你可以以对象形式列出 prop，这些 property 的名称和值分别是 prop 各自的名称和类型。

```vue
<script>
export default {
    props: {
        title: String,
        likes: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise // or any other constructor
    }
}
</script>
```

如果设置了每个 prop 的类型，但是你没有按照规定的类型传递数据进来，Vue 会在浏览器的控制台中发出警告。

<br />

**单向数据流**

单向数据流指的是数据的流向是从父组件流向子组件，从上往下流。父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

一个尝试修改 props 值的错误示范

```vue
<template>
    <div class="base-header">我修改了 props 的值 {{ age }}</div>
</template>

<script>
export default {
    props: {
        age: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        this.age = 100
    }
}
</script>
```

<AppImage :src="Image1" />

单向数据流其实很好理解的，当一个父组件里面有 n 个子组件，并且分别给 n 个子组件传递了同一个 age 属性，在每个子组件中都进行修改了 age。那么展示的时候以谁改的为准呢？因为父组件和 n 个子组件是共享了 age ，所以一个地方改了 age 那么大家展示的时候都一起被改了。

在举例一个糟糕的情况，一个父组件传递了 age 属性给 n 个子组件，n 个子组件又把这个 age 传递给了它们的子组件，以此类推 n 层深度。当你发现 age 展示的数值不正确的时候，你能在这 n _ n _ n \* n 个组件中找到是谁改了吗？

如果使用单向数据流，当你遇到不可描述的错误的时候，你就会很容易排查问题。假设你发现 age 显示不正确。那么你只需要在最顶级的父组件中去排查即可，而不需要每个子组件里面都去排查。

<br />

### 自定义事件 $emit

在父组件中可以通过` v-on` 或者 `@` 在子组件身上进行监听事件，子组件通过调用 $emit 可以触发父组件监听的事件，同时还能够传递参数。

:::warning 注意
监听的事件名必须和触发的事件名保持一致。
:::

Home.vue

```vue
<template>
    <div class="home">
        <MyChildren name="xiaoming" :age="age" @changeAge="handleChange" />
    </div>
</template>

<script>
import MyChildren from './MyChildren.vue'

export default {
    components: { MyChildren },
    data() {
        return {
            age: 18
        }
    },
    methods: {
        handleChange(val) {
            this.age = val
        }
    }
}
</script>
```

MyChildren.vue

```vue
<template>
    <div class="my-children">
        {{ age }}

        <button @click="handleClick">点我修改父组件的 age</button>
    </div>
</template>

<script>
export default {
    props: {
        age: {
            type: Number,
            default: 0
        }
    },
    methods: {
        handleClick() {
            this.$emit('changeAge', this.age + 1)
        }
    }
}
</script>
```

<AppComment />