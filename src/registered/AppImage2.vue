<template>
    <p class="app-image2">
        <el-image :src="props.src" :preview-src-list="[props.src]" :style="{ width: props.width, height: props.height }" v-if="show" />
    </p>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElImage } from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-image-viewer.css'

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
    }
})

const show = ref(false)

onMounted(() => {
    show.value = true
})
</script>

<style lang="scss">
.app-image2 {
    .el-image {
        cursor: pointer;
        vertical-align: middle;
    }
}
</style>
