<template>
    <el-checkbox-group v-model="checked">
        <el-checkbox label="选项 A"></el-checkbox>
        <el-checkbox label="选项 B"></el-checkbox>
    </el-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(['选项 A'])
</script>
