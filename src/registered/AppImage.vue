<template>
    <p class="app-image" :style="{ background: props.background }">
        <el-image :src="props.src" :preview-src-list="[props.src]" :style="{ width: props.width, height: props.height }" v-if="show" />
    </p>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: 'auto'
    },
    height: {
        type: String,
        default: 'auto'
    },
    background: {
        type: String,
        default: ''
    }
})

const show = ref(false)

onMounted(() => {
    show.value = true
})
</script>

<style lang="scss">
.app-image {
    border-radius: 8px;

    .el-image {
        max-width: 100%;
        cursor: pointer;
        vertical-align: middle;
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 8px;
    }
}
</style>
