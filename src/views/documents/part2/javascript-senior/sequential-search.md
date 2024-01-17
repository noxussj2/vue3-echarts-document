<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30019')
</script>

# <AppCode code="71" /> 顺序搜索

<ClientOnly><AppRead code="j30019" /></ClientOnly>

## 什么是顺序搜索？

顺序搜索是一种比较低效的搜索算法，但是实现起来相对简单。主要步骤如下：

1. 遍历数组
2. 找到跟目标值相等的元素，就返回它的下标
3. 遍历结束后，如果没有搜索到目标值，则返回 -1

## 基础案例

-   时间复杂度：O (n)
-   空间复杂度：O (1)

```javascript
Array.prototype.sequentialSearch = function (target) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === target) {
            return i
        }
    }

    return -1
}

const res = [1, 2, 3, 4, 5].sequentialSearch(1) // 0
```

由于代码中遍历了数组，所以时间复杂度为 O (n)。而空间复杂度为 O (1) 因为没有使用会线性增长的变量。

<AppComment />