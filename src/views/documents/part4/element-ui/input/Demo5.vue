<template>
    <el-input type="text" v-model="input" placeholder="请输入内容" maxlength="10" show-word-limit />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
</script>

<style lang="scss" scoped>
.el-input {
    width: 200px;
}
</style>
