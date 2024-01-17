<template>
    <div class="demo">
        <el-button @click="fn">点我设置定时器 {{ time > 0 ? time + 's' : '' }}</el-button>
        <div>{{ count }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)

const time = ref(0)

const fn = () => {
    time.value = 3

    const timer = setInterval(() => {
        time.value--

        if (time.value === 0) {
            count.value++

            clearTimeout(timer)
        }
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
