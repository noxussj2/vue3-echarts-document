<template>
    <div class="demo" @click="click">{{ count }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

let timer = 0

function click() {
    clearTimeout(timer)

    timer = setTimeout(function () {
        count.value++
    }, 1000)
}
</script>

<style lang="scss" scoped>
.demo {
    padding: 10px;
    user-select: none;
    cursor: pointer;
    color: #fff;
    background-color: #424243;
    border-radius: 4px;
}
</style>
