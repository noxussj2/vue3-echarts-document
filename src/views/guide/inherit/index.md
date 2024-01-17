<script lang="ts" setup>
import EchartsBarx from './demo/echarts-barx.vue'
import EchartsBarx2 from './demo/echarts-barx2.vue'
</script>

# 继承配置项

:::warning 注意
`props` 参数基本上已经够用了，非必要情况下使用 `opt` 需要慎重。并且代表你已经对 `echarts` 的配置项有了一定的了解，否则会出现一些你无法预知的 `bug`
:::

上几个章节提到了如何渲染一个图表，以及通过参数传递修改图表的一些样式。但是 `props` 传参始终有限，因为不可能把图表的所有配置项都以传参的方式提供，这将会非常的庞大， 只能尽量的丰富一些常用的 `props`参数。

## `opt` 参数

每一个图表组件都会对外提供一个 `opt` 参数，用于当 `props` 不能满足的你需求时，可以通过 `opt` 参数来进行配置。它是一个对象，就是 `echarts` 的完整配置项。

:::tip 演示

例如我现在需要给提示框加上一个单位，可以通过 `opt` 参数来实现。

```vue
<template>
    <echarts-barx :data="data" :opt="opt" height="300px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsBarx } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '销量',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
})

const opt = {
    tooltip: {
        valueFormatter(value: number) {
            return value + ' 件'
        }
    }
}
</script>
```

<echarts-barx />
:::

## 优先级

`v3-ehcarts `组件中有三个部分可以设置图表的配置，分别是全局配置文件 `config`，组件 `props` 参数，组件 `opt` 参数。如有相同的配置项，最终优先级从高到低依次是 `opt` -> `props` -> `config`

:::tip 演示

```vue
<template>
    <!-- 白色 #E1E4E8 -->
    <echarts-barx :data="data" :opt="opt" :color="['#E1E4E8']" height="300px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsBarx } from 'v3-echarts'

// ...

const opt = {
    color: ['#F97583'] // 红色 #F97583
}
</script>
```

<echarts-barx2 />
:::
