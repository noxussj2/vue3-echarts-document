<script setup>
import Image1 from "./closure/image1.png"
import Image2 from "./closure/image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('j20009')
</script>

# <AppCode code="41" /> 闭包

<ClientOnly><AppRead code="j20009" /></ClientOnly>

## 什么是闭包？

闭包的概念并不复杂，但是它的定义比较绕（就像平时经常用到它，却又说不出来是什么）。可以在一个作用域中调用函数的内部函数并访问到该函数中的作用域的成员，这就是闭包。给一个建议，网上闭包的概念可以搜出来一大堆，但是你真的了解它吗？你有去调试看过它真的存在吗？一直处于理论状态，没有去真正实践过，这样的知识背下来了也没有太大意义，到面试的时候也表达不清楚。

### 闭包的原理

函数在执行的时候会放到一个执行栈中，当函数执行完毕之后会从执行栈移除，但是堆上的作用域成员因为被外部引用不能释放，因此内部函数依然可以访问外部函数的成员。

为了更好的理解，我列举以下两个场景，一个是存在闭包，一个是不存在闭包。并且通过浏览器调试工具去查看闭包。

## 基础案例

### 场景 1

```javascript
function makeFn() {
    let msg = 'Hello function'

    console.log(msg)
}

makeFn()
```

执行过程如下：

1. 定义 makeFn 函数
2. 调用 makeFn 函数
3. 定义 msg 变量
4. 打印 msg 变量
5. 销毁 msg 变量
6. 执行完毕

调试结果

<AppImage :src="Image1" />

从上图中可以看到，当我们准备打印 msg 变量的时候，它是从当前作用域读取出来的。

### 场景 2

```javascript
function makeFn() {
    let msg = 'Hello function'

    return function inside() {
        console.log(msg)
    }
}

let fn = makeFn() // 执行 makeFn 函数，返回 inside 函数

fn() // 执行 inside 函数
```

执行过程如下：

1. 定义 makeFn 函数
2. 调用 makeFn 函数
3. 定义 msg 变量
4. 定义 inside 函数（虽然还没被调用，但是由于该函数访问了外部函数的变量，所以外部函数的执行上文对象不会被销毁，形成闭包）
5. makeFn 函数执行完毕，并将 inside 函数返回给 fn
6. 调用 fn 函数
7. inside 函数访问 msg 变量（从闭包中获取 msg）
8. 打印 msg 变量
9. 执行完毕

调试结果

<AppImage :src="Image2" />

从上图中可以看到，当我们准备打印 msg 变量的时候，它是从闭包里面读取出来的。

还有一点，闭包会造成内存泄露，这句话不完全对，何为内存泄露？例如上图的 msg 变量，是我想要访问的变量，它不叫内存泄露。内存泄露是指在闭包中存在一些我不想要的资源，或者是无意间生成出来的。

<AppComment />