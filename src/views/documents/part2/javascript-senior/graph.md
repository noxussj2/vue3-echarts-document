<script setup>
import Image1 from "./graph/image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('j30011')
</script>

# <AppCode code="63" /> 图

<ClientOnly><AppRead code="j30011" /></ClientOnly>

## 什么是图？

图是网络结构的抽象模型，是一组由边连接的节点。图可以表示任何二元关系，比如道路、航班等。在 JavaScript 中没有图，但是可以通过 Object 和 Array 来构建图。

## 常用操作

-   深度优先遍历
-   广度优先遍历

## 图的表示法

-   邻接矩阵
-   邻接表
-   关联矩阵
-   ...

<AppImage2 :src="Image1" />

**邻接矩阵**

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>A</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>B</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>C</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>D</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>E</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
    </tbody>
</table>

**邻接表**

并非仅限于通过对象/数组表示，其他形式也可以。

```json
{
    "A": ["B"],
    "B": ["C", "D"],
    "C": ["E"],
    "D": ["A"],
    "E": ["D"]
}
```

## 图的深度/广度优先遍历

### 深度优先遍历

尽可能深的搜索图的分支。

**口诀：**

1. 先访问根节点
2. 对根节点的没访问过的相邻节点挨个进行深度优先遍历（因为相邻节点可能也会指向当前节点）

```javascript
const graph = {
    A: ['B'],
    B: ['C', 'D'],
    C: ['E'],
    D: ['A'],
    E: ['D']
}

const visited = new Set()

const dfs = (n) => {
    console.log(n)

    visited.add(n)

    graph[n].forEach((item) => {
        if (!visited.has(item)) {
            dfs(item)
        }
    })
}

dfs('A') // A B C E D
```

### 广度优先遍历

先访问离根节点最新的节点。

**口诀：**

1. 新建一个队列，把根节点入队
2. 把队头出队并访问
3. 把队头的没有访问过的相邻节点入队
4. 重复第 2、3 步直到队列为空

```javascript
const graph = {
    A: ['B'],
    B: ['C', 'D'],
    C: ['E'],
    D: ['A'],
    E: ['D']
}

const bfs = (head) => {
    const visited = new Set()

    visited.add(head)

    const q = [head]

    while (q.length) {
        const n = q.shift()

        console.log(n)

        graph[n].forEach((item) => {
            if (!visited.has(item)) {
                q.push(item)
                visited.add(item)
            }
        })
    }
}

bfs('A') // A B C D E
```

<AppComment />