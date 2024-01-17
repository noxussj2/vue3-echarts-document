<script setup>
import Demo1 from "./drawer/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10009')
</script>

# <AppCode code="133" /> Drawer 抽屉

<ClientOnly><AppRead code="u10009" /></ClientOnly>

展示另外一种弹窗效果

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Drawer } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/drawer.css'

Vue.use(Drawer)
```

## 基础使用

```vue
<template>
    <div>
        <el-radio-group v-model="direction">
            <el-radio label="ltr">从左往右开</el-radio>
            <el-radio label="rtl">从右往左开</el-radio>
            <el-radio label="ttb">从上往下开</el-radio>
            <el-radio label="btt">从下往上开</el-radio>
        </el-radio-group>

        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;"> 点我打开 </el-button>

        <el-drawer title="我是标题" :visible.sync="drawer" :direction="direction">
            <span>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            direction: 'rtl'
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## Drawer Attributes

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
            <td>visible</td>
            <td>是否显示 Drawer</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>direction</td>
            <td>Drawer 打开的方向</td>
            <td>string</td>
            <td>rtl</td>
        </tr>
        <tr>
            <td>title</td>
            <td>Drawer 的标题</td>
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