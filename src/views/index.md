---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: '菜园前端'
    text: '小白都能看懂的笔记'
    tagline: 推荐在 PC 端进行访问
    image:
        src: /logo.png
    actions:
        - theme: brand
          text: 开始学习
          link: /lines/
        - theme: alt
          text: 修订记录
          link: /revise/2023
        - theme: alt
          text: 在线 Visual Studio Code
          link: /vscode/

features:
    - icon: 🔥
      title: 高质量笔记
      details: 提供了 200+ 篇高质量笔记，持续更新。
    - icon: 🌸
      title: 站内技术解答
      details: 由于笔记都是博主亲自写的，如有疑问的地方博主可以为你解答。
    - icon: ✨
      title: 学习路线
      details: 针对前端小白提供了学习路线，能够让您清晰认识到前端的整个架构体系。
    - icon: ⚡️
      title: 节省时间
      details: 您应该更专注去学习，不需要在写笔记和找笔记的过程花费大量时间，最后还有可能写的不好。
---

<BaseCount />

<BaseComment />

<script setup lang="ts">
import BaseCount from '@/components/BaseCount.vue'
import BaseComment from '@/components/BaseComment.vue'
import { loginRead } from '@/utils/login-read'

loginRead('n10001')

// console.log(123)
</script>
