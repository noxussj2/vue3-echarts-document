<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30015')
</script>

# <AppCode code="67" /> 选择排序

<ClientOnly><AppRead code="j30015" /></ClientOnly>

## 什么是选择排序（selectSort）？

选择排序就是在一个排列中划分为有序区和无序区，有序区在左边，无序区在右边。首先在无序区中找到最小元素，存放到有序区的起始位置，然后再从剩余的无序区中继续寻找最小元素，然后放到有序区的末尾。以此类推，直到无序区没有元素可排列。

## 算法步骤

1. 首先在数组中查找出最小的元素
2. 把当前最小元素放在数组的第一位
3. 继续查找数组中最小的元素（不包含刚才找过的最小元素）
4. 把当前最小元素放在数组的第二位
5. 以此类推，执行 n - 1 轮
6. 完成排序

## 动画演示链接

[https://visualgo.net/zh/sorting](https://visualgo.net/zh/sorting)

![image](./select-sort/image1.gif)

## 基础案例

-   时间复杂度：O (n ^ 2)
-   空间复杂度：O (1)

```javascript
Array.prototype.selectSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let indexMin = i

        for (let j = i; j < this.length; j++) {
            if (this[j] < this[indexMin]) {
                indexMin = j
            }
        }

        if (indexMin !== i) {
            const temp = this[i]
            this[i] = this[indexMin]
            this[indexMin] = temp
        }
    }
}

const arr = [5, 4, 3, 2, 1]

arr.selectSort() // [1, 2, 3, 4, 5]
```

因为存在两个嵌套循环，所以时间复杂度是 O (n ^ 2)，而时间复杂度是 O (1)，因为没有使用线性增长的数据结构。

<AppComment />