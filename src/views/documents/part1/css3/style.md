<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('c10003')
</script>

# <AppCode code="10" /> 基础样式

<ClientOnly><AppRead code="c10003" /></ClientOnly>

## 定位相关

### 相对定位

```css
.my-content {
    position: relative;
}
```

### 绝对定位

```css
.my-content {
    position: absolute;
    left: 0;
    top: 0;
}
```

### 固定定位

```css
.my-content {
    position: fixed;
    left: 0;
    top: 0;
}
```

### 定位元素层级

::: warning 注意
z-index 设置 -2 以下则在页面中不会显示
:::

```css
.my-content {
    z-index: -1;
}
```

## 盒子相关

### 盒子尺寸

```css
.my-content {
    width: 100px;
    height: 100px;
}
```

### 盒子间距

**外边距**

```css
.my-content {
    /* 上、右、下、左 */
    margin: 10px;

    /* 上下、左右 */
    margin: 10px 20px;

    /* 上、左右、下 */
    margin: 10px 20px 10px;

    /* 上、右、下、左 */
    margin: 10px 20px 10px 20px;

    /* 上 */
    margin-top: 10px;

    /* 右 */
    margin-right: 20px;

    /* 下 */
    margin-bottom: 10px;

    /* 左 */
    margin-left: 20px;
}
```

**内边距（写法与 margin 相同）**

```css
.my-content {
    padding: 10px;
}
```

## 盒子背景

### 背景颜色

```css
.my-content {
    /* 写法1 */
    background-color: #fff;

    /* 写法2 */
    background: #fff;
}
```

### 渐变背景

```css
.my-content {
    /* 线性渐变 */
    background: linear-gradient(90deg, #000, #f00);

    /* 径向渐变 */
    background: radial-gradient(#000 25%, #f00 50%, #ff0 100%);
}
```

### 背景图片

```css
.my-content {
    /* 写法1 */
    background: url('./images/head.png');

    /* 写法2 */
    background-image: url('./images/head.png');

    /* 背景图片填充模式 */
    background-repeat: no-repeat;

    /* 背景图片缩放尺寸 */
    background-size: 100% 100%;

    /* 背景图片位置 */
    background-position: left bottom;
}
```

### 盒子边框

```css
.my-content {
    /* 宽度、实线、蓝色 */
    border: 5px solid blue;

    /* 左边边框颜色 */
    border-left-color: #f00;

    /* 左边边框宽度 */
    border-left-width: 2px;

    /* 左边边框线条 */
    border-left-style: dotted;
}
```

### 盒子圆角

```css
.my-content {
    /* 像素值 */
    border-radius: 6px;

    /* 百分比，圆形 */
    border-radius: 50%;
}
```

### 盒子阴影

```css
.my-content {
    /* 水平偏移值、垂直偏移值、模糊程度、阴影大小、阴影颜色 */
    box-shadow: 0 0 8px 8px #000;
}
```

### 盒子展示方式

```css
.my-content {
    /* 内联元素（不受宽度高度影响，宽度占位根据内容决定） */
    display: inline;

    /* 块级元素（受高度宽度影响，宽度占位一整行） */
    display: block;

    /* 块级元素（新的布局方式，受高度宽度影响，宽度占位一整行） */
    display: flex;

    /* 行内块级元素（受高度宽度影响，宽度占位根据内容决定） */
    display: inline-block;

    /* 行内块级元素（新的布局方式，受高度宽度影响，宽度占位根据内容决定） */
    display: inline-flex;

    /* 隐藏盒子 */
    display: none;
}
```

### 盒子透明度

```css
.my-content {
    /* 盒子透明度为 50% */
    opacity: 0.5;
}
```

### 盒子模型

```css
.my-content {
    /* 默认、标准盒模型（W3C盒模型） */
    box-sizing: content-box;

    /* 推荐使用、怪异盒模型（IE盒模型） */
    box-sizing: border-box;
}
```

## 字体相关

### 字体颜色

