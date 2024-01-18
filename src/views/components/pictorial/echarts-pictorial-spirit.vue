<template>
    <echarts-pictorial-spirit :data="data" height="200px" :symbol="symbol" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsPictorialSpirit } from 'v3-echarts'
import icon from './icon-spirit.png'

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
