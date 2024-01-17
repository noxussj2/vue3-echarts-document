<script setup>
import { loginRead } from '@/utils/login-read'
loginRead('h10002')
</script>

# <AppCode code="02" /> HTML 介绍

<ClientOnly><AppRead code="h10002" /></ClientOnly>

::: warning 注意
HTML 的基础结构必须要掌握
:::

## 什么是 HTML ？

超文本标记语言（英语：HyperText Markup Language ，简称：HTML ）是一种用于创建网页的标准标记语言。
您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。

## 超文本

超越普通文本的特性，不仅是文字，还可以有图片、图形、表格、动画、音频、视频、链接、程序等非文本信息。

## 标记语言

将上述超文本的信息组合起来进行展示（包含结构和数据）的一种语言。

## HTML 基础结构

-   html 标签：根节点标签
-   head 标签：头部标签，主要存放网站的基本描述信息
-   body 标签：正文标签，主要存放网页显示的内容

```html
<html>
    <head>
        <title>我是网站标题</title>
        <style></style>
    </head>
    <body>
        <h1>我是正文内容</h1>
        <script></script>
    </body>
</html>
```

<AppPlayground href="https://codepen.io/noxussj/pen/YzjjpVr" />

## 标签

标签是 HTML 的核心部分。

### 特性

-   标签由两个尖括号包含起来的关键字，例如 `<html>`
-   标签一般都是成对的出现，开始标签和结束标签，例如 `<html>` `</html>`
-   也有一些标签是单标签，例如 `<br />` `<img />`
-   浏览器渲染的时候不会单纯的显示该标签，而是解析该标签后转换成另外一种形式进行展示

### 分类

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>类型</th>
            <th>布局方式</th>
            <th>尺寸</th>
            <th>嵌套</th>
            <th>案例</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>块元素</td>
            <td>独占一行</td>
            <td>可设置宽高</td>
            <td>可嵌套任何元素</td>
            <td>display: block<br />display: flex</td>
        </tr>
        <tr>
            <td>行内元素</td>
            <td>占用的位置由内容决定</td>
            <td>宽度高度由内容决定</td>
            <td>建议只嵌套行内元素</td>
            <td>display: inline</td>
        </tr>
        <tr>
            <td>行内块元素</td>
            <td>占用的位置由内容决定</td>
            <td>宽度高度由内容决定</td>
            <td>可嵌套任何元素</td>
            <td>display: inline-block<br />display: inline-flex</td>
        </tr>
    </tbody>
</table>

<AppComment />