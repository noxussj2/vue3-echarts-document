<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20020')
</script>

# <AppCode code="52" /> 函数柯里化

<ClientOnly><AppRead code="j20020" /></ClientOnly>

## 什么是函数柯里化？

函数柯里化（Haskell Brooks Curry），当一个函数有多个参数的时候先传递一部分参数并且调用它（这部分参数后续不会进行改变），然后返回一个新的函数接收剩余的参数并返回结果。

**总结**

-   柯里化可以让我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的新函数
-   这是一种对函数参数的 "缓存"
-   让函数变的更灵活，让函数的粒度更小

## 基础案例

案例 1

```javascript
function checkAge(arg1) {
    return function (arg2) {
        return arg2 >= arg1
    }
}

// 检查是否大于 18 岁
let checkAge18 = checkAge(18)

// 检查是否大于 20 岁
let checkAge20 = checkAge(20)

console.log(checkAge18(19)) // true
console.log(checkAge20(19)) // false
```

<br />

案例 2

```javascript
// 封装柯里化函数
function curry(fn) {
    return function curriedFn(...args) {
        if (args.length < fn.length) {
            return function (...args2) {
                return curriedFn(...args.concat(Array.from(args2)))
            }
        }
        return fn(...args)
    }
}

function getSum(a, b, c) {
    return a + b + c
}

const curried = curry(getSum)

const fn1 = curried(1) // 返回新函数，接收剩余的参数

const fn2 = fn1(2) // 返回新函数，接收剩余的参数

const fn3 = fn2(3) // 返回结果 6
```

<AppComment />