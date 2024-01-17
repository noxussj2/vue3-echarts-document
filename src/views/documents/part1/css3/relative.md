<script setup>
import Demo1 from "./relative/Demo1.vue"
import Demo2 from "./relative/Demo2.vue"
import { loginRead } from '@/utils/login-read'
loginRead('c10010')
</script>

# <AppCode code="17" /> 响应式布局

<ClientOnly><AppRead code="c10010" /></ClientOnly>

## 什么是响应式布局？

在不同屏幕分辨率下，能够以最佳的方式进行展示，元素的宽度尺寸以及展示方式可能会改变。通常使用 @media 多媒体查询来实现响应式布局。

### 优点

页面能够兼容不同分辨率的屏幕。

### 缺点

工作量大，UI 需要设计多个平台的版本。

### 场景

一套代码兼容 web 端、平板、以及手机端网页

## 基础案例

以下简单模拟一个响应式布局，在不同设备/分辨率下实现不同的展示效果。

### 容器尺寸 640px \* 320px

<AppCard>
    <Demo1 />
</AppCard>

当分辨率较大时可采用一行多个元素的形式。

### 容器尺寸 150px \* 320px

<AppCard>
    <Demo2 />
</AppCard>

当分辨率过小时采用一行一个元素的形式。

<AppComment />