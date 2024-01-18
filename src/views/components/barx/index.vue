<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-barx">
                <echarts-barx />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-barx-multiple">
                <echarts-barx-multiple />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-barx-stack">
                <echarts-barx-stack />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-barx-radius">
                <echarts-barx-radius />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-barx-color">
                <echarts-barx-color />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-barx-gradient">
                <echarts-barx-gradient />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-barx-backgorund">
                <echarts-barx-background />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-barx-background">
                <echarts-barx-background />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-barx-background">
                <echarts-barx-background />
            </app-card>
        </app-flex>
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsBarx from './echarts-barx.vue'
import EchartsBarxMultiple from './echarts-barx-multiple.vue'
import EchartsBarxStack from './echarts-barx-stack.vue'
import EchartsBarxRadius from './echarts-barx-radius.vue'
import EchartsBarxColor from './echarts-barx-color.vue'
import EchartsBarxGradient from './echarts-barx-gradient.vue'
import EchartsBarxBackground from './echarts-barx-background.vue'
</script>
