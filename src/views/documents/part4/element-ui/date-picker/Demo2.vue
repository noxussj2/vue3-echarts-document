<template>
    <el-date-picker v-model="value" type="month" placeholder="选择月份" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
