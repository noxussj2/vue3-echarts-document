---
layout: doc
layoutClass: layout-lines
---

<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'
import BaseCard from "./components/base-card.vue"
import { stage1, stage2, stage3, stage4, stage5, stage6 } from "./data"

loginRead('n10002')
</script>

# 博主收藏网站

<ClientOnly><AppRead code="n10002" /></ClientOnly>

:::tip 博主平时自己收藏、以及常用的网站分享。

主要包含了常用工具、Vue2、Vue3 生态、数据可视化、IT 技术社区部分。后续会持续更新。

:::

## 常用工具

<base-card :data="stage1" />

## Vue 2 生态

<base-card :data="stage2" />

## Vue 3 生态

<base-card :data="stage3" />

## 数据可视化

<base-card :data="stage4" />

## IT 技术社区

<base-card :data="stage5" />

<!--

## 包管理平台

<base-card :data="stage6" /> -->
