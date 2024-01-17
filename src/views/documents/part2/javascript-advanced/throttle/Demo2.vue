<template>
    <div class="demo" @click="click">{{ count }}</div>

    <el-button type="primary" :disabled="isLock" @click="click">提交</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

let isLock = ref(false)

function click() {
    if (isLock.value) return

    isLock.value = true

    setTimeout(function () {
        count.value++
        isLock.value = false
    }, 1000)
}
</script>

<style lang="scss" scoped>
.demo {
    margin-bottom: 20px;
    padding: 10px;
    user-select: none;
    cursor: pointer;
    color: #fff;
    background-color: #424243;
    border-radius: 4px;
}
</style>
