<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20003')
</script>

# <AppCode code="35" /> JavaScript 异步模式

<ClientOnly><AppRead code="j20003" /></ClientOnly>

## 什么是异步模式？

不会等待当前任务执行完毕，才会去执行下一个任务，这就是异步模式（Asynchronous）。开启异步后，就会跳过本任务，开始执行下一个任务，后续的逻辑一般会通过回调函数的方式定义。异步模式执行中，涉及到调用栈（Call stack）、消息队列（Queue）、微任务队列（Microtask Queue）、事件循环（Eevent Loop）、运行环境（浏览器是 WebAPIs）。

:::tip 现实生活举例
回到同步模式的现实生活举例上，我们可以修改一下验核酸的排队规则，已经准备好三个码的人可以先进入队列中进行排队，还没准备好的先站在旁边弄，什么时候弄好了就什么时候在去队伍中排队验核酸。这样就可以大大节省了大家的时间。
:::

**优点**

主要解决同步模式造成的阻塞问题

**缺点**

代码的执行顺序混乱，并非从上往下一个个执行，有时候无法得知谁先执行谁后执行，所以不易于阅读和理解。

## 异步方案

-   ES2015 提供的 Pormise 方案
-   ES2015 提供的 Generator
-   ES2017 提供的 Async / Await 语法糖（可以写出更扁平的异步代码）

## 基础案例

```javascript
console.log('global begin')

setTimeout(() => {
    console.log('timer1 invoke')
}, 1800)

setTimeout(() => {
    console.log('timer2 invoke')

    setTimeout(() => {
        console.log('inner invoke')
    }, 1000)
}, 1000)

console.log('global end')
```

<AppCard>
    <div>global begin</div>
    <div>global end</div>
    <div>timer2 invoke</div>
    <div>timer1 invoke</div>
    <div>inner invoke</div>
</AppCard>

<AppComment />