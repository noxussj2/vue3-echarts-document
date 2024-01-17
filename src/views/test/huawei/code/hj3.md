<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'
loginRead('n10017')
</script>

# 明明的随机数

<ClientOnly><AppRead code="n10017" /></ClientOnly>

## 题目描述

请编写一个函数，该函数接收 n 个参数，每一个参数都为 1 - 500 之间的整数，请你删除重复的数字，相同的数字只保留一个，最后在将保留的数字进行从小到大排序。

:::info 提示

-   参数数量不是固定的：1 ≤ n ≤ 1000

:::

:::tip 示例 1
输入：fn(2,2,1)

输出：1 2
:::

## 实现代码

```javascript
function fn() {
    const arr = []

    // 去重
    for (let index = 0; index < arguments.length; index++) {
        const item = arguments[index]
        if (arr.indexOf(item) === -1) {
            let _i = 0

            // 排序
            for (let i = 0; i < arr.length; i++) {
                const x = arr[i]
                _i = Number(x) > Number(item) ? i : i + 1
                if (Number(x) > Number(item)) break
            }

            arr.splice(_i, 0, item)
        }
    }

    return arr
}

fn(6, 6, 8, 1, 1, 1, 2, 3) // [ 1, 2, 3, 6, 8 ]
```
