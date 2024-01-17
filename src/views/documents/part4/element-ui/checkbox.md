<script setup>
import Demo1 from "./checkbox/Demo1.vue"
import Demo2 from "./checkbox/Demo2.vue"
import Demo3 from "./checkbox/Demo3.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10006')
</script>


# <AppCode code="130" /> Checkbox 多选框

<ClientOnly><AppRead code="u10006" /></ClientOnly>

在一组选项中进行多选

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Checkbox, CheckboxGroup } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/checkbox.css'
import 'element-ui/lib/theme-chalk/checkbox-group.css'

Vue.use(Checkbox)
Vue.use(CheckboxGroup)
```

## 基础使用

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

```vue
<template>
    <el-checkbox v-model="checked">选项 A</el-checkbox>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## 禁用状态

多选框不可用状态。

```vue
<template>
    <el-checkbox disabled v-model="checked">选项 A</el-checkbox>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo2 />
</AppCardBlank>

## 多选框组

适用于将多个选项的值存在一个数组中的场景。

```vue
<template>
    <el-checkbox-group v-model="checked">
        <el-checkbox label="选项 A"></el-checkbox>
        <el-checkbox label="选项 B"></el-checkbox>
    </el-checkbox-group>
</template>

<script>
export default {
    data() {
        return {
            checked: ['选项 A']
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo3 />
</AppCardBlank>

## Checkbox Attributes

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
            <td>Checkbox 的 value</td>
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