<template>
    <div class="demo">
        <el-cascader v-model="value" :options="options"></el-cascader>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([])
const options = ref([
    {
        value: 'zhinan',
        label: '辅助',
        children: [
            {
                value: 'caiwenji',
                label: '蔡文姬'
            },
            {
                value: 'xiaoming',
                label: '小明'
            }
        ]
    },
    {
        value: 'zujian',
        label: '中单',
        children: [
            {
                value: 'zhenji',
                label: '甄姬'
            },
            {
                value: 'xiaoqiao',
                label: '小乔'
            }
        ]
    },
    {
        value: 'sheshou',
        label: '射手',
        children: [
            {
                value: 'make',
                label: '马可波罗'
            },
            {
                value: 'sunshangxiang',
                label: '孙尚香'
            }
        ]
    }
])
</script>
