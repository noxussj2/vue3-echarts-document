<template>
    <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="second">角色管理</el-tab-pane>
        <el-tab-pane label="菜单管理" name="third">菜单管理</el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')
</script>
