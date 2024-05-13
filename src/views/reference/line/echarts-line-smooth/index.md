<script lang="ts" setup>
import EchartsLineSmooth from '@/echarts/line/echarts-line-smooth.vue'
</script>

# echarts-line-smooth

:::tip 示例
<echarts-line-smooth />
:::

```vue
<template>
    <echarts-line :data="data" height="200px" smooth />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsLine } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '销量',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
})
</script>
```

## props

| 参数         | 说明             | 类型      | 默认值  |
| ------------ | ---------------- | --------- | ------- |
| width        | 容器高度         | `string`  | `100%`  |
| height       | 容器高度         | `string`  | `100%`  |
| data         | 数据源           | `object`  | `-`     |
| color        | 折线颜色         | `array`   | `-`     |
| smooth       | 是否曲线         | `boolean` | `false` |
| areaGradient | 是否开启区域渐变 | `boolean` | `false` |
