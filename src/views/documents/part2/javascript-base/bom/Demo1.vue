<template>
    <div class="demo">
        <el-button @click="fn">点我体验效果</el-button>
    </div>
</template>

<script lang="ts" setup>
const fn = () => {
    alert(1)
}
</script>

<style lang="scss" scoped>
.demo {
    user-select: none;
    border-radius: 4px;
}
</style>
