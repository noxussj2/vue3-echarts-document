<template>
    <div class="demo">
        <el-button @click="fn">点我开始计时</el-button>
        <div>{{ count }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

let timer = 0

const fn = () => {
    clearInterval(timer)

    timer = setInterval(() => {
        count.value++
    }, 1000)
}
</script>

<style lang="scss" scoped>
.demo {
    user-select: none;
    border-radius: 4px;

    button {
        margin-bottom: 10px;
    }
}
</style>
