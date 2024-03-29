<script lang="ts" setup>
import EchartsBarx from './demo/echarts-barx.vue'
import EchartsBarx2 from './demo/echarts-barx2.vue'
</script>

# 组件传参 props

当我们渲染了一个图表之后，并不是所有的图表都能够满足我们的需求，有时候我们需要对图表进行一些优化，比如修改图表的颜色、修改图表的大小等等。

这边继续以纵向柱状图 `<echarts-barx />` 为例。

## 组件 `<echarts-barx />` 支持的参数

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

## 修改柱状图颜色

修改柱状图颜色，只需要传入 `color` 参数即可。

:::tip 演示

```vue
<template>
    <echarts-barx :color="['#85E89D']" :data="data" height="300px" />
</template>
```

<echarts-barx />
:::

## 修改柱状图宽度

修改柱状图宽度，只需要传入 `barWidth` 参数即可。

:::tip 演示

```vue
<template>
    <echarts-barx :bar-width="30" :data="data" height="300px" />
</template>
```

<echarts-barx2 />
:::
