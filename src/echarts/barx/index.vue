<template>
    <app-flex class="flex-echarts">
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

    <app-flex class="flex-echarts">
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
                    <a href="/reference/barx/echarts-barx-background/">echarts-barx-background</a>
                </template>

                <echarts-barx-background />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex class="flex-echarts">
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-gradient/">echarts-barx-gradient</a>
                </template>

                <echarts-barx-gradient />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-gradients/">echarts-barx-gradients</a>
                </template>

                <echarts-barx-gradients />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-zoom/">echarts-barx-zoom</a>
                </template>

                <echarts-barx-zoom />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex class="flex-echarts">
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-carousel/">echarts-barx-carousel</a>
                </template>

                <echarts-barx-carousel />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-line/">echarts-barx-line</a>
                </template>

                <echarts-barx-line />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-pictorial/">echarts-barx-pictorial</a>
                </template>

                <echarts-barx-pictorial />
            </app-card>
        </app-flex>
    </app-flex>

    <app-flex class="flex-echarts">
        <app-flex basis="33.333333%">
            <app-card>
                <template #title>
                    <a href="/reference/barx/echarts-barx-battery/">echarts-barx-battery</a>
                </template>

                <echarts-barx-battery />
            </app-card>
        </app-flex>

        <app-flex basis="33.333333%" />

        <app-flex basis="33.333333%" />
    </app-flex>
</template>

<script lang="ts" setup>
import EchartsBarx from './echarts-barx.vue'
import EchartsBarxMultiple from './echarts-barx-multiple.vue'
import EchartsBarxStack from './echarts-barx-stack.vue'
import EchartsBarxRadius from './echarts-barx-radius.vue'
import EchartsBarxColor from './echarts-barx-color.vue'
import EchartsBarxGradient from './echarts-barx-gradient.vue'
import EchartsBarxGradients from './echarts-barx-gradients.vue'
import EchartsBarxBackground from './echarts-barx-background.vue'
import EchartsBarxZoom from './echarts-barx-zoom.vue'
import EchartsBarxCarousel from './echarts-barx-carousel.vue'
import EchartsBarxLine from './echarts-barx-line.vue'
import EchartsBarxPictorial from './echarts-barx-pictorial.vue'
import EchartsBarxBattery from './echarts-barx-battery.vue'
</script>
