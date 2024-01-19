<script lang="ts" setup>
import EchartsPictorialBattery from '@/echarts/pictorial/echarts-pictorial-battery.vue'
</script>

# echarts-pictorial-battery

:::tip 示例
<echarts-pictorial-battery />
:::

```vue
<template>
    <echarts-pictorial-battery :data="data" height="200px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsPictorialBattery } from 'v3-echarts'

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

| 参数      | 说明       | 类型       | 默认值 |
| --------- | ---------- | ---------- | ------ |
| height    | 容器高度   | `string`   | `100%` |
| data      | 数据源     | `object`   | `-`    |
| color     | 颜色       | `string[]` | `[]`   |
| bar-wdith | 柱状图宽度 | `number`   | `10`   |
