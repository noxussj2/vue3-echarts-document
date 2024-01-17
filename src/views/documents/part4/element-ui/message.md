<script setup>
import Demo1 from "./message/Demo1.vue"
import Demo2 from "./message/Demo2.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10014')
</script>

# <AppCode code="138" /> Message 消息提示

<ClientOnly><AppRead code="u10014" /></ClientOnly>

常用于主动操作后的反馈提示。

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/message.css'

Vue.use(Message)
```

## 基础使用

```vue
<template>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
</template>

<script>
export default {
    methods: {
        open() {
            this.$message('这是一条消息提示')
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

```vue
<template>
    <el-button :plain="true" @click="open1">成功</el-button>
    <el-button :plain="true" @click="open2">警告</el-button>
    <el-button :plain="true" @click="open3">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
</template>

<script>
export default {
    methods: {
        open1() {
            this.$message({ message: '恭喜你，这是一条成功消息', type: 'success' })
        },
        open2() {
            this.$message({ message: '警告哦，这是一条警告消息', type: 'warning' })
        },
        open3() {
            this.$message('这是一条消息提示')
        },
        open4() {
            this.$message.error('错了哦，这是一条错误消息')
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo2 />
</AppCardBlank>

## Options

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
            <td>message</td>
            <td>消息文字</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>type</td>
            <td>消息状态</td>
            <td>string</td>
            <td>info</td>
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