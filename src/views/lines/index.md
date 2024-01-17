---
layout: doc
layoutClass: layout-lines
---

<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'
import BaseCard from "./components/base-card.vue"
import { stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9, stage10 } from "./data"

loginRead('n10004')
</script>

# 前端导航

<ClientOnly><AppRead code="n10004" /></ClientOnly>

前端导航中总共包含 `54` 项技术文章。

:::tip 这是一场持久战

-   博主将整个前端体系暂时划分为八个阶段。在前端领域就离不开前面三个阶段的技术，基本上是必学的。

-   前端的技术方向主要分为网页应用开发、桌面应用开发、小程序开发、APP 开发等。

-   前端的技术框架主要分为 Vue、React、AnglarJS

-   以上的技术方向搭配技术框架只需要精通其中一个即可，其余的作为了解。

:::

## 学习路线

前面四个阶段可以划分为 `入职必备技能` 具体的学习路线已经转成脑图 xmind 的形式。有需要的小伙伴可以自行查看。

[点击查看-前端学习路线](/lines/link)

## 第一阶段，页面还原能力 <Badge type="stage1" text="黑铁" />

<base-card :data="stage1" />

## 第二阶段，专攻 JS 逻辑能力 <Badge type="stage2" text="黄铜" />

<base-card :data="stage2" />

## 第三阶段，主流插件提升效率 <Badge type="stage3" text="白银" />

<base-card :data="stage3" />

## 第四阶段，PC Web Vue 技术方向 <Badge type="stage4" text="黄金" />

<base-card :data="stage4" />

## 第五阶段，技术方向更进一步 <Badge type="stage5" text="铂金" />

<base-card :data="stage5" />

## 第六阶段，商业技术解决方案 <Badge type="stage6" text="翡翠" />

<base-card :data="stage6" />

## 第七阶段，前端进阶之路 <Badge type="stage7" text="钻石" />

<base-card :data="stage7" />

## 第八阶段，已到尽头，深入底层 <Badge type="stage8" text="大师" />

<base-card :data="stage8" />

## 第九阶段，Node.js 全栈开发 <Badge type="stage9" text="宗师" />

<base-card :data="stage9" />

## 第十阶段，服务端运维 <Badge type="stage10" text="王者" />

<base-card :data="stage10" />
