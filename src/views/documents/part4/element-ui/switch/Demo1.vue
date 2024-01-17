<template>
    <div class="demo">
        <el-switch v-model="value" active-color="#10b981" inactive-color="#424243"> </el-switch>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
</script>
