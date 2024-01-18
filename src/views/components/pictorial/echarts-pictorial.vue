<template>
    <echarts-pictorial :data="data" height="200px" :symbol="symbol" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsPictorial } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '销量',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
})

const symbol = 'path://d="M34.2,89.2c-0.7-16-3.4-69.2-3.9-78.8c1.7,0,3-1.4,3-3.1c0-1.7-1.4-3.1-3.1-3.1s-3.1,1.4-3.1,3.1c0,1.7,1.4,3,3,3.1c-0.4,9.6-2.5,63.2-3.9,78.3c-1.6,16.2-4.2,53.2-22.5,95.7h54C57.7,184.5,36.7,143.2,34.2,89.2z"'
</script>
