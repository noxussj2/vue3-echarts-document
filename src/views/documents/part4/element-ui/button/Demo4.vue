<template>
    <el-button>默认按钮</el-button>
    <el-button plain>朴素按钮</el-button>
    <el-button round>圆角按钮</el-button>
    <el-button :icon="Search" circle></el-button>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>
