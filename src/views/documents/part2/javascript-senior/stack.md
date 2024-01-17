<script setup>
import Image1 from "./stack/image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('j30004')
</script>

# <AppCode code="56" /> 什么是栈？

<ClientOnly><AppRead code="j30004" /></ClientOnly>

栈是基础数据结构，栈是一种遵循后进先出原则的有序集合，添加新元素的一端称为栈顶，另一端称为栈底。操作栈的元素时，只能从栈顶操作（添加、移除、取值）。

<AppImage :src="Image1" />

## 实现功能

在 JavaScript 中没有栈，但是可以通过 Array 实现栈的所有功能

-   push () 入栈
-   pop () 出栈
-   top () 获取栈顶值
-   size () 获取栈的元素个数
-   clear () 清空栈

## 应用场景

-   十进制转二进制
-   判断字符串的括号是否有效
-   函数调用堆栈
-   二叉树前序遍历（迭代方式）
-   ...

## 基础案例

通过数组实现

```javascript
const stack = [1]
stack.push(2) // 入栈
stack.pop() // 出栈
const top = stack[0] // 获取栈顶值
const size = stack.length // 获取栈的元素个数
stack.length = 0 // 清空栈
```

通过类模拟实现

```javascript
class Stack {
    constructor() {
        this.data = {}
        this.count = 0
    }

    /**
     * 入栈
     */
    push(item) {
        this.data[this.count++] = item

        return item
    }

    /**
     * 出栈
     */
    pop() {
        if (this.count > 0) {
            const item = this.data[this.count - 1]
            delete this.data[--this.count]

            return item
        } else {
            return -1
        }
    }

    /**
     * 获取栈顶值
     */
    top() {
        if (this.count > 0) {
            return this.data[this.count - 1]
        } else {
            return -1
        }
    }

    /**
     * 获取栈的元素个数
     */
    size() {
        return this.count
    }

    /**
     * 清空栈
     */
    clear() {
        this.data = {}
        this.count = 0
    }
}

const stack = new Stack()

stack.push('a')
stack.push('b')
stack.push('c')

stack.pop()
```

<AppComment />