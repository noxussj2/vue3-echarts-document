<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20010')
</script>

# <AppCode code="42" /> 回调函数

<ClientOnly><AppRead code="j20010" /></ClientOnly>

## 什么是回调函数？

简单的来说，一个函数作为另外一个函数的参数，可以称为回调函数。这个理解其实不完全对，回调的意义根本没有体现出来，何为回调？也就是说一个函数你定义了，你没有马上的去调用它，而是交给了另外一个函数去调用，这才属于回调函数。

**缺点**
直接使用传统回调方式去完成复杂的异步流程，无法避免大量的回调函数嵌套，形成回调地狱。为了避免回调地狱的问题，CommonJS 社区提出了叫做 Promise 的规范，目的是为异步编程提供了一种更合理，更强大的统一解决方案。在 ES2015 中被标准化，成为语言规范。

## 基础案例

回调函数

```javascript
function foo(callback) {
    setTimeout(() => {
        callback()
    }, 3000)
}

foo(function () {
    console.log('这就是一个回调函数')
    console.log('现在处于定义时，没有被直接调用')
    console.log('我是被其他函数调用的，setTimeout 执行之后')
})
```

回调地狱

```javascript
const getData = (url, fn) => {
    fn(url + 'xiaoming')
}

getData('/url1', function (data) {
    getData('/url2', function (data) {
        getData('/url3', function (data) {
            getData('/url4', function (data) {
                getData('/url5', function (data) {
                    console.log(data)
                })
            })
        })
    })
})
```

<AppComment />
