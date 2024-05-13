<script lang="ts" setup>
import EchartsBarx from '@/echarts/barx/echarts-barx.vue'
</script>

# echarts-barx

:::tip 示例
<echarts-barx />
:::

```vue
<template>
    <echarts-barx :data="data" height="200px" />
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
</script>
```

## props

| 参数             | 说明             | 类型      | 默认值     |
| ---------------- | ---------------- | --------- | ---------- |
| width            | 容器高度         | `string`  | `100%`     |
| height           | 容器高度         | `string`  | `100%`     |
| data             | 数据源           | `object`  | `-`        |
| color            | 柱状图颜色       | `array`   | `-`        |
| bar-width        | 柱状图宽度       | `number`  | `15`       |
| stack            | 是否堆叠         | `boolean` | `false`    |
| radius           | 圆角             | `number`  | `0`        |
| single-color     | 是否独立颜色     | `boolean` | `false`    |
| show-background  | 是否显示背景     | `boolean` | `false`    |
| data-zoom        | 是否显示可视区域 | `boolean` | `false`    |
| data-zoom-number | 可视区域显示数量 | `number`  | `4`        |
| data-zoom-color  | 可视区域工具颜色 | `string`  | `color[0]` |
| carousel         | 是否启用数据轮播 | `boolean` | `false`    |
| interval         | 数据轮播间隔时间 | `number`  | `5`        |
