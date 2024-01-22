<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx/">echarts-barx</a>
                </template>

                <echarts-barx />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-multiple/">echarts-barx-multiple</a>
                </template>

                <echarts-barx-multiple />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-stack/">echarts-barx-stack</a>
                </template>

                <echarts-barx-stack />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-radius/">echarts-barx-radius</a>
                </template>

                <echarts-barx-radius />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-color/">echarts-barx-color</a>
                </template>

                <echarts-barx-color />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-gradient/">echarts-barx-gradient</a>
                </template>

                <echarts-barx-gradient />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-background/">echarts-barx-background</a>
                </template>

                <echarts-barx-background />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%" />

        <app-flex basis="33.333333%" />
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsBarx from '@/echarts/barx/echarts-barx.vue'
import EchartsBarxMultiple from '@/echarts/barx/echarts-barx-multiple.vue'
import EchartsBarxStack from '@/echarts/barx/echarts-barx-stack.vue'
import EchartsBarxRadius from '@/echarts/barx/echarts-barx-radius.vue'
import EchartsBarxColor from '@/echarts/barx/echarts-barx-color.vue'
import EchartsBarxGradient from '@/echarts/barx/echarts-barx-gradient.vue'
import EchartsBarxBackground from '@/echarts/barx/echarts-barx-background.vue'
</script>
