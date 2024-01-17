<script setup>
import Demo1 from "./carousel/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10004')
</script>

# <AppCode code="128" /> Carousel 走马灯

<ClientOnly><AppRead code="u10004" /></ClientOnly>

也就是我们平时指的轮播图 banner

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Carousel, CarouselItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/carousel.css'
import 'element-ui/lib/theme-chalk/carousel-item.css'

Vue.use(Carousel)
Vue.use(CarouselItem)
```

## 基础使用

```vue
<template>
    <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
</template>

<style lang="scss" scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## Carousel Attributes

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
            <td>height</td>
            <td>走马灯的高度</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>trigger</td>
            <td>指示器的触发方式</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>autoplay</td>
            <td>是否自动切换</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>interval</td>
            <td>自动切换的时间间隔，单位为毫秒</td>
            <td>number</td>
            <td>3000</td>
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