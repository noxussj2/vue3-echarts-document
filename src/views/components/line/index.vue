<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-line">
                <echarts-line />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-line-multiple">
                <echarts-line-multiple />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-line-smooth">
                <echarts-line-smooth />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-line-gradient">
                <echarts-line-gradient />
            </app-card>
        </app-flex>
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsLine from './echarts-line.vue'
import EchartsLineMultiple from './echarts-line-multiple.vue'
import EchartsLineSmooth from './echarts-line-smooth.vue'
import EchartsLineGradient from './echarts-line-gradient.vue'
</script>
