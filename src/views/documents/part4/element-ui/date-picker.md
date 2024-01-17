<script setup>
import Demo1 from "./date-picker/Demo1.vue"
import Demo2 from "./date-picker/Demo2.vue"
import Demo3 from "./date-picker/Demo3.vue"
import Demo4 from "./date-picker/Demo4.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10007')
</script>

# <AppCode code="131" /> DatePicker 日期选择器

<ClientOnly><AppRead code="u10007" /></ClientOnly>

通常用于选择日期

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { DatePicker } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/date-picker.css'

Vue.use(DatePicker)
```

## 基础用法

```vue
<template>
    <el-date-picker v-model="value" type="date" placeholder="选择日期"> </el-date-picker>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## 选择月份

```vue
<template>
    <el-date-picker v-model="value" type="month" placeholder="选择月份"> </el-date-picker>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo2 />
</AppCardBlank>

## 选择年份

```vue
<template>
    <el-date-picker v-model="value" type="year" placeholder="选择年份"> </el-date-picker>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo3 />
</AppCardBlank>

## 选择日期范围

```vue
<template>
    <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"> </el-date-picker>
</template>

<script>
export default {
    data() {
        return {
            value: []
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo4 />
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
            <td>绑定值</td>
            <td>string | array</td>
            <td></td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>非范围选择时的占位内容</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>start-placeholder</td>
            <td>范围选择时开始日期的占位内容</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>end-placeholder</td>
            <td>范围选择时结束日期的占位内容</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>range-separator</td>
            <td>选择范围时的分隔符</td>
            <td>string</td>
            <td>-</td>
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