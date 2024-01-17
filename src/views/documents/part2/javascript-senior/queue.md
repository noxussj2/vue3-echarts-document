<script setup>
import Image1 from "./queue/image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('j30005')
</script>

# <AppCode code="57" /> 队列

<ClientOnly><AppRead code="j30005" /></ClientOnly>

## 什么是队列？

队列是一种遵循先进先出原则的有序集合，添加新元素的一端称为队尾，另一端称为队首。

<AppImage :src="Image1" />

## 实现功能

在 JavaScript 中没有队列，但是可以通过 Array 实现队列的所有功能

-   enqueue () 入队
-   dequeue () 出队
-   top () 获取队首值
-   size () 获取队列的元素个数
-   clear () 清空队列

## 应用场景

-   JavaScript 异步任务中的任务队列
-   计算最近请求次数

## 基础案例

通过数组实现

```javascript
const queue = []
queue.push(1) // 入队
queue.shift() // 出队
const top = queue[0] // 获取队首值
const size = queue.length // 获取队列的元素个数
queue.length = 0 // 清空队列
```

通过类模拟实现

```javascript
class Queue {
    constructor() {
        this.data = {}
        this.count = 0
    }

    /**
     * 入队
     */
    enqueue(item) {
        this.data[this.count++] = item

        return item
    }

    /**
     * 出队
     */
    dequeue() {
        if (this.count > 0) {
            const item = this.data[0]

            delete this.data[0]

            this.count--

            return item
        } else {
            return -1
        }
    }

    /**
     * 获取队首值
     */
    top() {
        if (this.count > 0) {
            return this.data[0]
        } else {
            return -1
        }
    }

    /**
     * 获取队列的元素个数
     */
    size() {
        return this.count
    }

    /**
     * 清空队列
     */
    clear() {
        this.data = {}
        this.count = 0

        return {}
    }
}

const queue = new Queue()

queue.enqueue('a')
queue.enqueue('b')
```

<AppComment />