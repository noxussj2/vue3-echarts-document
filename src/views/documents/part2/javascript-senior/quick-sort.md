<script setup>
import Image2 from "./quick-sort/image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('j30018')
</script>

# <AppCode code="70" /> 快速排序

<ClientOnly><AppRead code="j30018" /></ClientOnly>

## 什么是快速排序（quickSort）？

主要分成两部分实现，分区、递归操作。

**分区**

从数组中任意选择一个 "基准"，所有比基准小的元素放在基准前面，比基准大的元素放在基本后面。

**递归**

递归地对基准前后的子数组进行分区。

## 算法步骤

1. 首先获取数组的第一个值（作为基准）
2. 遍历当前数组，从第二个值开始，比基准元素小的 push 到 left 数组，比基准元素大的 push 到 right 数组。
3. 分别对 left 和 right 数组进行快速排序（递归）
4. 直到当前进行快排的数组长度为 1
5. 开始合并，返回排列好的数组
6. 完成排序

## 动画演示链接

[https://visualgo.net/zh/sorting](https://visualgo.net/zh/sorting)

![image](./merge-sort/image1.gif)

## 示意图

<AppImage2 :src="Image2" width="449.5px" height="345.5px"  />

## 基础案例

-   时间复杂度：O (n \* logn)
-   空间复杂度：O (1)

```javascript
Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) return arr

        const mid = arr[0]
        const left = []
        const right = []

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }

        return [...rec(left), mid, ...rec(right)]
    }

    const res = rec(this)

    res.forEach((n, i) => {
        this[i] = n
    })
}

const arr = [5, 4, 3, 2, 1]

arr.quickSort() // [1, 2, 3, 4, 5]
```

上方代码中递归的复杂度是 O (logn)，只要是涉及到分成两半的都是 logn 。分区操作的时间复杂度为 O (n)，因为循环遍历了 arr 数组。所以整体的时间复杂度为 O (n \* logn)。空间复杂度为 O (1)，因为没有线性增长的变量。

<AppComment />