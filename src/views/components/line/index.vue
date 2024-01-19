<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/echarts-line/">echarts-line</a>
                </template>

                <echarts-line />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/echarts-line-multiple/">echarts-line-multiple</a>
                </template>

                <echarts-line-multiple />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/echarts-line-smooth/">echarts-line-smooth</a>
                </template>

                <echarts-line-smooth />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/echarts-line-gradient/">echarts-line-gradient</a>
                </template>

                <echarts-line-gradient />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%" />

        <app-flex basis="33.333333%" />
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsLine from '@/echarts/line/echarts-line.vue'
import EchartsLineMultiple from '@/echarts/line/echarts-line-multiple.vue'
import EchartsLineSmooth from '@/echarts/line/echarts-line-smooth.vue'
import EchartsLineGradient from '@/echarts/line/echarts-line-gradient.vue'
</script>
