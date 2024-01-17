<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('s10001')
</script>

# <AppCode code="79" /> Sass 介绍

<ClientOnly><AppRead code="s10001" /></ClientOnly>

## 什么是 Sass？

**官方标语**

世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言。怎么理解这句话呢？我们平时写的 CSS 代码可以理解为静态样式语言，而 Scss 就是动态样式语言，何为动态？就是让你写 CSS 跟写 JS 一样，可以在 CSS 里面定义变量，函数。

最大的作用就是减少你的 CSS 代码量，用更少的代码实现更多的功能。其次就是使得 CSS 代码更加的规范化，保持 HTML 结构的风格去编写 CSS 。

官方文档地址

[https://www.sass.hk](https://www.sass.hk)

## Less、Sass、Scss 三者区别？

Scss 是 Sass 的升级版， Sass 语法编写的代码不需要写大括号 "{}" 、也不需要写分号 ";" 使的代码不易阅读。

Scss 和 Less 大致上的功能都是一样的，只是实现的代码的语法有些不同。

所以我们只需要学习其中一款即可，另外一款也是大同小异。

## 兼容性

目前没有一款浏览器是支持它们的，必须要使用插件进行把 Scss 代码转化为 CSS 。现在暂时先不教如何使用工程化的插件去转换（下一个阶段会介绍），而是使用 Koala 这一款软件去自动转换。

<AppComment />