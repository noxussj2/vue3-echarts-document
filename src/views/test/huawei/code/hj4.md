<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'
loginRead('n10017')
</script>

# 字符串分隔

<ClientOnly><AppRead code="n10017" /></ClientOnly>

## 题目描述

请编写一个函数，该函数接收一个字符串参数，经过处理后进行输出，如果字符串不是 8 的整数倍，需要在其后面补 0

:::info 提示

-   字符串的长度必须小于等于 100，否则不处理

-   字符串不能为空，否则不处理

:::

:::tip 示例 1
输入：abc

输出：abc00000
:::

:::tip 示例 2
输入：abcdefghijk

输出：

abcdefgh

ijk00000
:::

## 实现代码

```javascript
function fn(str) {
    str = String(str)
    if (str.length === 0 || str.length > 100) return [str]

    const arr = []
    while (str.length) {
        const str2 = str.slice(0, 8)
        const zero = '00000000'.slice(0, 8 - str2.length)

        zero.length > 0 ? arr.push(str2 + zero) : arr.push(str2)
        str = str.slice(8, str.length)
    }

    return arr
}

fn('abc') // abc00000
```
