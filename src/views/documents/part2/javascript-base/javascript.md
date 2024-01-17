<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j10001')
</script>

# <AppCode code="25" /> JavaScript 介绍

<ClientOnly><AppRead code="j10001" /></ClientOnly>

## 什么是 JavaScript？

JavaScript 是一种轻量级的编程语言（脚本语言）主要应用在前端方面。在 Web 层面上，就是给网页添加了交互的能力。

比如点击某个按钮跳转到某个页面， 点击登录按钮进行登录操作，渲染页面的数据等等。JS 在前端领域是非常非常重要的一个编程语言，必须要掌握。

## JavaScript 结构

```html
<html>
    <head>
        <title>我是网站标题</title>
    </head>
    <body>
        <h1 class="my-content">我是正文内容</h1>

        <script>
            alert('我是弹窗，页面加载顺序是从上往下执行的，加载完h1标签后，就到我了')
        </script>
    </body>
</html>
```

<AppPlayground href="https://codepen.io/noxussj/pen/LYBBaXX" />

<AppComment />