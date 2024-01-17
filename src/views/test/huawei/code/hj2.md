<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'
loginRead('n10017')
</script>

# 计算某字符出现次数

<ClientOnly><AppRead code="n10017" /></ClientOnly>

## 题目描述

编写一个函数，该函数接收两个参数，分别是字符串和字符。请统计出该字符在字符串中出现的次数。

:::info 提示

-   字符串可以由字母、数字、空格组成

-   统计次数：1 ≤ n ≤ 2000

-   不区分大小写

-   字符不能为空

-   第一行输入一个由字母、数字和空格组成的字符串，第二行输入一个字符（保证该字符不为空格）。

:::

:::tip 示例 1
输入：fn('ABCabc', 'A')

输出：2
:::

## 实现代码

```javascript
function fn(_str, _key) {
    const str = String(_str).toLowerCase() // 将字符串转为小写
    const key = String(_key).toLowerCase() // 将字符转为小写
    const arr = str.split(key)
    return arr.length - 1
}

fn('ABCabc', 'A') // 2
```
