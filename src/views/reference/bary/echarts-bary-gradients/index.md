<script lang="ts" setup>
import EchartsBaryGradient from '@/echarts/bary/echarts-bary-gradient.vue'
</script>

# echarts-bary-gradient

:::tip 示例
<echarts-bary-gradient />
:::

```vue
<template>
    <echarts-bary :data="data" height="200px" :color="color" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsBary } from 'v3-echarts'

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

const color = [
    {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#B392F0'
            },
            {
                offset: 1,
                color: '#E1E4E8'
            }
        ]
    },
    {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#85E89D'
            },
            {
                offset: 1,
                color: '#E1E4E8'
            }
        ]
    }
]
</script>
```

## props

| 参数            | 说明         | 类型      | 默认值  |
| --------------- | ------------ | --------- | ------- |
| width           | 容器高度     | `string`  | `100%`  |
| height          | 容器高度     | `string`  | `100%`  |
| data            | 数据源       | `object`  | `-`     |
| color           | 柱状图颜色   | `array`   | `-`     |
| bar-width       | 柱状图宽度   | `number`  | `8`     |
| stack           | 是否堆叠     | `boolean` | `false` |
| radius          | 圆角         | `number`  | `0`     |
| single-color    | 是否独立颜色 | `boolean` | `false` |
| show-background | 是否显示背景 | `boolean` | `false` |
| label           | 是否显示数值 | `boolean` | `false` |
