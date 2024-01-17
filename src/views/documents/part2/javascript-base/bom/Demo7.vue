<template>
    <div class="demo">
        <el-button @click="fn">1. 设置缓存</el-button>
        <el-button @click="fn2">2. 读取缓存</el-button>
        <el-button @click="fn3">3. 删除缓存</el-button>
        <div>读取缓存结果：{{ local.name ? local : '空' }}</div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const local: any = reactive({ name: '' })

const fn = () => {
    typeof window !== 'undefined' && window.localStorage.setItem('name', 'xiaoming')
}

const fn2 = () => {
    local.name = typeof window !== 'undefined' && window.localStorage.getItem('name')
}

const fn3 = () => {
    typeof window !== 'undefined' && window.localStorage.removeItem('name')

    local.name = ''
}
</script>

<style lang="scss" scoped>
.demo {
    user-select: none;
    border-radius: 4px;

    button {
        margin-bottom: 10px;
    }

    button + button {
        margin-left: 10px;
    }
}
</style>
