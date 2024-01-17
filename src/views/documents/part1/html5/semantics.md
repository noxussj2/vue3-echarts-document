<script setup>
import Image1 from "./semantics/image1.png"
import Image2 from "./semantics/image2.png"
import Image3 from "./semantics/image3.png"
import { loginRead } from '@/utils/login-read'

loginRead('h10006')
</script>

# <AppCode code="06" /> 语义化

<ClientOnly><AppRead code="h10006" /></ClientOnly>

## 什么是语义化？

简单了来说就是，当网页去掉 CSS 样式时，页面能呈现出来清晰的结构。

语义化的核心作用：提升代码可读性，便于团队开发和维护。

以下是语义化的 HTML 标签结构（部分语义化标签）：

<AppImage :src="Image1" />

<AppImage :src="Image2" />

假设我要编写一个这样的布局

<AppImage :src="Image3" />

不使用语义化是这样的

```html
<div></div>
<div></div>
<div>
    <div>
        <div></div>
        <div></div>
    </div>
    <div></div>
</div>
<div></div>
```

使用语义化是这样的

```html
<header></header>
<nav></nav>
<main>
    <section>
        <section></section>
        <article></article>
    </section>
    <aside></aside>
</main>
<footer></footer>
```

从上面的例子可以看出来，去除页面样式后，不使用语义化一堆 div 很难看出来是什么模块。而使用语义化标签后，就能够清晰看出包含了头部模块、导航模块、主要内容展示模块、侧边栏模块、底部模块等。

<AppComment />
