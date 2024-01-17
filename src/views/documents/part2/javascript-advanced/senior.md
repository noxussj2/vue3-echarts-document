<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20019')
</script>

# <AppCode code="51" /> 高阶函数

<ClientOnly><AppRead code="j20019" /></ClientOnly>

## 什么是高阶函数？

有两种情况都可以被定义为高阶函数，第一种是把函数作为参数传递给另外一个函数，第二种是把函数作为另一个函数的返回结果。就像我们平时调用函数，一般都是传递值类型或者对象和数组等参数，或者是函数返回结果是值类型或者是对象和数组，高阶函数就是把上面提到的值类型、对象、数组改为函数。

**优点**

函数作为参数，可以使我们这个函数变得更灵活

**使用高阶函数的意义**

-   抽象（封装）可以帮我们屏蔽细节，只需要关注与我们要实现的目标
-   高阶函数是用来抽象通用的问题
-   可以简化我们的代码

## ES5、ES6 中常用的高阶函数

-   forEach
-   map
-   filter
-   every
-   some
-   find
-   findIndex
-   reduce
-   sort

## 基础案例

面向对象方式

```javascript
const array = [1, 2, 3, 4]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
```

<br />

高阶函数方式

```javascript
// 抽象循环功能
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

// 定义数据
const arr = [1, 3, 4, 7, 8]

// 调用函数，传入函数作为参数
forEach(arr, (item) => {
    console.log(item)
})
```

<AppComment />