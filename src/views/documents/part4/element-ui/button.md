<script setup>
import Demo1 from "./button/Demo1.vue"
import Demo2 from "./button/Demo2.vue"
import Demo3 from "./button/Demo3.vue"
import Demo4 from "./button/Demo4.vue"
import Demo5 from "./button/Demo5.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10003')
</script>

# <AppCode code="127" /> Button 按钮

<ClientOnly><AppRead code="u10003" /></ClientOnly>

常用的操作按钮。

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/icon.css'

Vue.use(Button)
```

## 基础用法

```vue
<template>
    <el-button>默认按钮</el-button>
</template>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## 禁用状态

```vue
<template>
    <el-button disabled></el-button>
</template>
```

<AppCardBlank>
    <Demo2 />
</AppCardBlank>

## 不同颜色

```vue
<template>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
</template>
```

<AppCardBlank>
    <Demo3 />
</AppCardBlank>

## 不同形状

```vue
<template>
    <el-button>默认按钮</el-button>
    <el-button plain>朴素按钮</el-button>
    <el-button round>圆角按钮</el-button>
    <el-button icon="el-icon-search" circle></el-button>
</template>
```

<AppCardBlank>
    <Demo4 />
</AppCardBlank>

## 不同尺寸

:::warning 注意
由于预览模式是由 Element Plus 进行模拟的，在新版中已经改为了三种尺寸的按钮。而旧版中存在四种尺寸按钮。
:::

```vue
<template>
    <el-button>默认按钮</el-button>
    <el-button size="medium">中等按钮</el-button>
    <el-button size="small">小型按钮</el-button>
    <el-button size="mini">超小按钮</el-button>
</template>
```

<AppCardBlank>
    <Demo5 />
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
            <td>size</td>
            <td>按钮尺寸</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>type</td>
            <td>按钮颜色</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>plain</td>
            <td>是否朴素按钮</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>round</td>
            <td>是否圆角按钮</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>circle</td>
            <td>是否圆形按钮</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>是否禁用状态</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>图标类名</td>
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