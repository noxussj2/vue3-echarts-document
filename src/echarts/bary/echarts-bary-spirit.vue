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
