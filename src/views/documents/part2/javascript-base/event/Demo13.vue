<template>
    <div class="demo">
        <el-input v-model="value" @change="count++" placeholder="请输入内容" />

        <div>{{ count }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const value = ref('')
</script>

<style lang="scss" scoped>
.demo {
    position: relative;
    padding: 10px;
    height: 84px;
    user-select: none;
    color: #fff;
    background-color: #424243;
    border-radius: 4px;

    :deep(.el-input) {
        margin-bottom: 10px;
        width: 200px;
    }
}
</style>
