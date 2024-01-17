<script setup>
import Demo1 from "./radio/Demo1.vue"
import Demo2 from "./radio/Demo2.vue"
import Demo3 from "./radio/Demo3.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10015')
</script>

# <AppCode code="139" /> Radio 单选框

<ClientOnly><AppRead code="u10015" /></ClientOnly>

在一组选项中进行单选

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Radio, RadioGroup } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/radio.css'
import 'element-ui/lib/theme-chalk/radio-group.css'

Vue.use(Radio)
Vue.use(RadioGroup)
```

## 基础使用

适用于选项过少的情况下，若选项过多建议使用 Select 选择器。

```vue
<template>
    <el-radio v-model="radio" label="1"> 选项 A </el-radio>
    <el-radio v-model="radio" label="2"> 选项 B </el-radio>
</template>

<script>
export default {
    data() {
        return {
            radio: '1'
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## 禁用状态

```vue
<template>
    <el-radio disabled v-model="radio" label="1"> 选项 A </el-radio>
    <el-radio disabled v-model="radio" label="2"> 选项 B </el-radio>
</template>

<script>
export default {
    data() {
        return {
            radio: '1'
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo2 />
</AppCardBlank>

## 单选框组

适用于多个场景中使用

```vue
<template>
    <el-radio-group v-model="radio">
        <el-radio label="1">选项 A</el-radio>
        <el-radio label="2">选项 B</el-radio>
    </el-radio-group>
</template>

<script>
export default {
    data() {
        return {
            radio: '1'
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo3 />
</AppCardBlank>

## Radio Attributes

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
            <td>string | number | boolean</td>
            <td></td>
        </tr>
        <tr>
            <td>label</td>
            <td>Radio 的 value</td>
            <td>string | number | boolean</td>
            <td></td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>false</td>
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