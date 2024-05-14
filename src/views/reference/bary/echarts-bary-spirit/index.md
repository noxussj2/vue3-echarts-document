<script lang="ts" setup>
import EchartsBarySpirit from '@/echarts/bary/echarts-bary-spirit.vue'
</script>

# echarts-bary-spirit

:::tip 示例
<echarts-bary-spirit />
:::

```vue
<template>
    <echarts-bary-spirit :data="data" height="200px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsBarySpirit } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子'],
    series: [
        {
            name: '销量',
            data: [5, 20, 36, 10]
        }
    ]
})
</script>
```

## props

| 参数       | 说明     | 类型     | 默认值 |
| ---------- | -------- | -------- | ------ |
| width      | 容器高度 | `string` | `100%` |
| height     | 容器高度 | `string` | `100%` |
| data       | 数据源   | `object` | `-`    |
| symbol     | 图形     | `string` | `-`    |
| symbolSize | 图形尺寸 | `number` | `20`   |
