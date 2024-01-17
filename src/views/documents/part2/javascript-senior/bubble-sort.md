<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30014')
</script>

# <AppCode code="66" /> 冒泡排序

<ClientOnly><AppRead code="j30014" /></ClientOnly>

## 什么是冒泡排序（bubbleSort）？

冒泡排序是所有排序算法中最简单的一种，当然也是性能最差的一种。冒泡排序的思想其实很简单，就如它的名字一样在水中 "冒泡"。水中有很多散乱的小气泡，然后一个个气泡往水面上冒出。

例如一组无序的数组，最左边就是水底，最右边就是水面，最左边的元素不断的跟右边的元素比较，最后交换位置到最右边。

## 算法步骤

1. 冒泡排序会比较所有相邻的元素
2. 从第一个数开始，每两个相邻的数进行比较
3. 这两个相邻的数比较完后，按照小的放在左边，大的放在右边的想法，交换它们的位置
4. 执行完一轮后，大的数就会被排到最右边
5. 反反复复重复 n - 1 遍后，整个排序就完成了

## 动画演示链接

[https://visualgo.net/zh/sorting](https://visualgo.net/zh/sorting)

![image](./bubble-sort/image1.gif)

## 基础案例

-   时间复杂度：O (n ^ 2)
-   空间复杂度：O (1)

```javascript
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                const temp = this[j]
                this[j] = this[j + 1]
                this[j + 1] = temp
            }
        }
    }
}

const arr = [5, 4, 3, 2, 1]

arr.bubbleSort() // [1, 2, 3, 4, 5]
```

代码中存在两个嵌套循环，所以时间复杂度是 O (n ^ 2)，而空间复杂度是 O (1)，因为没有使用会随着数据增大而增大的变量。

<AppComment />