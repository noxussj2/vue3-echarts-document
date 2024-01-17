<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30020')
</script>

# <AppCode code="72" /> 二分搜索

<ClientOnly><AppRead code="j30020" /></ClientOnly>

## 什么是二分搜索？

二分搜索是一种比较高效的搜索算法，但前提必须是有序数组。主要步骤如下：

1. 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
2. 如果目标值大于或者小于中间元素，则在大于或者小于中间元素的那一半数组中继续二分搜索

## 基础案例

-   时间复杂度：O (logn)
-   空间复杂度：O (1)

```javascript
Array.prototype.binarySearch = function (target) {
    let low = 0
    let high = this.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const element = this[mid]

        if (element < target) {
            low = mid + 1
        } else if (element > target) {
            high = mid - 1
        } else {
            return mid
        }
    }

    return -1
}

const res = [1, 2, 3, 4, 5].binarySearch(1) // 0
```

因为每次比较都使搜索范围缩小一半，所以时间复杂度是 O (logn)。而空间复杂度是 O (1)，因为没有使用线性增长的变量。

<AppComment />