<script lang="ts" setup>
import EchartsPictorialSpirit from '@/echarts/pictorial/echarts-pictorial-spirit.vue'
</script>

# echarts-pictorial-spirit

:::tip 示例
<echarts-pictorial-spirit />
:::

```vue
<template>
    <echarts-pictorial-spirit :data="data" height="200px" :symbol="symbol" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsPictorialSpirit } from 'v3-echarts'
import icon from './icon-spirit.png' // 自己打开调试控制台取一下

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子'],
    series: [
        {
            name: '销量',
            data: [5, 20, 36, 10]
        }
    ]
})

const symbol = 'image://' + icon
</script>
```

## props

| 参数       | 说明     | 类型     | 默认值 |
| ---------- | -------- | -------- | ------ |
| height     | 容器高度 | `string` | `100%` |
| data       | 数据源   | `object` | `-`    |
| symbol     | 图形     | `string` | `-`    |
| symbolSize | 图形尺寸 | `number` | `20`   |
