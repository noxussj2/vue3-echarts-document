# 透传 Attributes

"透传 Attributes" 是指父组件传递给子组件的属性，但是子组件没有通过 `props` `emits` 等方式去接收，最终属性会被渲染到子组件的根元素上。

## 单个根节点 Attributes 继承

例如父组件 `index.vue` 向子组件 `MyButton.vue` 传参了 `id` `class` 参数，但是子组件只接收了 `class` 参数。

:::code-group

```vue [index.vue]
<template>
    <MyButton id="child" class="child" />
</template>

<script lang="ts" setup>
import MyButton from './MyButton.vue'
</script>
```

```vue [MyButton.vue]
<template>
    <button>MyButton</button>
</template>

<script>
import { PropType } from 'vue'

const props = defineProps({
    class: {
        type: String,
        default: ''
    }
})
</script>
```

:::

所以 `id` 就属于透传 Attributes，最终被渲染到 `button` 元素上。

```html
<button id="child">MyButton</button>
```

## 多个根节点 Attributes 继承

继续使用上面的例子，如果 `MyButton.vue` 的模板中有多个根节点，就需要通过 `$attrs` 来手动继承 Attributes。否则将会抛出一个警告。

:::code-group

```vue [MyButton.vue]
<template>
    <button>MyButton</button>
    <button v-bind="$attrs">MyButton2</button>
</template>
```

:::
