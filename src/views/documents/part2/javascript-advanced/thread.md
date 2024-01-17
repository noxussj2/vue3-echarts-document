<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'
loginRead('j20001')
</script>

# <AppCode code="33" />  JavaScript 单线程

<ClientOnly><AppRead code="j20001" /></ClientOnly>

## 什么是 JavaScript 单线程？

单线程是指当存在多个任务时候，所有任务都必须排队并且按照顺序执行。这里就会有同学问为什么不是多线程？假设是多线程，同时执行一些任务，某个任务进行了该 dom 的修改，而某个任务进行了该 dom 的删除，这样就会出现一些问题？既然大家都是同时执行的（不分先后）那么要以谁的为准呢？因为多线程是指多个任务同时执行，同时的概念是没有区分先后的。

:::warning 注意
所以 JavaScript 一开始就被设计为单线程的工作模式。
:::

**缺点**

因为是单线程，所有任务都是必须排队，按顺序执行，这样就会出现某些任务要执行很久，形成了堵塞，导致后面的任务都一直处于等待状态。为了解决堵塞的问题，JavaScript 将任务的执行模式分成了两种，同步模式（Synchronous）、异步模式（Asynchronous）。

<AppComment />