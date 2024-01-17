<script setup>
import Demo1 from "./layout/Demo1.vue"
import Demo2 from "./layout/Demo2.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10013')
</script>

# <AppCode code="137" /> Layout 布局

<ClientOnly><AppRead code="u10013" /></ClientOnly>

布局组件，通过 24 分栏的形式，可以快速的创建横向布局。就像一块蛋糕切成 24 份，你想给每个人分多少块蛋糕都可以。

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Row, Col } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/col.css'

Vue.use(Row)
Vue.use(Col)
```

## 基础布局

```vue
<template>
    <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8"></el-col>
    </el-row>

    <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
    </el-row>
</template>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## 分栏间隔

```vue
<template>
    <el-row :gutter="20">
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
    </el-row>
</template>
```

<AppCardBlank>
    <Demo2 />
</AppCardBlank>

## Row Attributes

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
            <td>gutter</td>
            <td>栅格间隔</td>
            <td>number</td>
            <td>0</td>
        </tr>
        <tr>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

## Col Attributes

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
            <td>span</td>
            <td>占据的份数</td>
            <td>number</td>
            <td>24</td>
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