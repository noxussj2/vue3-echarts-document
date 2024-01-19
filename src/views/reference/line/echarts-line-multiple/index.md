<script lang="ts" setup>
import EchartsLineMultiple from '@/echarts/line/echarts-line-multiple.vue'
</script>

# echarts-line-multiple

:::tip 示例
<echarts-line-multiple />
:::

```vue
<template>
    <echarts-line :data="data" height="200px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsLine } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '2023 销量',
            data: [5, 20, 36, 10, 10, 20]
        },
        {
            name: '2024 销量',
            data: [10, 10, 5, 60, 30, 40]
        }
    ]
})
</script>
```

## props

| 参数           | 说明     | 类型       | 默认值  |
| -------------- | -------- | ---------- | ------- |
| height         | 容器高度 | `string`   | `100%`  |
| data           | 数据源   | `object`   | `-`     |
| color          | 折线颜色 | `array`    | `-`     |
| smooth         | 是否曲线 | `boolean`  | `false` |
| gradient-color | 渐变颜色 | `string[]` | `[]`    |
