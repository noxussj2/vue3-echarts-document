<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-bary">
                <echarts-bary />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-bary-multiple">
                <echarts-bary-multiple />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-bary-stack">
                <echarts-bary-stack />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-bary-radius">
                <echarts-bary-radius />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-bary-color">
                <echarts-bary-color />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-bary-gradient">
                <echarts-bary-gradient />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-bary-backgorund">
                <echarts-bary-background />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-bary-label">
                <echarts-bary-label />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-bary-label">
                <echarts-bary-label />
            </app-card>
        </app-flex>
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsBary from './echarts-bary.vue'
import EchartsBaryMultiple from './echarts-bary-multiple.vue'
import EchartsBaryStack from './echarts-bary-stack.vue'
import EchartsBaryRadius from './echarts-bary-radius.vue'
import EchartsBaryColor from './echarts-bary-color.vue'
import EchartsBaryGradient from './echarts-bary-gradient.vue'
import EchartsBaryBackground from './echarts-bary-background.vue'
import EchartsBaryLabel from './echarts-bary-label.vue'
</script>
