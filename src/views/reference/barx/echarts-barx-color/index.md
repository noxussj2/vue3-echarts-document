<script lang="ts" setup>
import EchartsBarxColor from '@/echarts/barx/echarts-barx-color.vue'
</script>

# echarts-barx-color

:::tip 示例
<echarts-barx-color />
:::

```vue
<template>
    <echarts-barx :data="data" height="200px" single-color :opt="opt" />
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
    legend: {
        show: false
    }
}
</script>
```

## props

| 参数            | 说明         | 类型       | 默认值  |
| --------------- | ------------ | ---------- | ------- |
| height          | 容器高度     | `string`   | `100%`  |
| data            | 数据源       | `object`   | `-`     |
| color           | 柱状图颜色   | `array`    | `-`     |
| bar-width       | 柱状图宽度   | `number`   | `15`    |
| stack           | 是否堆叠     | `boolean`  | `false` |
| radius          | 圆角         | `number`   | `0`     |
| single-color    | 是否独立颜色 | `boolean`  | `false` |
| gradient-color  | 渐变颜色     | `string[]` | `[]`    |
| show-background | 是否显示背景 | `boolean`  | `false` |
