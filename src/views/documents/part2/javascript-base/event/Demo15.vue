<template>
    <div class="demo">
        <el-button @click="count++">Submit</el-button>

        <div>{{ count }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
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

    :deep(.el-button) {
        margin-bottom: 10px;
        width: 100px;
    }
}
</style>
