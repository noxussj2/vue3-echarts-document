<template>
    <app-flex class="flex-echarts">
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
                    <a href="/reference/pie/echarts-pie-legend/">echarts-pie-legend</a>
                </template>

                <echarts-pie-legend />
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
    </app-flex>

    <app-flex class="flex-echarts">
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/pie/echarts-pie-petal/">echarts-pie-petal</a>
                </template>

                <echarts-pie-petal />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/pie/echarts-pie-carousel/">echarts-pie-carousel</a>
                </template>

                <echarts-pie-carousel />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%" />
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsPie from './echarts-pie.vue'
import EchartsPieAnnular from './echarts-pie-annular.vue'
import EchartsPieLegend from './echarts-pie-legend.vue'
import EchartsPiePetal from './echarts-pie-petal.vue'
import EchartsPieCarousel from './echarts-pie-carousel.vue'
</script>
