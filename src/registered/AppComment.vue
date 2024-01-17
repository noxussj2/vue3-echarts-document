<template>
    <div id="waline"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { init } from './waline.mjs'
import './waline.css'

const serverURL = 'https://vercel.noxussj.top'
const path = typeof window !== 'undefined' && window.location.pathname + '/v3-echarts/'

onMounted(() => {
    init({
        el: '#waline',
        serverURL: serverURL,
        reaction: true,
        path
    })
})
</script>

<style lang="scss">
html.dark {
    --waline-white: #000;
    --waline-light-grey: #666;
    --waline-dark-grey: #999;
    --waline-color: #888;
    --waline-bgcolor: #1e1e1e;
    --waline-bgcolor-light: #272727;
    --waline-bgcolor-hover: #444;
    --waline-border-color: #333;
    --waline-disable-bgcolor: #444;
    --waline-disable-color: #272727;
    --waline-bq-color: #272727;
    --waline-info-bgcolor: #272727;
    --waline-info-color: #666;
}
</style>

<style lang="scss" scoped>
:deep(.wl-badge) {
    border: 0;
}
</style>
