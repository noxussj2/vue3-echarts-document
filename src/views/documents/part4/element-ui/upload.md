<script setup>
import Demo1 from "./upload/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10020')
</script>

# <AppCode code="144" /> Upload 上传

<ClientOnly><AppRead code="u10020" /></ClientOnly>

通过点击或者拖拽上传文件

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Upload } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/upload.css'
import 'element-ui/lib/theme-chalk/icon.css'

Vue.use(Upload)
```

## 拖拽上传

```vue
<template>
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
</template>
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
            <td>action</td>
            <td>上传的接口地址</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>multiple</td>
            <td>是否支持多选文件</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>drag</td>
            <td>是否启用拖拽上传</td>
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