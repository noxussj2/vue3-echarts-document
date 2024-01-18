<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-pictorial">
                <echarts-pictorial />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-pictorial-gradient">
                <echarts-pictorial-gradient />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-pictorial-battery">
                <echarts-pictorial-battery />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-pictorial-spirit">
                <echarts-pictorial-spirit />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%" />

        <app-flex basis="33.333333%" />
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsPictorial from './echarts-pictorial.vue'
import EchartsPictorialGradient from './echarts-pictorial-gradient.vue'
import EchartsPictorialBattery from './echarts-pictorial-battery.vue'
import EchartsPictorialSpirit from './echarts-pictorial-spirit.vue'
</script>
