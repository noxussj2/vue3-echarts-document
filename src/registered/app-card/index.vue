<template>
    <div class="tip custom-block">
        <p class="custom-block-title"><slot name="title" /></p>

        <slot />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
:deep(a){
    color: var(--vp-custom-block-tip-text) !important;
}
</style>
