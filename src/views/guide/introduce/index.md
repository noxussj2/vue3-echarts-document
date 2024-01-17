# 介绍

::: tip 提示
本组件库是基于 [Apache ECharts](https://echarts.apache.org/zh/index.html) 封装的 Vue3 组件库，提供了一系列常用的图表组件，可以帮助你轻松的在 Vue3 项目中使用 ECharts。源码采用 `ts` + `vue3` + `echarts` 编写。
:::

如果你是一名小白，本组件库可以快速帮你过渡 Echarts 技术，前期你无需掌握 Echarts 技术即可实现 Echarts 图表，后期当你接触图表多了以后，可以逐步学习 Echarts 所有配置项，从而实现个性化更复杂的图表。

如果你是一名有经验的前端，使用本组件库可以让你更加专注图表的复用性、统一性，实现易于维护的代码，提高开发效率。

## 为什么要这样设计？

这里可能会有小伙伴提问，为什么不直接使用 Echarts 进行开发。使用原生和封装的区别在于，使用原生开发可以个性化，更加灵活实现复杂的图表，但是效率会相对降低。使用封装的技术会提高复用率、开发效率，但是局限性会高，各有利弊。

所以在选择一门技术实现的时候，可以考虑你的需求更偏向于哪种。

### 降低学习成本

无需马上掌握大量的 Echarts 配置项，你只需要在组件库中挑选一款图表，然后按照对应的数据格式传入数据即可实现图表的展示。

```vue
<template>
    <!-- 纵向柱状图 -->
    <echarts-barx :data="data" />

    <!-- 横向柱状图 -->
    <echarts-bary :data="data" />

    <!-- 饼图 -->
    <echarts-pie :data="data" />

    <!-- 折线图 -->
    <echarts-line :data="data" />
</template>
```

### 统一风格

实现了全局的默认配置，例如主题色、图例标签颜色、x 轴标签颜色、y 轴标签颜色、提示框风格、图例风格、坐标轴风格、常用字体大小等。避免本来是相同风格的图表，却因为配置项疏漏导致风格不统一。

```ts
let $color = {
    /**
     * 主题色-深色模式
     */
    theme: ['#B392F0', '#85E89D', '#9ECBFF', '#F97583', '#E1E4E8'],

    /**
     * 图例标签颜色
     */
    legendLabel: 'rgba(255, 255, 255, 1)',

    /**
     * X轴标签颜色
     */
    xAxisLabel: 'rgba(255, 255, 255, 1)'

    // ...
}

let $fontSize = {
    /**
     * x轴刻度标签
     */
    xAxisLabel: 12,

    /**
     * x轴名称
     */
    xAxisName: 12,

    /**
     * y轴刻度标签
     */
    yAxisLabel: 12,

    /**
     * y轴名称
     */
    yAxisName: 12

    //  ...
}

// ...
```

### 避免代码冗余

由于提供了全局的默认配置，你无需在每个图表中都去重复配置。