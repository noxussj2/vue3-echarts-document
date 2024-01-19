<template>
    <div class="base-image">
        <img alt="" :src="props.src" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    src: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.base-image {
    width: 60px;
    height: 60px;
    box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.25);
    display: inline-block;
}

.base-image {
    margin-right: 24px;
    margin-bottom: 24px;
}
</style>
