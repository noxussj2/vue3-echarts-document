<template>
    <echarts-bary :data="data" height="200px" stack />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsBary } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '2023 销量',
            data: [5, 20, 36, 10, 10, 20]
        },
        {
            name: '2024 销量',
            data: [10, 10, 5, 60, 30, 40]
        }
    ]
})
</script>
