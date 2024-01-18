<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card title="echarts-pie">
                <echarts-pie />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-pie-annular">
                <echarts-pie-annular />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card title="echarts-pie-legend">
                <echarts-pie-legend />
            </app-card>
        </app-flex>
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsPie from './echarts-pie.vue'
import EchartsPieAnnular from './echarts-pie-annular.vue'
import EchartsPieLegend from './echarts-pie-legend.vue'
</script>
