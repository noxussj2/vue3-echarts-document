<template>
    <div class="tip custom-block">
        <p class="custom-block-title">{{ props.title }}</p>

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
