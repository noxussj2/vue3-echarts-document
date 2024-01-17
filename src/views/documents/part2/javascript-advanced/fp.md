<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20017')
</script>

# <AppCode code="49" /> 函数式编程

<ClientOnly><AppRead code="j20017" /></ClientOnly>

## 什么是函数式编程？

函数式编程（Functional Programming, FP）就是利用纯函数实现细粒度的函数，然后再通过函数的组合把细粒度的函数组合成功能更强大的函数。函数式编程中的 "函数" 不是程序中的函数（方法），而是数学中的函数（映射关系），例如 `y=sin(x)` 中 `x` 和 `y` 的关系，函数式编程用来描述数据之间的映射。

**优点**

封装成细粒度的函数，方便后期复用和多细粒度的函数进行组合。

## 不同的思维方式

**面向对象编程**

把现实世界中的事物抽象成程序世界中的类和对象，通过封装、继承、多态来演示事物事件的联系。

**函数式编程**

把现实世界中的事物和事物之间的联系抽象到程序世界，对运算过程进行抽象。

## 基础案例

非函数式编程

```javascript
const num1 = 2

const num2 = 3

const sum = num1 + num2
```

函数式编程

```javascript
function add(num1, num2) {
    return num1 + num2
}

const sum = add(2, 3)
```

<AppComment />