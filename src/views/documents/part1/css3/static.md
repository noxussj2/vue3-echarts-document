<script setup>
import Demo1 from "./static/Demo1.vue"
import Demo2 from "./static/Demo2.vue"
import { loginRead } from '@/utils/login-read'
loginRead('c10008')
</script>

# <AppCode code="15" /> 静态布局

<ClientOnly><AppRead code="c10008" /></ClientOnly>

## 什么是静态布局？

静态布局是平时开发中最常见的一种布局。就是给布局的元素设置固定的宽度和高度，无论你的屏幕分辨率是多大，它永远都是固定大小。通常使用 px 单位来实现静态布局。

### 优点

它的优点也比较明显，是一种最简单的布局方式，开发者只需要按照设计图 1:1 还原出来即可，无需考虑任何兼容性问题，所以工作量大大减少。

### 缺点

因为是固定的尺寸，所以在分辨率太低时会展示出滚动条，并且使得部分元素不在屏幕范围内，可读性比较差。

### 场景

传统的 Web 网站。

## 基础案例

以下简单模拟一个固定尺寸的元素，在不同设备/分辨率下展示的效果。

### 容器尺寸 640px \* 320px

<AppCard>
    <Demo1 />
</AppCard>

能够发现当前分辨率可以容下这个盒子，布局是正常的。

### 容器尺寸 150px \* 320px

<AppCard>
    <Demo2 />
</AppCard>

当分辨率过小就会发生问题了，例如盒子超出了该容器范围，在复杂的布局情况下还会导致布局错乱。

<AppComment />