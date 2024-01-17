<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20018')
</script>

# <AppCode code="50" /> 函数组合

<ClientOnly><AppRead code="j20018" /></ClientOnly>

## 什么是函数组合？

函数组合（Compose），如果一个函数要经过多个函数处理才能得到最终值，这个时候可以把中间过程的函数合并成一个函数。函数组合默认是从右到左执行，每个函数只能接收一个参数，否则需使用柯里化进行转换。

**作用**

函数组合可以让我们把细粒度的函数重新组合生成一个新的函数。

**规则**

函数的组合要满足结合律（associativity），无论先结合前面几个参数或者是先结合后面几个参数返回的结果都是一样的。类似于数学中的加法，1 + 2 + 3 中的 (1 + 2) + 3 或者 1 + (2 + 3) 返回的结果都是一样的。

## 常见问题

1. 纯函数和柯里化很容易写出洋葱代码 a(b(c(d)))，中间哪个环节出现问题，不容易排查。

2. 为什么函数组合默认是从右往左执行，因为这样更加接近于函数调用的写法，a(b(c(d)))。

## 基础案例

函数组合

```javascript
// 函数组合（从右往左执行 ）
function compose(...args) {
    return function (value) {
        return args.reverse().reduce((a, fn) => fn(a), value)
    }
}

// 反转数组
const reverse = (arr) => arr.reverse()

// 取第一项值
const first = (arr) => arr[0]

// 转换为大写
const toUpper = (s) => s.toUpperCase()

const f = compose(toUpper, first, reverse)

f(['a', 'b', 'c']) // C
```

判断是否满足结合律

```javascript
const f3 = compose(compose(toUpper, first), reverse)

const f3 = compose(toUpper, compose(first, reverse))

let associative = f2(['a', 'b', 'c']) === f3(['a', 'b', 'c']) // true
```

<AppComment />