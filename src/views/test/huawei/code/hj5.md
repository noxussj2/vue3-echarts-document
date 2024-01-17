<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'
loginRead('n10017')
</script>

# 进制转换

<ClientOnly><AppRead code="n10017" /></ClientOnly>

## 题目描述

请编写一个函数，该函数接收一个十六进制的数值参数，输出该数值的十进制表示。

:::info 提示

-   如果传入的不是十六进制就原路返回

:::

:::tip 示例 1
输入：0xAA

输出：170
:::

## 实现代码

```javascript
function fn(str) {
    if (/^0[xX][0-9a-fA-F]+/g.test(str) === false) return str
    const str2 = String(str).toLowerCase().replace('0x', '')
    const map = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    const arr = str2.split('')
    let count = 0
    let index = 0

    while (arr.length) {
        const key = arr.pop()
        count += (map.indexOf(key) + 1) * Math.pow(16, index)
        index++
    }

    return count
}

fn('0xAA') // abc00000
```
