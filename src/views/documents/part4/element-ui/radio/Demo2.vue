<template>
    <el-radio disabled v-model="radio" label="1"> 选项 A </el-radio>
    <el-radio disabled v-model="radio" label="2"> 选项 B </el-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('1')
</script>
