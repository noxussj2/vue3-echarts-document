<script setup>
import Demo1 from "./auto/Demo1.vue"
import Demo2 from "./auto/Demo2.vue"
import Demo3 from "./auto/Demo3.vue"
import { loginRead } from '@/utils/login-read'
loginRead('c10009')
</script>

# <AppCode code="16" /> 自适应布局

<ClientOnly><AppRead code="c10009" /></ClientOnly>

## 什么是自适应布局？

在不同屏幕分辨率下，能够以最佳的方式进行展示，元素的宽度尺寸可能会改变，但是原有的展示方式不会改变。通常使用 % 单位来实现自适应布局。

### 优点

页面能够兼容不同分辨率的屏幕。

### 缺点

因为开发的时候需要考虑多种分辨率下的情况，会额外增加一些工作量。其次是当分辨率过于小时，可能会发生内容的拥挤。不会根据不同分辨率采用不同的展示方式。

### 场景

主要兼容不同分辨率设备

## 基础案例

以下简单模拟一个自适应元素，在不同设备/分辨率下展示的效果。

### 容器尺寸 640px \* 320px

<AppCard>
    <Demo1 />
</AppCard>

元素的宽度是自适应的，根据父级容器宽度决定。

### 容器尺寸 150px \* 320px

<AppCard>
    <Demo2 />
</AppCard>

当分辨率改为 150px \* 320px 时，也能够正常的展示效果。

### 容器尺寸 150px \* 320px

<AppCard>
    <Demo3 />
</AppCard>

像这种元素多并且容器的尺寸也过于小时，就会导致内容拥挤。

<AppComment />
