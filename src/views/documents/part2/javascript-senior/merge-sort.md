<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30017')
</script>

# <AppCode code="69" /> 归并排序

<ClientOnly><AppRead code="j30017" /></ClientOnly>

## 什么是归并排序（mergeSort）？

主要分成两部分实现，分、合操作：

-   分：把数组分成两半，在递归地对子数组进行 "分" 操作，直到分成一个个单独的数
-   合：把两个数组合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组

归并排序就是采用了分而治之的算法设计思想，另外归并排序其实就像擂台赛一样，每两组进行 pk ，最后到半决赛，总决赛类似。

## 算法步骤

1. 通过 Math.floor 将目标数组劈成两半，右边可能会多出来一个
2. 通过递归的方式对刚才分解出来的数组，再次进行劈成两半操作
3. 直到劈成数组变成一个为止
4. 开始进行合并操作，对两个数组进行遍历排序，小的放左边，大的放右边
5. 一直合并到最大的数组
6. 排序完成

## 动画演示链接

[https://visualgo.net/zh/sorting](https://visualgo.net/zh/sorting)

![image](./merge-sort/image1.gif)

## 基础案例

-   时间复杂度：O (n \* logn)
-   空间复杂度：O (1)

```javascript
Array.prototype.mergeSort = function () {
    const rec = (arr) => {
        if (arr.length === 1) return arr

        const mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid, arr.length)
        const orderLeft = rec(left)
        const orderRight = rec(right)
        const res = []

        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else if (orderRight.length) {
                res.push(orderRight.shift())
            }
        }

        return res
    }

    const res = rec(this)

    res.forEach((n, i) => {
        this[i] = n
    })
}

const arr = [5, 4, 3, 2, 1]

arr.mergeSort() // [1, 2, 3, 4, 5]
```

"分" 时间复杂度是 O (logn)，"合" 时间复杂度是 O (n) ，所以整体的时间复杂度为 O (n \* logn)。代码中没有借助其他数据结构来存储线性增长的元素，所以空间复杂度为 O (1) 。

<AppComment />