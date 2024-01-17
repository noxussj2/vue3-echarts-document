<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30007')
</script>

# <AppCode code="59" /> 集合

<ClientOnly><AppRead code="j30007" /></ClientOnly>

## 什么是集合？

集合是一种无序且唯一的数据结构，其中的唯一是指集合中的元素。在 ES6 中新增了一种数据结构 Set 就是集合。

## 实现功能

-   new() 实例化一个集合
-   add() 添加元素
-   delete() 删除元素
-   has() 判断是否存在元素
-   size() 获取集合大小

## 应用场景

1. 去重
2. 判断某元素是否在集合中
3. 求两个集合的交集

## 基础案例

常用操作

```javascript
const set = new Set()

// 添加 set 元素
set.add(1)
set.add(5)
set.add(5)
set.add('some text')
const o = { a: 1 }
set.add(o)
set.add({ a: 1 })

// 判断元素是否存在 set 中
const has = set.has('some text') // true

// 删除 set 元素
set.delete(5)

// 迭代
for (const item of set) {
    console.log(item)
}
```

应用场景

```javascript
// 去重
const arr = [1, 1, 2, 2]
const arr2 = [...new Set(arr)] // [1, 2]

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(3) // false

// 求交集
const set2 = new Set([2, 3])
const set3 = [...set].filter((x) => set2.has(x)) // [2]
```

<AppComment />