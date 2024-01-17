<script setup>
import Demo1 from "./select/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10016')
</script>

# <AppCode code="140" /> Select 选择器

<ClientOnly><AppRead code="u10016" /></ClientOnly>

当选项过多时，使用下拉菜单展示并选择内容。

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Select, Option } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/option.css'

Vue.use(Select)
Vue.use(Option)
```

## 基础使用

`v-model` 的值为当前被选中的 `el-option` 的 `value` 属性值

```vue
<template>
    <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            options: [
                {
                    value: '1',
                    label: '西米露'
                },
                {
                    value: '2',
                    label: '双皮奶'
                },
                {
                    value: '3',
                    label: '龟苓膏'
                },
                {
                    value: '4',
                    label: '烤乳鸽'
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

## Select Attributes

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
            <td>绑定值</td>
            <td>string | number</td>
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

## Option Attributes

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
            <td>value</td>
            <td>选项的值</td>
            <td>string | number | object</td>
            <td></td>
        </tr>
        <tr>
            <td>label</td>
            <td>选项的展示名称</td>
            <td>string | number</td>
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