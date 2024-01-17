<script setup>
import Demo1 from "./switch/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10017')
</script>

# <AppCode code="141" /> Switch 开关

<ClientOnly><AppRead code="u10017" /></ClientOnly>

通常用于切换开启和关闭状态。

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Switch } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/switch.css'

Vue.use(Switch)
```

## 基础用法

```vue
<template>
    <el-switch v-model="value" active-color="#10b981" inactive-color="#424243"> </el-switch>
</template>

<script>
export default {
    data() {
        return {
            value: true
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## Attributes

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
            <td>boolean | string | number</td>
            <td></td>
        </tr>
        <tr>
            <td>active-color</td>
            <td>打开时的背景色</td>
            <td>string</td>
            <td>#409EFF</td>
        </tr>
        <tr>
            <td>inactive-color</td>
            <td>关闭时的背景色</td>
            <td>string</td>
            <td>#C0CCDA</td>
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