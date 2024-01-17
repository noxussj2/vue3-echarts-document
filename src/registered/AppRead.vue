<template>
    <div class="app-read">
        <section>
            <preview-open theme="outline" size="24" fill="rgba(255, 255, 245, 0.86)" /> <span>阅读量：{{ read }} 次</span>
        </section>
        <section>
            <base-time theme="outline" size="18" fill="rgba(255, 255, 245, 0.86)" /> <span>阅读时长：{{ duration }} 分钟</span>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { PreviewOpen, Time as BaseTime , FileWord } from '@icon-park/vue-next'
import { ref } from 'vue'
import { IArticle } from '@/api/analysis'

const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    count: {
        type: Number,
        default: 0
    }
})

const read = ref(0)
const duration = ref(0)

IArticle({ url: location.pathname }).then((res: any) => {
    read.value = res.read
    duration.value = Math.round(res.duration / 60)
})
</script>

<style lang="scss" scoped>
.app-read {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--vp-c-text-2);

    :deep(svg) {
        path {
            stroke: var(--vp-c-text-2);
        }
    }

    section {
        height: 30px;
        display: flex;
        align-items: center;

        span + span {
            margin-left: 4px;
        }
    }

    section + section {
        margin-left: 0;
    }
}

@media (min-width: 650px) {
    .app-read {
        flex-direction: row;

        section + section {
            margin-left: 24px;
        }
    }
}
</style>
