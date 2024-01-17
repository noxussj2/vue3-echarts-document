<script setup>
import Demo1 from "./image/Demo1.vue"
import Demo2 from "./image/Demo2.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10011')
</script>

# <AppCode code="135" /> Image 图片

<ClientOnly><AppRead code="u10011" /></ClientOnly>

在原生图片的基础上做了二次封装，扩展了更多功能。

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Image } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/image.css'

Vue.use(Image)
```

## 基础使用

```vue
<template>
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="demonstration">{{ fit }}</span>
        <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## 大图预览

```vue
<template>
    <div class="demo-image__preview">
        <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"> </el-image>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: [
                'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
            ]
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo2 />
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
            <td>src</td>
            <td>图片源</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>fit</td>
            <td>确定图片如何适应容器框</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>preview-src-list</td>
            <td>开启图片预览功能</td>
            <td>array</td>
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