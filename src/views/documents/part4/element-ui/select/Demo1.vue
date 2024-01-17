<template>
    <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = ref([
    {
        value: '1',
        label: '西米露'
    },
    {
        value: '2',
        label: '双皮奶'
    },
    {
        value: '3',
        label: '龟苓膏'
    },
    {
        value: '4',
        label: '烤乳鸽'
    }
])
</script>
