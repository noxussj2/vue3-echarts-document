---
layout: doc
layoutClass: layout-noxussj
---

<script lang="ts" setup>
import iconEs6 from './images/es6.png'
import iconGit from './images/git.png'
import iconSass from './images/sass.png'
import iconAxios from './images/axios.png'
import iconVue from './images/vue.png'
import iconElementPlus from './images/element-plus.png'
import iconTs from './images/ts.png'
import iconEcharts from './images/echarts.png'
import iconTencentMap from './images/tencent-map.png'
import iconThree from './images/three.png'
import iconNPM from './images/npm.png'
import iconGithub from './images/github.png'
import iconNode from './images/node.png'

import BaseImage from "./components/base-image.vue"
import BaseCard from "./components/base-card.vue"
import BaseCode from "@/components/baseCode.vue"

import { stage1 } from "./data"
// import { loginRead } from '@/utils/login-read'

// loginRead('n10019')
</script>

# 小小菜园 <Badge text="noxussj 1997" />

<ClientOnly><AppRead code="n10019" /></ClientOnly>

:::tip 博主微信
手动添加 noxussj2 或者扫描下方二维码

<BaseCode />
:::

```sh
专心做好一件事。
                                        -- 小小菜园
```

## 代表作品

-   [菜园前端](https://note.noxussj.top/) 小白都能看懂的笔记

-   [3D 可视化城市模型](https://3d.noxussj.top/) 利用 `three.js` `glsl` 实现的一款可视化模型

-   [Visual Studio Code 插件](https://marketplace.visualstudio.com/items?itemName=noxussj.element-plus) Element Plus 代码提示插件

-   [小红书前端优质博主](https://www.xiaohongshu.com/user/profile/5eaf5ea40000000001006795?xhsshare=CopyLink&appuid=5eaf5ea40000000001006795&apptime=1696908535) 菜园前端官方号，发布前端相关文章

## 代表技术

<base-image :src="iconAxios" />
<base-image :src="iconEcharts" />
<base-image :src="iconElementPlus" />
<base-image :src="iconEs6" />
<base-image :src="iconGithub" />
<base-image :src="iconNode" />
<base-image :src="iconNPM" />
<base-image :src="iconSass" />
<base-image :src="iconTencentMap" />
<base-image :src="iconThree" />
<base-image :src="iconTs" />
<base-image :src="iconVue" />

## 友情链接

<base-card :data="stage1" />

:::tip 欢迎大家交换友链
格式

-   名称：菜园前端

-   简介：前端学习笔记分享、小白都能看懂的笔记

-   主页：https://note.noxussj.top/?s=y5

-   头像：https://note.noxussj.top/logo.png

-   通知邮箱：632922356@qq.com

:::

<app-comment />
