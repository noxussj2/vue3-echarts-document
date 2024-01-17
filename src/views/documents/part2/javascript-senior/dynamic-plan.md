<script setup>
import Image1 from "./dynamic-plan/image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('j30022')
</script>

# <AppCode code="74" /> 动态规划

<ClientOnly><AppRead code="j30022" /></ClientOnly>

## 什么是动态规划？

动态规划也是算法设计的一种方法/思想。它将一个问题分解为相互重叠的子问题，通过反复求解子问题，来解决原来的问题。

## 基础案例

### 场景一

斐波那契数列

当前数等于前面两个数的和。

<AppImage2 :src="Image1"  />

定义子问题：`f(n) = f(n-1) + f(n-2)`

<AppComment />