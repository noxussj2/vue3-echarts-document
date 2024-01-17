---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: 'V3 Echarts'
    text: '开箱即用的图表组件库'
    tagline: 无需关心图表实现，只需专注于数据和业务
    image:
        src: /logo.png
    actions:
        - theme: brand
          text: 快速上手
          link: /guide/getting-started/
        - theme: alt
          text: 修订记录
          link: /revise/2023

features:
    - icon: 🚀
      title: 使用简单
      details: 直接引入组件，传入数据即可渲染图表，无需关心图表实现。
    - icon: 🚦
      title: 无门槛
      details: 即使不懂 Echarts 也可以做出来炫酷的图表
    - icon: 🍉
      title: 丰富图表
      details: 满足大部分图表需求，后续会持续更新
    - icon: 💖
      title: 开源透明
      details: 源代码公开，如有需要可拷贝源代码到项目中进行二次开发
---

<BaseCount />

<BaseComment />

<script setup lang="ts">
import BaseCount from '@/components/BaseCount.vue'
import BaseComment from '@/components/BaseComment.vue'
import { loginRead } from '@/utils/login-read'

loginRead('n10001')
</script>
