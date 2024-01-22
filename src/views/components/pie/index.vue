<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/pie/echarts-pie/">echarts-pie</a>
                </template>

                <echarts-pie />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/pie/echarts-pie-annular/">echarts-pie-annular</a>
                </template>

                <echarts-pie-annular />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/pie/echarts-pie-legend/">echarts-pie-legend</a>
                </template>

                <echarts-pie-legend />
            </app-card>
        </app-flex>
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsPie from '@/echarts/pie/echarts-pie.vue'
import EchartsPieAnnular from '@/echarts/pie/echarts-pie-annular.vue'
import EchartsPieLegend from '@/echarts/pie/echarts-pie-legend.vue'
</script>
