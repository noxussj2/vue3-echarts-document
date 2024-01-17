<template>
    <el-checkbox v-model="checked">选项 A</el-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(true)
</script>
