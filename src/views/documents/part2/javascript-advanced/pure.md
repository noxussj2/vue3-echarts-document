<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20015')
</script>

# <AppCode code="47" /> 纯函数

<ClientOnly><AppRead code="j20015" /></ClientOnly>

## 什么是纯函数？

相同的输入永远会得到相同的输出，而且没有任何可观察的副作用。纯函数就类似数学中的函数（用来描述输入和输出之间的关系）`y=fn(x)`

**纯函数库**

我们平时用的 lodash 其实就是纯函数库。

## 纯函数的优点

1. 可缓存（直接提升性能）

也就是我们平常说的函数缓存，因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数的结果缓存起来，就没必要每次调用该函数都要重新执行一遍函数体的代码

2. 可测试

纯函数让测试更方便，不受副作用的影响

3. 并行处理

在多线程环境下并行操作共享的内存数据很可能会出现意外情况（纯函数内的数据都是独立的），纯函数不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数

## 基础案例

**纯函数**

相同的输入始终得到相同的输出

```javascript
const array = [1, 2, 3, 4, 5]

console.log(array.slice(0, 3))
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))

// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
```

<br />

**不纯的函数**

相同的输入得到的输出却不相同

```javascript
const array = [1, 2, 3, 4, 5]

console.log(array.splice(0, 3))
console.log(array.splice(0, 3))
console.log(array.splice(0, 3))

// [ 1, 2, 3 ]
// [ 4, 5 ]
// []
```

<br />

**函数缓存**

每次调用函数，并且传入参数相同时，函数体内代码不会被执行，直接返回上一次输出的结果

```javascript
const lodash = require('lodash')

function getArea(r) {
    console.log(r)
    return Math.PI * r * r
}

let getAreaWithMemory = lodash.memoize(getArea) // 创建一个缓存函数

console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(5))

// 4
// 50.26548245743669
// 50.26548245743669
// 50.26548245743669
// 5
// 78.53981633974483
```

<AppComment />