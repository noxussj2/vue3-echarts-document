<template>
    <el-button @click="dialogVisible = true"> 点击打开 Dialog </el-button>

    <el-dialog class="dialog1" v-model="dialogVisible" title="提示" width="30%">
        <span>这是一段信息</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style lang="scss">
.dialog1 {
    .el-dialog__header {
        display: block;
    }

    .el-dialog__body {
        justify-content: space-between;
    }
}
</style>
