<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/line/echarts-line/">echarts-line</a>
                </template>

                <echarts-line />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/line/echarts-line-multiple/">echarts-line-multiple</a>
                </template>

                <echarts-line-multiple />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/line/echarts-line-smooth/">echarts-line-smooth</a>
                </template>

                <echarts-line-smooth />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/line/echarts-line-gradient/">echarts-line-gradient</a>
                </template>

                <echarts-line-gradient />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/line/echarts-line-zoom/">echarts-line-zoom</a>
                </template>

                <echarts-line-zoom />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/line/echarts-line-carousel/">echarts-line-carousel</a>
                </template>

                <echarts-line-carousel />
            </app-card>
        </app-flex>
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsLine from './echarts-line.vue'
import EchartsLineMultiple from './echarts-line-multiple.vue'
import EchartsLineSmooth from './echarts-line-smooth.vue'
import EchartsLineGradient from './echarts-line-gradient.vue'
import EchartsLineZoom from './echarts-line-zoom.vue'
import EchartsLineCarousel from './echarts-line-carousel.vue'
</script>
