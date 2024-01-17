<template>
    <div class="base-card">
        <a
            class="card__item"
            v-for="(item, index) in props.data"
            :key="index"
            :class="[item.disabled ? 'disabled' : '']"
            :href="item.disabled ? 'javascript:void(0)' : item.link"
        >
            <div class="item__title">
                <div class="title__block"><img :src="item.icon" alt="" /></div>
                <div class="title__name">{{ item.name }}</div>
            </div>
            <div class="item__details">{{ item.details }}</div>
        </a>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

interface Data {
    icon: string
    name: string
    details: string
    disabled: boolean
}

const props = defineProps({
    data: {
        type: Array as PropType<Data[]>,
        default: () => []
    }
})
</script>

<style lang="scss" scoped>
.base-card {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    .card__item {
        padding: 15px;
        color: inherit !important;
        background-color: var(--vp-c-bg-soft);
        border: 1px solid var(--vp-c-bg-soft);
        border-radius: 8px;
        display: inline-flex;
        flex-direction: column;
        text-decoration: none;

        .item__title {
            display: flex;
            align-items: center;

            .title__block {
                border-radius: 6px;
                background-color: var(--vp-c-bg-soft-down);
                width: 48px;
                height: 48px;
                font-size: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .title__name {
                margin-left: 20px;
                line-height: 24px;
                font-size: 16px;
                font-weight: 600;
            }
        }

        .item__details {
            flex-grow: 1;
            padding-top: 8px;
            line-height: 24px;
            font-size: 14px;
            color: var(--vp-c-text-2);
        }
    }

    .card__item:not(.disabled):hover {
        background-color: var(--vp-custom-block-tip-bg);
    }

    .card__item.disabled {
        position: relative;
        opacity: 0.5;
        cursor: no-drop;
    }
}

@media (min-width: 640px) {
    .base-card {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1025px) {
    .base-card {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
