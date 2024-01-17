<template>
    <div class="base-count">
        <div class="count__container">
            <section>
                本站访客数 <span>{{ data.visitor }}</span> 人
            </section>
            <section>
                累积阅读量 <span>{{ data.read }}</span> 次
            </section>
            <section>
                累积阅读时长 <span>{{ data.duration }}</span> 分钟
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ICount } from '@/api/analysis'

const data = ref({
    visitor: 0,
    read: 0,
    duration: 0
})

ICount().then((res: any) => {
    data.value.visitor = res.visitor
    data.value.read = res.read
    data.value.duration = Math.round(res.duration / 60)
})
</script>

<style lang="scss" scoped>
.base-count {
    padding: 16px 24px 0;

    .count__container {
        padding: 0 24px;
        position: relative;
        max-width: 1152px;
        color: var(--vp-c-text-2);
        background-color: var(--vp-c-bg-soft);
        border-radius: 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        span {
            color: var(--vp-c-text-1);
        }

        section {
            width: 100%;
            line-height: 48px;
        }
    }

    .more {
        a {
            font-size: 14px;
            line-height: 14px;
            font-weight: 500;
            color: var(--vp-c-brand-1);
            text-decoration: underline;
            text-underline-offset: 2px;
            transition: color 0.25s, opacity 0.25s;
        }
    }
}

@media (min-width: 640px) {
    .base-count {
        padding: 16px 48px 0;

        .count__container {
            height: unset !important;

            section {
                padding-left: 24px;
                width: 50%;
                line-height: 48px;
            }
        }

        .more {
            display: flex;
            align-items: center;
        }
    }
}

@media (min-width: 1025px) {
    .base-count {
        padding: 16px 64px 0;

        .count__container {
            margin: 0 auto;
            height: 48px !important;

            section {
                padding-left: 0;
                width: auto;
                line-height: unset;
            }
        }

        .more {
            display: flex;
            align-items: center;
        }
    }
}
</style>
