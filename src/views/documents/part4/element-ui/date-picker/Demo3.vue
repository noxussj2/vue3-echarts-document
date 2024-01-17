<template>
    <el-date-picker v-model="value" type="year" placeholder="选择年份" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
