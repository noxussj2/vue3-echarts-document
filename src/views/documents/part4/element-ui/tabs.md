<script setup>
import Demo1 from "./tabs/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10019')
</script>

# <AppCode code="143" /> Tabs 标签页

<ClientOnly><AppRead code="u10019" /></ClientOnly>

用于分割多种状态下不同的展示内容。

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Tabs, TabPane } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/tabs.css'
import 'element-ui/lib/theme-chalk/tabs-pane.css'

Vue.use(Tabs)
Vue.use(TabPane)
```

## 基础使用

```vue
<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="second">角色管理</el-tab-pane>
        <el-tab-pane label="菜单管理" name="third">菜单管理</el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first'
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## Tabs Attributes

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
            <td>string</td>
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

## Tab-pane Attributes

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
            <td>label</td>
            <td>选项卡标题</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>name</td>
            <td>选项卡对应的值</td>
            <td>string</td>
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