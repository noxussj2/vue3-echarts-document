<template>
    <echarts-line :data="data" height="200px" smooth :gradient-color="gradientColor" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsLine } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '销量',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
})

const gradientColor = ['rgba(179, 146, 240, 1)', 'rgba(179, 146, 240, 0)']
</script>
