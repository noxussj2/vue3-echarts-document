<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20016')
</script>

# <AppCode code="48" /> 副作用

<ClientOnly><AppRead code="j20016" /></ClientOnly>

## 什么是副作用？

副作用会让一个函数变的不纯，纯函数是根据相同的输入返回相同的输出，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用。

**副作用来源**

函数依赖外部状态（变量），但是副作用不可能完全禁止，尽可能控制在它们可控范围内发生。

**缺点**

-   副作用使得方法通用性下降不适合扩展和可重用性
-   副作用给程序中带来安全隐患和不稳定性

## 基础案例

没有副作用的函数，纯函数

```javascript
function checkAge(age) {
    const xiaoming = 18
    return age >= xiaoming
}
```

存在副作用的函数，不纯的函数

```javascript
const xiaoming = 18

function checkAge(age) {
    return age >= xiaoming
}
```

<AppComment />