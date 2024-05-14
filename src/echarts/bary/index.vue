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
                    <a href="/reference/bary/echarts-bary-background/">echarts-bary-background</a>
                </template>

                <echarts-bary-background />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-gradient/">echarts-bary-gradient</a>
                </template>

                <echarts-bary-gradient />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-gradients/">echarts-bary-gradients</a>
                </template>

                <echarts-bary-gradients />
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

    <app-flex>
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-battery/">echarts-bary-battery</a>
                </template>

                <echarts-bary-battery />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/bary/echarts-bary-spirit/">echarts-bary-spirit</a>
                </template>

                <echarts-bary-spirit />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%" />
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsBary from './echarts-bary.vue'
import EchartsBaryMultiple from './echarts-bary-multiple.vue'
import EchartsBaryStack from './echarts-bary-stack.vue'
import EchartsBaryRadius from './echarts-bary-radius.vue'
import EchartsBaryColor from './echarts-bary-color.vue'
import EchartsBaryGradient from './echarts-bary-gradient.vue'
import EchartsBaryGradients from './echarts-bary-gradients.vue'
import EchartsBaryBackground from './echarts-bary-background.vue'
import EchartsBaryLabel from './echarts-bary-label.vue'
import EchartsBaryBattery from './echarts-bary-battery.vue'
import EchartsBarySpirit from './echarts-bary-spirit.vue'
</script>
