<script setup>
import { loginRead } from '@/utils/login-read'
loginRead('h10003')
</script>

# <AppCode code="03" /> HTML5 介绍

<ClientOnly><AppRead code="h10003" /></ClientOnly>

## 什么是 HTML5 ？

HTML5 将成为 HTML 、XHTML 以及 HTML DOM 的新标准，HTML5 是公认的下一代 Web 语言。按目前的情况可以直接理解为 HTML5 就是 HTML 的升级版。

## HTML 历史版本

网络来源信息看一眼就可以了

-   HTML 1.0——在 1993 年 6 月发为互联网工程工作小组(IETF)工作草案发布（并非标准）
-   HTML 2.0——1995 年 11 月作为 RFC 1866 发布，在 RFC 2854 于 2000 年 6 月发布之后被宣布已经过时
-   HTML 3.2——1996 年 1 月 14 日，W3C 推荐标准
-   HTML 4.0——1997 年 12 月 18 日，W3C 推荐标准
-   HTML 4.01（微小改进）——1999 年 12 月 24 日，W3C 推荐标准

## HTML 和 HTML5 有什么区别？

### 文档类型声明

HTML 的文档类型声明太长而且复杂，而 HTML5 的文档声明相对来说更为简便，有利于程序员快速阅读和开发。

```html
<!-- html -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3333.org/TR/html4/ stric t.dtd">

<!-- html5 -->
<!DOCTYPE html>
```

### 音频和视频的支持

HTML 如果不使用 Flash 播放器它是不支持音频和视频。 HTML5 使用 `<audio>` 和 `<video>` 标签来支持音频和视频控制。

### 图形的支持

新增了绘图标签 `<svg>` `<canvas>`。

### 新增了语义化标签

`<article>` `<nav>` `<details>` `<footer>` `<header>` `<main>` `<time>`

### 移除了一部分标签

`<font>` `<center>` `<u>` `<big>` `<strike>` `<tt>`

### 新增了会话存储和本地存储

`localStorage` `sessionStorage`

<AppComment />
