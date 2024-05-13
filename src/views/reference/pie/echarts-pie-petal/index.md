<script lang="ts" setup>
import EchartsPiePetal from '@/echarts/pie/echarts-pie-petal.vue'
</script>

# echarts-pie-petal

:::tip 示例
<echarts-pie-petal />
:::

```vue
<template>
    <echarts-pie :data="data" height="200px" :color="color" label />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsPie } from 'v3-echarts'

const data = ref([
    { name: '衬衫', value: 5 },
    { name: '羊毛衫', value: 20 },
    { name: '雪纺衫', value: 36 },
    { name: '裤子', value: 10 },
    { name: '高跟鞋', value: 10 },
    { name: '袜子', value: 20 }
])

const color = ['#006eff', '#29cc85', '#ffbb00', '#ff584c', '#9741d9', '#1fc0cc']
</script>
```

## props

| 参数     | 说明             | 类型       | 默认值           |
| -------- | ---------------- | ---------- | ---------------- |
| width    | 容器宽度         | `string`   | `100%`           |
| height   | 容器高度         | `string`   | `100%`           |
| data     | 数据源           | `object`   | `-`              |
| color    | 饼图颜色         | `string[]` | `[]`             |
| radius   | 饼图大小         | `string[]` | `['0%', '70%']`  |
| center   | 饼图位置         | `string[]` | `['50%', '50%']` |
| label    | 是否显示标签     | `boolean`  | `false`          |
| legend   | 是否显示图例     | `boolean`  | `false`          |
| carousel | 是否启用数据轮播 | `carousel` | `false`          |
| interval | 数据轮播间隔时间 | `number`   | `5`              |
