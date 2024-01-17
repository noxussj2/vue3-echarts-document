<template>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const open = () => {
    ElMessage('这是一条消息提示')
}
</script>
