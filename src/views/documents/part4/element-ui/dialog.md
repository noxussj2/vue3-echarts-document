<script setup>
import Demo1 from "./dialog/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10008')
</script>

# <AppCode code="132" /> Dialog 对话框

<ClientOnly><AppRead code="u10008" /></ClientOnly>

用于弹出窗口

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Dialog } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/dialog.css'

Vue.use(Dialog)
```

## 基础使用

```vue
<template>
    <el-button @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false
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
            <td>visible</td>
            <td>是否显示 Dialog</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>title</td>
            <td>标题</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>width</td>
            <td>Dialog 的宽度</td>
            <td>string</td>
            <td>50%</td>
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