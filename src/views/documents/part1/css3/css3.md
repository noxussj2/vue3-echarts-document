<script setup>
import Image1 from "./css3/image1.png"
import Image2 from "./css3/image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('c10002')
</script>

# <AppCode code="09" /> CSS3 介绍

<ClientOnly><AppRead code="c10002" /></ClientOnly>

## 什么是 CSS3？

CSS3 是 CSS 一个新的标准，直接理解为是 CSS 的升级版，里面新增了很多样式（特性）。

## CSS3 盒子模型

::: warning 注意
CSS3 盒子模型必须要掌握，否则你在实际开发中遇到样式错乱很难排查问题。
:::

旧版的 IE 浏览器与其它浏览器解析盒子模型会出现差异，例如 `IE` 会把 `border` 边框 和 `padding` 内边距计算在盒子的 `width` / `height` 宽度里面，而其它浏览器则是相反，不包含 `border` 边框和 `padding` 内边距的。但是在实际开发中，前者是相对更加灵活的，但是 W3C 规范中规定了它们不能被包含在其中，为了解决这个问题，在新的 css3 标准中新增了 `box-sizing` 属性，用于切换两种盒子模型。

<br />

可以把所有 HTML 标签都理解成一个盒子，例如 `div` 标签。

盒子模型主要由 4 个部分组成：`content` `padding` `border` `margin`

<br />

### 标准盒模型（W3C 盒模型） content-box

当我们设置 `box-sizing: content-box;` 时，浏览器会按照 W3C 标准进行解析，将 `border` 和 `padding` 不计算在 `width` 或 `height` 其中。

<AppImage :src="Image1" height="250px" />

`width` = `content`

`height` = `content`

<br />

### 怪异盒模型（IE 盒模型） border-box

当我们设置 `box-sizing: content-box;` 时，浏览器会按照旧版的 IE 标准进行解析，将 `border` 和 `padding` 计算在 `width` 或 `height` 其中。

<AppImage :src="Image2" height="250px" />

`width` = `content` + `padding` + `border`

`height` = `content` + `padding` + `border`

<br />

### 基础案例

::: code-group

```html [html]
<body>
    <div class="content-box">content</div>
    <div class="border-box">border</div>
</body>
```

```html [css]
<style>
    .content-box {
        padding: 20px;
        width: 100px;
        height: 100px;
        background-color: #5cd8a2;
        box-sizing: content-box;
    }

    .border-box {
        padding: 20px;
        width: 100px;
        height: 100px;
        background-color: #ff8077;
        box-sizing: border-box;
    }
</style>
```

:::

<AppPlayground href="https://codepen.io/noxussj/pen/LYBBqEN" />

## CSS3 新特性

::: warning 注意
目前只大致列举 CSS3 新特性，后续的文章会详细介绍
:::

-   盒子模型
-   盒子圆角
-   盒阴影
-   边框图片
-   背景
-   渐变
-   文本效果
-   字体
-   2D 转换
-   3D 转换
-   动画 & 过度
-   弹性盒子
-   选择器

<AppComment />
