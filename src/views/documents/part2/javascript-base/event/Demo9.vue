<template>
    <div class="demo" @mouseover="count++">
        <div class="box">{{ count }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style lang="scss" scoped>
.demo {
    padding: 20px;
    user-select: none;
    cursor: pointer;
    background-color: #424243;
    border-radius: 4px;

    .box {
        padding: 10px;
        width: 100px;
        background-color: #5cd8a2;
        border-radius: 4px;
    }
}
</style>
