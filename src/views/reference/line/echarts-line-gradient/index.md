<script lang="ts" setup>
import EchartsLineGradient from '@/echarts/line/echarts-line-gradient.vue'
</script>

# echarts-line-gradient

:::tip 示例
<echarts-line-gradient />
:::

```vue
<template>
    <echarts-line :data="data" height="200px" smooth :gradient-color="gradientColor" />
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

const gradientColor = ['rgba(179, 146, 240, 1)', 'rgba(179, 146, 240, 0)']
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
