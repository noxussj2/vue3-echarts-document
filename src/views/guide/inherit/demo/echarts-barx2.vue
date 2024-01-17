<template>
    <!-- 白色 #E1E4E8 -->
    <echarts-barx :data="data" :opt="opt" :color="['#E1E4E8']" height="300px" />
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
    color: ['#F97583'] // 红色 #F97583
}
</script>