```css
.my-content {
    color: #f00;
}
```

### 字体大小

```css
.my-content {
    font-size: 14px;
}
```

### 字体加粗

```css
.my-content {
    /* 写法1 */
    font-weight: 500;

    /* 写法2，推荐 */
    font-weight: bold;
}
```

### 字体类型

```css
.my-content {
    font-family: Arial, Helvetica, sans-serif;
}

/* 自定义字体类型 */
@font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}

.my-content2 {
    font-family: myFirstFont;
}
```

### 行高

```css
.my-content {
    line-height: 30px;
}
```

### 文字水平间距

```css
.my-content {
    letter-spacing: 2px;
}
```

### 文本阴影

```css
.my-content {
    /* 左右偏移、上下偏移、阴影模糊程度、阴影颜色 */
    text-shadow: 5px 5px 5px #ff0000;
    text-overflow: clip;
}
```

## 对齐相关

### 水平对齐方式

```css
.my-content {
    /* 居左 */
    text-align: left;

    /* 居中 */
    text-align: center;

    /* 居右 */
    text-align: right;
}
```

### 垂直对齐方式

```css
.my-content {
    /* 元素放置在父元素的基线上 */
    vertical-align: baseline;

    /* 垂直对齐文本的下标 */
    vertical-align: sub;

    /* 垂直对齐文本的上标 */
    vertical-align: super;

    /* 把元素的顶端与行中最高元素的顶端对齐 */
    vertical-align: top;

    /* 把元素的顶端与父元素字体的顶端对齐 */
    vertical-align: text-top;

    /* 把此元素放置在父元素的中部 */
    vertical-align: middle;

    /* 使元素及其后代元素的底部与整行的底部对齐 */
    vertical-align: bottom;

    /* 把元素的底端与父元素字体的底端对齐 */
    vertical-align: text-bottom;
}
```

## 动画相关

### 2D 转换

```css
.my-content {
    /* 往右边偏移100px */
    transform: translateX(100px);

    /* 往下边偏移100px */
    transform: translateY(100px);

    /* 整体放大1.5倍 */
    transform: scale(1.5);

    /* 整体顺时针旋转45度 */
    transform: rotate(45deg);

    /* 水平方向，整体顺逆时针倾斜45度 */
    transform: skewX(45deg);

    /* 垂直方向，整体顺时针倾斜45度 */
    transform: skewY(45deg);
}
```

### 3D 转换

```css
.my-content {
    /* 创建3D场景 */
    transform-style: preserve-3d;

    /* 沿着X、Y、Z轴顺时针旋转40度 */
    transform: rotateX(40deg) rotateY(40deg) rotateZ(40deg);

    /* 沿着X、Y、Z轴偏移100px */
    transform: translateX(100px) translateY(100px) translateZ(100px);
}
```

### 动画 & 过渡

```css
/* 创建动画 */
@keyframes myMove {
    /* 动画0%时候的状态 */
    0% {
        transform: translateX(0);
    }

    /* 动画100%时候的状态 */
    100% {
        transform: translateX(300px);
    }
}

.my-content {
    /* 设置动画：动画名称、动画完成时间（也叫过渡时间 5S）、移动曲线速度（线性）、延迟执行、动画重复次数（无限次）、是否沿路返回（是） */
    animation: myMove 5s linear 0s infinite alternate;
}
```

## 其他

### 多媒体查询

```css
/* 浏览器窗口小于1000px时，设置背景为蓝色 */
@media screen and (max-width: 1000px) {
    .my-content {
        background: blue;
    }
}
```

### 内容溢出

```css
.my-content {
    /* 内容溢出，出现x、y轴滚动条 */
    overflow: auto;

    /* 内容溢出，隐藏溢出元素 */
    overflow: hidden;

    /* 内容溢出，出现x轴滚动条 */
    overflow-x: auto;

    /* 内容溢出，出现y轴滚动条 */
    overflow-y: auto;
}
```

<AppComment />