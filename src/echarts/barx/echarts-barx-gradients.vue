<template>
    <echarts-barx :data="data" height="200px" :color="color" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsBarx } from 'v3-echarts'

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

const color = [
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#B392F0'
            },
            {
                offset: 1,
                color: '#E1E4E8'
            }
        ]
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#85E89D'
            },
            {
                offset: 1,
                color: '#E1E4E8'
            }
        ]
    }
]
</script>
