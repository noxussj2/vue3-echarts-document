<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/echarts-pictorial/">echarts-pictorial</a>
                </template>

                <echarts-pictorial />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/echarts-pictorial-gradient/">echarts-pictorial-gradient</a>
                </template>

                <echarts-pictorial-gradient />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/echarts-pictorial-battery/">echarts-pictorial-battery</a>
                </template>

                <echarts-pictorial-battery />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/echarts-pictorial-spirit/">echarts-pictorial-spirit</a>
                </template>

                <echarts-pictorial-spirit />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%" />

        <app-flex basis="33.333333%" />
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsPictorial from '@/echarts/pictorial/echarts-pictorial.vue'
import EchartsPictorialGradient from '@/echarts/pictorial/echarts-pictorial-gradient.vue'
import EchartsPictorialBattery from '@/echarts/pictorial/echarts-pictorial-battery.vue'
import EchartsPictorialSpirit from '@/echarts/pictorial/echarts-pictorial-spirit.vue'
</script>
