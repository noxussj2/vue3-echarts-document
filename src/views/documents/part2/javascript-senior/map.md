<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j30008')
</script>

# <AppCode code="60" /> 字典

<ClientOnly><AppRead code="j30008" /></ClientOnly>

## 什么是字典？

与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式来存储。在 ES6 中新增了 Map 字典。

## 实现功能

-   delete 删除元素
-   clear 清空所有元素
-   set 添加/覆盖元素
-   get 查找/返回元素的值
-   has 判断是否包含某个元素

## 应用场景

1. 两个数组的交集
2. 有效的括号
3. 两数之和

## 基础案例

```javascript
// 字典
const map = new Map()

// 添加元素
map.set('name', 'xiaoming')
map.set('name2', 'libai')

// 覆盖元素
map.set('name2', 'xiaohong')

// 获取元素
const name2 = map.get('name2') // xiaohong

// 判断是否包含某个元素
const has = map.has('name2') // true

// 删除元素
map.delete('name2')

// 清空所有元素
map.clear()
```

<AppComment />