<script lang="ts" setup>
import EchartsBarx from './demo/echarts-barx.vue'
</script>

# 快速上手

## 安装

建议 [Node.js](https://nodejs.org/en) 版本 18 或以上。

:::code-group

```sh [npm]
npm install vue3-echarts
```

```sh [yarn]
yarn add vue3-echarts
```

:::

:::tip 提示
`vue3-echarts` 源码采用 `ts` + `esm` 编写，请确保您的项目支持 `esm` 模块并使用 `import` 进行导入它。
:::

## 使用

通过 `import` 导入 `<echarts-barx />` 组件，然后在模板中使用它。

:::code-group

```vue [src/app.vue]
<template>
    <echarts-barx :data="data" height="300px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EChartsBarx } from 'vue3-echarts'

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

:::

:::tip 注意
图表默认高度为 `100%`，建议在实际开发中移除 `height="300px"`

<echarts-barx />

:::

🎉🎉🎉 到此，恭喜你，你的第一个图表已经完成啦！

## 更多

后续章节将会详细介绍 `vue3-echarts` 有哪些可用的图表，以及图表的传入参数。
