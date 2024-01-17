<script setup>
import Image1 from "./time/image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('j30002')
</script>

# <AppCode code="54" /> 时间复杂度

<ClientOnly><AppRead code="j30002" /></ClientOnly>

## 什么是时间复杂度？

定性描述该算法的运行时间，一个函数、用大 O 表示，例如 O (1)、 O (n)、O (logN) ...

### 常见的时间复杂度量级

-   常数阶 O (1)
-   对数阶 O (logN)
-   线性阶 O (n)
-   线性对数阶 O (nlogN)
-   平方阶 O (n²)
-   立方阶 O (n )
-   K 次方阶 O (n ^ k)
-   指数阶 (2 ^ n)

上面从上至下依次的时间复杂度越来越大，执行的效率越来越低。

**坐标图如下**

<AppImage :src="Image1" width="505.5px" height="434px" />

## 基础案例

**O(1)**

当每次该文件执行的时候，以下代码永远只会执行一次。

```javascript
let i = 0

i += 1
```

<br />

**O(n)**

这是一个循环语句，循环体内的代码会执行 n 次。

```javascript
for (let i = 0; i < n; i++) {
    console.log(i)
}
```

<br />

**O(1) + O(n) = O(n)**

当两个时间复杂度的代码在一块时，以时间复杂度较大的为准，当 n 足够大的时候，1 可以忽略不计。

```javascript
let i = 0

i += 1

for (let i = 0; i < n; i++) {
    console.log(i)
}
```

<br />

**O(n) \* O(n) = O(n ^ 2)**

当遇到嵌套 for 循环时，两个时间复杂进行相乘，得到的结果就是真实的时间复杂度。当时间复杂度进行相加时，却可以忽略不计。

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j)
    }
}
```

<br />

**O(logN)**

log 一般都是以 2 为底，可以不写。log 称为对数，一般是求 2 的多少次方为 n 。

```javascript
let i = 1

while (i < n) {
    console.log(i)
    i *= 2
}
```

<AppComment />