<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('c10001')
</script>

# <AppCode code="08" /> CSS 介绍

<ClientOnly><AppRead code="c10001" /></ClientOnly>

## 什么是 CSS？

CSS 指层叠样式表 (Cascading Style Sheets)，理解为 CSS 样式就可以了。CSS 样式有什么作用呢？比如我们在页面中添加了一个 div ，我想给这个 div 设置宽度、高度、背景色、阴影、内容字体样式等等，就是通过 CSS 样式来实现。也就是丰富 HTML 标签的样式。

现实生活举例，body 里面的所有标签就像是不同的一个人，每个人的特征都不同。style 里面定义的每一个 .xxx 样式，就代表买了一件衣服。这个衣服你可以给任何一个人穿，也就是可以给任何一个标签使用。这个标签穿了衣服就会变得更好看。一个人可以穿多件衣服，也可以多个人穿同一件衣服。

## CSS 结构

```html
<html>
    <head>
        <title>我是网站标题</title>
        <style>
            .my-content {
                font-size: 30px;
                color: red;
            }
        </style>
    </head>
    <body>
        <div class="my-content">我是一个人，我穿了一件红色衣服（my-content）</div>
    </body>
</html>
```

<AppPlayground href="https://codepen.io/noxussj/pen/qByyyEp" />

## CSS 语法

### 语法规则：选择器 + 类名 + 样式体

例如：`.my-content {}`

解析：`.` 代表类选择器、 `my-content` 代表类名、`{}` 样式写在里面

## 颜色模式

CSS 中定义颜色使用十六进制（ hex ）表示法为红，绿，蓝的颜色值结合。可以是最低值是 0 ( 十六进制 00 )到最高值是 255 ( 十六进制 FF )。

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>模式名称</th>
            <th>写法</th>
            <th>简写</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>十六进制 HEX</td>
            <td>#aabbcc</td>
            <td>#abc</td>
        </tr>
        <tr>
            <td>RGB</td>
            <td>rgb(170, 187, 204)</td>
            <td></td>
        </tr>
        <tr>
            <td>RGBA</td>
            <td>rgba(170, 187, 204, 0.5)</td>
            <td></td>
        </tr>
    </tbody>
</table>

<AppComment />
