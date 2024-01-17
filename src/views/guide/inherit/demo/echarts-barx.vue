<template>
    <echarts-barx :data="data" :opt="opt" height="300px" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsBarx } from 'v3-echarts'

const data = ref({
    axis: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    series: [
        {
            name: '销量',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
})

const opt = {
    tooltip: {
        valueFormatter(value: number) {
            return value + ' 件'
        }
    }
}
</script>