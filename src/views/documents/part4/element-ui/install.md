<script setup>
import Image1 from "./install/image1.png"
import Image2 from "./install/image2.png"
import Image3 from "./install/image3.png"
import { loginRead } from '@/utils/login-read'

loginRead('u10002')
</script>

# <AppCode code="126" /> 安装

<ClientOnly><AppRead code="u10002" /></ClientOnly>

:::warning 注意
后续演示将会在 Vue CLI 搭建的 Vue 项目上进行操作。如需要请查看 [Vue CLI 安装](/documents/part4/vue/install.html#vue-cli-安装)
:::

## 通过 YARN 命令安装

```sh
$ yarn add element-ui
```

## 完整引入

代表一次性引入所有组件，比较省心省事，但是项目的打包体积也会跟着变大。

```javascript
// main.js

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
```

<AppImage :src="Image1" />

## 按需引入

在实际项目开发中建议使用按需引入，也就是用多少组件，就引入多少组件。可以大大节省打包的体积。

```javascript
// main.js

import Vue from 'vue'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/button.css'

Vue.use(Button)
```

<AppImage :src="Image3" />

## 基础案例

```vue
<!-- App.vue -->

<template>
    <div id="app">
        <el-button>Button</el-button>
    </div>
</template>
```

<AppImage :src="Image2" />

<AppComment />