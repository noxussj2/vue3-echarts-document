<template>
    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary/">echarts-bary</a>
                </template>

                <echarts-bary />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-multiple/">echarts-bary-multiple</a>
                </template>

                <echarts-bary-multiple />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-stack/">echarts-bary-stack</a>
                </template>

                <echarts-bary-stack />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-radius/">echarts-bary-radius</a>
                </template>

                <echarts-bary-radius />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-color/">echarts-bary-color</a>
                </template>

                <echarts-bary-color />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-gradient/">echarts-bary-gradient</a>
                </template>

                <echarts-bary-gradient />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-background/">echarts-bary-background</a>
                </template>

                <echarts-bary-background />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-label/">echarts-bary-label</a>
                </template>

                <echarts-bary-label />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-label/">echarts-bary-label</a>
                </template>

                <echarts-bary-label />
            </app-card>
        </app-flex>
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsBary from '@/echarts/bary/echarts-bary.vue'
import EchartsBaryMultiple from '@/echarts/bary/echarts-bary-multiple.vue'
import EchartsBaryStack from '@/echarts/bary/echarts-bary-stack.vue'
import EchartsBaryRadius from '@/echarts/bary/echarts-bary-radius.vue'
import EchartsBaryColor from '@/echarts/bary/echarts-bary-color.vue'
import EchartsBaryGradient from '@/echarts/bary/echarts-bary-gradient.vue'
import EchartsBaryBackground from '@/echarts/bary/echarts-bary-background.vue'
import EchartsBaryLabel from '@/echarts/bary/echarts-bary-label.vue'
</script>
