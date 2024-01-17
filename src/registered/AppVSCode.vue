<template>
    <div class="app-vscode">
        <Play theme="outline" size="18" fill="#a8b1ff" />
        <a :href="props.href" target="_blank">在 Online Visual Studio Code 中尝试一下</a>
    </div>
</template>

<script lang="ts" setup>
import { Play } from '@icon-park/vue-next'

const props = defineProps({
    href: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.app-vscode {
    margin: 8px 0 16px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    a {
        margin-left: 8px;
        transition-duration: 0.2s;
    }
}

.app-vscode:hover {
    :deep(.i-icon) {
        svg {
            path {
                stroke: #5c73e7;
            }
        }
    }
}
</style>
