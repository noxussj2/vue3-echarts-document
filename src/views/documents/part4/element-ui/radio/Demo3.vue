<template>
    <el-radio-group v-model="radio">
        <el-radio label="1">选项 A</el-radio>
        <el-radio label="2">选项 B</el-radio>
    </el-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('1')
</script>
