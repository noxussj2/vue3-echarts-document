<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20002')
</script>

# <AppCode code="34" /> JavaScript 同步模式

<ClientOnly><AppRead code="j20002" /></ClientOnly>

## 什么是同步模式？

大部分单线程任务都会排队执行任务，这就称为同步模式（Synchronous）。同步模式执行中，只涉及到调用栈（Call stack）。

:::tip 现实生活举例
就像验核酸一样，我们要排队一个个去验（按顺序排队），当只有一条通道（也就是单线程）时，因为要打开健康码、行程码、核酸码，如果有些人手机网络不好，或者不懂的如何操作，就会耽误很长的时间，导致后面的排队的人员一直处于等待阶段。
:::

**优点**

这种模式编写的代码易于阅读和理解，代码的执行顺序都是从上往下一个个执行。

**缺点**

有些任务执行的时间过长，则后面的任务都会处于等待中，则形成阻塞。

## 基础案例

```javascript
console.log('global begin')

function bar() {
    console.log('bar task')
}

function foo() {
    console.log('foo task')

    bar()
}

foo()

console.log('global end')
```

<AppCard>
    <div>global begin</div>
    <div>foo task</div>
    <div>bar task</div>
    <div>global end</div>
</AppCard>

<AppComment />