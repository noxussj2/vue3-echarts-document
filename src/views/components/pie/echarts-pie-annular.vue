<template>
    <echarts-pie :data="data" height="200px" :color="color" :radius="radius" label />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { EchartsPie } from 'v3-echarts'

const data = ref([
    { name: '衬衫', value: 5 },
    { name: '羊毛衫', value: 20 },
    { name: '雪纺衫', value: 36 },
    { name: '裤子', value: 10 },
    { name: '高跟鞋', value: 10 },
    { name: '袜子', value: 20 }
])

const color = ['#006eff', '#29cc85', '#ffbb00', '#ff584c', '#9741d9', '#1fc0cc']
const radius = ['40%', '60%']
</script>
