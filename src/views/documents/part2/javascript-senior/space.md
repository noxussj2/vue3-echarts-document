<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30003')
</script>

# <AppCode code="55" /> 空间复杂度

<ClientOnly><AppRead code="j30003" /></ClientOnly>

## 什么是空间复杂度？

算法在运行过程中临时占用存储空间大小的度量，和时间复杂度表示一样，一个函数，用大 O 表示，例如 O (1)、O (n)、O (^2 )...

## 基础案例

**O(1)**

这段代码因为只声明了单个变量，单个变量所占用的内存永远是 1。

```javascript
let i = 0

i += 1
```

<br />

**O(n)**

这段代码主要声明了变量 list 和变量 i，但是变量 list 的元素个数会受 n 的影响，所以时间复杂度是 O (n) 而变量 i 的时间复杂度 O (1) 两个相加时可忽略不计。

```javascript
const list = []

for (let i = 0; i < n; i++) {
    list.push(i)
}
```

<br />

**O(n ^ 2)**

我们平时用的栅格布局（一行里面包括多少列）其实也可以用矩阵来表示。这段代码主要声明了 matrix 变量，是一个数组，因为是嵌套循环，所以数组的元素个数为 n \* n 为 n ^ 2。

```javascript
const matrix = []

for (let i = 0; i < n; i++) {
    matrix.push([])

    for (let j = 0; j < n; j++) {
        matrix[i].push(j)
    }
}
```

<AppComment />