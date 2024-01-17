<script setup>
import Image1 from "./provide-and-inject/_image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10015')
</script>

# <AppCode code="114" /> 跨级通信 Provide & Inject

<ClientOnly><AppRead code="v10015" /></ClientOnly>

Provide、inject 是一对选项。这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深。依赖指的就是数据，可以将一份数据传给后代组件。后代组件通过 inject 可以进行接收。这个其实和 props 是很相似的。接下来进行实践一下。

## 基础案例

Component1.vue

```vue
<template>
    <div class="a1">
        <Component2></Component2>
    </div>
</template>

<script>
import Component2 from './Component2.vue'

export default {
    components: { Component2 },
    provide: {
        age: 18
    }
}
</script>
```

Component2.vue

```vue
<template>
    <div class="component2">
        {{ age }}
        <Component3></Component3>
    </div>
</template>

<script>
import Component3 from './Component3.vue'

export default {
    components: { Component3 },
    inject: ['age']
}
</script>
```

Component3.vue

```vue
<template>
    <div class="component3">
        {{ age }}
    </div>
</template>

<script>
export default {
    inject: ['age']
}
</script>
```

调试结果

<AppImage :src="Image1" />

可以看到 Component1 组件在选项 provide 中定义了 age 属性。其后代组件 Component2、Component3 都可以通过 inject 进行接收。其实这个 API 使用的还是比较少的，一般会有其他更好的方案进行解决。并且也不支持反向传递数据。

<AppComment />