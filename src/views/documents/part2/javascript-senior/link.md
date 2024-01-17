<script setup>
import Image1 from "./link/image1.png"
import Image2 from "./link/image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('j30006')
</script>

# <AppCode code="58" /> 链表

<ClientOnly><AppRead code="j30006" /></ClientOnly>

## 什么是链表？

链表是有序的数据结构，链表中的每个部分称为节点。可以首、尾、中间进行数据存取，链表的元素在内存中不必是连续的空间，每个节点通过 next 指针指向下一个节点。

<AppImage :src="Image1" />

**优点**

链表的添加和删除不会导致其余元素位移。

**缺点**

无法根据索引快速定位元素。

**数组和链表区别**

-   获取、修改元素时，数组效率高
-   添加、删除元素时，链表效率高
-   数组添加、移除会导致后续元素位移，性能开销大

**环形链表**

指的是链表最后一个节点的 next 指向第一个节点，形成首尾相连的循环结构。

## 链表环路检测

解题思路

1. 快慢指针法实现
2. slow 指针每次移动一位，fast 指针每次移动两位，如果他们相遇则说明链表存在环
3. 新指针 ptr 从 head 开始移动，与 slow 相遇的位置即为环的起点
4. 由 fast 指针移动距离为 slow 的两倍可得出公式： a + (nb + nc + b) = 2(a + b)
5. 变化处理后得到新公式： a = (n - 1)(b + c) + c

<AppImage :src="Image2" />

## 实现功能

在 JavaScript 中没有链表，我们可以通过模拟一个类或者是通过 Object 实现链表的所有功能。

**节点类**

-   value 当前节点值
-   next 指向下一个节点

**链表类**

-   addAtTail 尾部添加节点
-   addAtHead 头部添加节点
-   addAtIndex () 指定位置添加节点
-   get 获取节点
-   removeAtIndex () 删除指定节点

## 应用场景

-   leetcode 两数相加

## 基础案例

通过对象实现

```javascript
// 链表
let a = { val: 'a', next: null }
let b = { val: 'b', next: null }
let c = { val: 'c', next: null }
let d = { val: 'd', next: null }

a.next = b
b.next = c
c.next = d

// 尾部添加节点
let e = { val: 'e', next: null }
d.next = e

// 头部添加节点
let z = { val: 'z', next: null }
z.next = a
a = z

// 指定位置添加节点
let f = { val: 'f', next: null }
c.next = f
f.next = d

// 删除指定节点
d.next = null
```

通过类模拟实现

```javascript
/**
 * 节点类
 */
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

/**
 * 链表类
 */
class Link {
    constructor() {
        this.head = null
        this.count = 0
    }

    /**
     * 尾部添加节点
     */
    addAtTail(item) {
        if (this.count === 0) {
            this.head = new Node(item)

            this.count++

            return this.head
        }

        let endNode = this.head

        while (endNode.next) {
            endNode = endNode.next
        }

        endNode.next = new Node(item)

        this.count++

        return item
    }

    /**
     * 头部添加节点
     */
    addAtHead(item) {
        if (this.head) {
            const oldHead = this.head

            this.head = new Node(item)
            this.head.next = oldHead
        } else {
            this.head = new Node(item)
        }

        this.count++

        return item
    }

    /**
     * 指定位置添加节点
     */
    addAtIndex(index, item) {
        if (this.isInvalidIndex(index) || !this.head) {
            return -1
        }

        if (index === 0) {
            this.addAtHead(item)

            return item
        }

        let prev = this.head

        while (index > 0) {
            index--
        }

        const next = prev.next

        const cur = new Node(item)

        prev.next = cur
        cur.next = next

        this.count++

        return item
    }

    /**
     * 获取节点
     */
    get(index) {
        if (this.isInvalidIndex(index) || !this.head) {
            return -1
        }

        let cur = this.head

        while (index > 0) {
            cur = cur.next

            index--
        }

        return cur
    }

    /**
     * 删除指定节点
     */
    removeAtIndex(index) {
        if (this.isInvalidIndex(index) || !this.head) {
            return -1
        }

        if (index === 0) {
            const oldHead = this.head
            this.head = this.head.next

            this.count--

            return oldHead
        }

        let prev = this.head

        while (index - 1 > 0) {
            prev = prev.next

            index--
        }

        const cur = prev.next

        prev.next = cur.next

        this.count--

        return cur
    }

    /**
     * 判断index是否为空，是否超出数据长度大小
     */
    isInvalidIndex(index) {
        if (index === '' || index === null || index === undefined || index < 0 || index > this.count - 1) {
            return true
        }

        return false
    }
}

const link = new Link()

link.addAtTail('a')
link.addAtTail('b')
link.addAtTail('c')
```

<AppComment />