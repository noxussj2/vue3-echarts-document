<script lang="ts" setup>
import Demo1 from "./position/Demo1.vue"
import Demo2 from "./position/Demo2.vue"
import Demo3 from "./position/Demo3.vue"
import Demo4 from "./position/Demo4.vue"
import { loginRead } from '@/utils/login-read'

loginRead('c10006')
</script>

# <AppCode code="13" /> 绝对、相对、固定定位三者区别

<ClientOnly><AppRead code="c10006" /></ClientOnly>

## 正常布局

文档流布局方式，按照顺序一个个排列好，效果如下图：

```html
<html>
    <head>
        <style>
            .box1 {
                width: 100px;
                height: 100px;
                background-color: #ff8077;
            }

            .box2 {
                width: 100px;
                height: 100px;
                background-color: #5cd8a2;
            }
        </style>
    </head>
    <body>
        <div class="box1"></div>
        <div class="box2"></div>
    </body>
</html>
```

<AppCard>
    <Demo1 />
</AppCard>

<AppPlayground href="https://codepen.io/noxussj/pen/XWBBOpJ" />

## 绝对定位

该元素脱离文档流，不参与布局一个个排列。完全自由想去哪里就去哪里。写了绝对定位就要写上 left 和 top。 这两者默认是距离文档左上角的距离。

```html
<html>
    <head>
        <style>
            .box1 {
                position: absolute;
                left: 20px;
                top: 20px;
                width: 100px;
                height: 100px;
                background-color: #ff8077;
            }

            .box2 {
                width: 100px;
                height: 100px;
                background-color: #5cd8a2;
            }
        </style>
    </head>
    <body>
        <div class="box1"></div>
        <div class="box2"></div>
    </body>
</html>
```

:::warning 注意
由于预览模式是模拟的，为了让小伙伴更好的观看，可以把灰色想象成就是文档部分 body 标签。而且 body 标签默认是自带了 8px 的 margin。
:::

<AppCard>
    <Demo2 />
</AppCard>

<AppPlayground href="https://codepen.io/noxussj/pen/XWBBOpJ" />

## 相对定位

刚才已经介绍了绝对定位可以通过 left 和 top 来控制距离文档左上角的距离，也就是说 left 和 top 是相对于 "文档" 进行定位的。而相对定位则是把这个相对于 "某某元素" 进行修改。

```html
<html>
    <head>
        <style>
            .box1 {
                position: absolute;
                left: 20px;
                top: 20px;
                width: 100px;
                height: 100px;
                background-color: #ff8077;
            }

            .box2 {
                position: relative;
                width: 100px;
                height: 100px;
                background-color: #5cd8a2;
            }
        </style>
    </head>
    <body>
        <div class="box2">
            <div class="box1"></div>
        </div>
    </body>
</html>
```

<AppCard>
    <Demo3 />
</AppCard>

现在把 box1 放进 box2 里面，并且给 box2 设置相对定位 `position: relative` 那么 box1 的 left 和 top 就会相对于 box2 的左上角原点。

<AppPlayground href="https://codepen.io/noxussj/pen/OJwwdvo" />

## 固定定位

固定定位和绝对定位很像，可以让元素飘起来，想去哪里去哪里。但是绝对定位是相对于 "某某元素" 进行定位的。而固定定位则是永远是相对于 "浏览器可视区左上角"。尽管出现了滚动条也是丝毫不影响。

```html
<html>
    <head>
        <style>
            .box1 {
                position: fixed;
                left: 0;
                top: 0;
                width: 100px;
                height: 100px;
                background-color: #ff8077;
            }

            .box2 {
                position: relative;
                width: 100px;
                height: 100px;
                background-color: #5cd8a2;
            }
        </style>
    </head>
    <body>
        <div class="box2">
            <div class="box1"></div>
        </div>
    </body>
</html>
```

<AppCard>
    <Demo4 />
</AppCard>

可以发现尽管 box1 在 box2 里面，并且 box2 也设置了相对定位，box1 依然直接无视了，直接相对于 "可视区左上角" 进行定位。

<AppPlayground href="https://codepen.io/noxussj/pen/rNrrPKO" />

<AppComment />