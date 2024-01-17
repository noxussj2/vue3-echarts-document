<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('v10005')
</script>

# <AppCode code="104" /> 模板编译

<ClientOnly><AppRead code="v10005" /></ClientOnly>

Vue 的核心功能之一，模板编译。我们无需关心如何通过数据操作 DOM 进行页面渲染，这些事情 Vue 内部已经帮我们实现了。我们只需要关心数据层面即可。

## 基础使用

在选项 data 中定义了 `message` 变量，只需要在 `template` 中进行调用即可。页面中就会渲染出来 `hello world`。

app.vue

```vue
<template>
    <div>
        {{ message }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'hello world'
        }
    }
}
</script>
```

<AppPlayground href="https://codepen.io/noxussj/pen/eYjLYWv" />

## 模板语法中可使用简单的 JavaScript 表达式

页面渲染 50。

```vue
<template>
    <div>
        {{ num1 + 30 }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: 20
        }
    }
}
</script>
```

<AppPlayground href="https://codepen.io/noxussj/pen/qByMBQM" />

又或者还有其他情况，以下这些例子都是可以的。

```vue
<template>
    <div>
        {{ number + 1 }}

        {{ ok ? 'YES' : 'NO' }}

        {{ message.split('').reverse().join('') }}
    </div>
</template>
```

但是这些是不行的。

```vue
<template>
    <div>
        <!-- 这是语句，不是表达式 -->
        {{ var a = 1 }}

        <!-- 流程控制也不会生效，请使用三元表达式 -->
        {{ if (ok) { return message } }}
    </div>
</template>
```

<AppComment />