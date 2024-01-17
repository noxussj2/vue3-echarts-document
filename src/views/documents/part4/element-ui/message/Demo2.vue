<template>
    <el-button :plain="true" @click="open1">成功</el-button>
    <el-button :plain="true" @click="open2">警告</el-button>
    <el-button :plain="true" @click="open3">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const open1 = () => {
    ElMessage({ message: '恭喜你，这是一条成功消息', type: 'success' })
}

const open2 = () => {
    ElMessage({ message: '警告哦，这是一条警告消息', type: 'warning' })
}

const open3 = () => {
    ElMessage('这是一条消息提示')
}

const open4 = () => {
    ElMessage.error('错了哦，这是一条错误消息')
}
</script>
