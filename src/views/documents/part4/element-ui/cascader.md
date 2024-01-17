<script setup>
import Demo1 from "./cascader/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10005')
</script>

# <AppCode code="129" /> Cascader 级联选择器

<ClientOnly><AppRead code="u10005" /></ClientOnly>

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Cascader } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/cascader.css'

Vue.use(Cascader)
```

## 基础用法

```vue
<template>
    <el-cascader v-model="value" :options="options"></el-cascader>
</template>

<script>
export default {
    data() {
        return {
            value: [],
            options: [
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
            ]
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## Cascader Attributes

<table border="0" cellspacing="0" cellpadding="0" width="100%" style="display:table;text-align:left;">
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>v-model</td>
            <td>选中项绑定值</td>
            <td>array</td>
            <td></td>
        </tr>
        <tr>
            <td>options</td>
            <td>可选数据源</td>
            <td>array</td>
            <td></td>
        </tr>
        <tr>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<AppComment />