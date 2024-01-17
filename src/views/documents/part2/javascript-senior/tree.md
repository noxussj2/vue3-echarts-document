<script setup>
import Image1 from "./tree/image1.png"
import Image2 from "./tree/image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('j30009')
</script>

# <AppCode code="61" /> 树

<ClientOnly><AppRead code="j30009" /></ClientOnly>

## 什么是树？

在生活中，大家对树肯定不陌生，小朋友都知道树不就是一类植物嘛，不管在任何地方都有各种各样的树。但是在计算机科学里面树是什么呢？一种分层数据的抽象模型，在我们前端工作中无处不在。在 JavaScript 中没有树这种数据结构，但是可以通过 Object 和 Array 这两个数据结构构建树。

## 深度与广度优先遍历

### 深度优先遍历

尽可能深的搜索树的分支，主要通过递归实现。

**口诀：**

1. 访问根阶段
2. 对根节点的 children 每个元素进行深度优先遍历

<AppImage2 :src="Image1" />

```javascript
function dfs(root) {
    console.log(root.value)

    root.children.forEach(dfs)
}
```

### 广度优先遍历

先访问离根节点最近的节点，主要通过队列实现。

**口诀：**

1. 新建一个队列，把根节点入队
2. 把队头出队并访问
3. 把队头的 children 元素分别入队
4. 重复 2 和 3 步骤，直到队列为空

<AppImage2 :src="Image2" />

```javascript
function bfs(root) {
    const q = [root]

    while (q.length) {
        const n = q.shift()

        console.log(n)

        n.children.forEach((child) => {
            q.push(child)
        })
    }
}
```

## 常用操作

-   深度优先遍历
-   广度优先遍历

## 应用场景

1. DOM 树
2. 级联选择
3. 树形控件
4. 组织架构图

<AppComment />