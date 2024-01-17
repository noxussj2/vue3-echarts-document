<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30016')
</script>

# <AppCode code="68" /> 插入排序

<ClientOnly><AppRead code="j30016" /></ClientOnly>

## 什么是插入排序（insertionSort）？

在数组中从左到右依次取一个数出来，然后把它放到合适的位置。从思想上可以分为有序区和无序区，有序区在左边代表已经排列好的元素。

## 算法步骤

1. 默认左边第一个元素已经在有序区了
2. 在无序区取一个数出来（第二个元素）
3. 遍历有序区元素，把取出来的元素放到合适的位置上
4. 以此类推，执行 n - 1 轮（无序区为空时）
5. 完成排序

## 动画演示链接

[https://visualgo.net/zh/sorting](https://visualgo.net/zh/sorting)

![image](./insertion-sort/image1.gif)

## 基础案例

-   时间复杂度：O (n ^ 2)
-   空间复杂度：O (1)

```javascript
Array.prototype.insertionSort = function () {
    for (let i = 1; i < this.length; i++) {
        const temp = this[i]

        let j = i

        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1]
            } else {
                break
            }

            j--
        }

        this[j] = temp
    }
}

const arr = [5, 4, 3, 2, 1]

arr.insertionSort() // [1, 2, 3, 4, 5]
```

因为存在两个嵌套循环，所以时间复杂度是 O (n ^ 2)，而时间复杂度是 O (1)，因为没有使用线性增长的数据结构。

<AppComment />