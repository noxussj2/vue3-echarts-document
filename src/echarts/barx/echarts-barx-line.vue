<template>
    <echarts-barx-line :data="data" height="200px" smooth area-gradient />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsBarxLine } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '2023 销量',
            data: [500, 200, 360, 100, 100, 200]
        },
        {
            type: 'line',
            name: '对比上年趋势',
            data: [10, 10, 5, 60, 30, 40]
        }
    ]
})
</script>
