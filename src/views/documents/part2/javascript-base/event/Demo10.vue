<template>
    <div class="demo" @mousewheel="count++">
        <span>{{ count }}</span>

        <div class="box"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style lang="scss" scoped>
.demo {
    position: relative;
    padding: 10px;
    height: 84px;
    user-select: none;
    cursor: pointer;
    color: #fff;
    background-color: #424243;
    border-radius: 4px;
    overflow-y: overlay;

    span {
        position: sticky;
        left: 0;
        top: 0;
    }

    .box {
        height: 200px;
    }
}
</style>
