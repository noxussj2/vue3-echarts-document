<template>
    <div class="app-flex" :class="props.direction">
        <slot />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    direction: {
        type: String,
        default: 'row'
    },
    basis: {
        type: String,
        default: '100%'
    },
    gap: {
        type: String,
        default: '20px'
    },
    add: {
        type: String,
        default: '0px'
    }
})

const convertToRem = (pxValue: string) => {
    if (pxValue.indexOf('px') > -1) {
        pxValue = pxValue.replace('px', '')
    }

    const remValue = Number(pxValue) / 16
    return `${remValue}rem`
}

const basis = props.basis
const gap = convertToRem(props.gap)
const add = convertToRem(props.add)
</script>

<style lang="scss" scoped>
.app-flex {
    display: flex;
    overflow: hidden;
    height: 100%;
    gap: v-bind(gap);

    > :deep(*):not(.app-flex) {
        width: 100%;
        height: 100%;
    }
}

.app-flex.row {
    flex-direction: row;

    > .app-flex {
        width: calc(v-bind(basis) + v-bind(add));
        height: 100%;
    }
}

.app-flex.column {
    flex-direction: column;

    > .app-flex {
        width: 100%;
        height: calc(v-bind(basis) + v-bind(add));
    }
}
</style>
