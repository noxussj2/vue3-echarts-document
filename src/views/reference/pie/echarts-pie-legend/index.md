<script lang="ts" setup>
import EchartsPieLegend from '@/echarts/pie/echarts-pie-legend.vue'
</script>

# echarts-pie-legend

:::tip 示例
<echarts-pie-legend />
:::

```vue
<template>
    <echarts-pie :data="data" height="200px" :color="color" :center="center" legend />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsPie } from 'v3-echarts'

const data = ref([
    { name: '衬衫', value: 5, unit: '件' },
    { name: '羊毛衫', value: 20, unit: '件' },
    { name: '雪纺衫', value: 36, unit: '件' },
    { name: '裤子', value: 10, unit: '件' },
    { name: '高跟鞋', value: 10, unit: '件' },
    { name: '袜子', value: 20, unit: '件' }
])

const color = ['#006eff', '#29cc85', '#ffbb00', '#ff584c', '#9741d9', '#1fc0cc']

const center = ['30%', '50%']
</script>
```

## props

| 参数   | 说明         | 类型       | 默认值           |
| ------ | ------------ | ---------- | ---------------- |
| height | 容器高度     | `string`   | `100%`           |
| data   | 数据源       | `object`   | `-`              |
| color  | 饼图颜色     | `string[]` | `[]`             |
| radius | 饼图大小     | `string[]` | `['0%', '70%']`  |
| center | 饼图位置     | `string[]` | `['50%', '50%']` |
| label  | 是否显示标签 | `boolean`  | `false`          |
| legend | 是否显示图例 | `boolean`  | `false`          |
