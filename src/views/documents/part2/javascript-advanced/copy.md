<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20011')
</script>

# <AppCode code="43" /> 对象的浅拷贝和深拷贝

<ClientOnly><AppRead code="j20011" /></ClientOnly>

以下主要介绍了正常情况下的拷贝、浅拷贝、深拷贝三种方式的区别。

-   正常拷贝：复制一个对象，它们的内存地址是相同的
-   浅拷贝：拷贝对象的第一层属性
-   深拷贝：拷贝对象多层的属性

## 正常拷贝

假设我们要复制一个对象，如果不对其进行深拷贝，那么改变其中一个对象后，另外一个对象也会跟着改变。

```javascript
const a = {
    age: 20
}

const b = a

b.age = 30

console.log(a.age) // 30
```

这并不是我们想要的效果，所以想要复制一个全新的对象时，我们可以通过浅拷贝来实现。

## 浅拷贝

**方式一**

```javascript
const a = {
    name: 'xiaoming',
    age: 20
}

const b = { name: a.name, age: a.age }

b.age = 30

console.log(a.age) // 20
```

这种方式就不太灵活，要拷贝的对象属性越多，自己手写的属性就越多。

<br />

**方式二**

```javascript
const a = {
    name: 'xiaoming',
    age: 20
}

const b = {}

for (const key in a) {
    b[key] = a[key]
}

b.age = 30

console.log(a.age) // 20
```

通过遍历的方式，无论旧对象的属性有多少个，都可以自动拷贝到新的对象上。
以上方式由于是浅拷贝只能拷贝对象的一层属性，对于对象有多层属性依然是存在同样的问题。

```javascript
const a = {
    name: 'xiaoming',
    age: 20,
    children: {
        name: 'libai',
        age: 20
    }
}

const b = {}

for (const key in a) {
    b[key] = a[key]
}

b.children.age = 30

console.log(a.children.age) // 30
```

我们把对象 b 的 children 属性改变后，对象 a 的 children 属性也会跟着改变，这也不是我们想要的效果，所以我们可以通过对象的深度拷贝实现（拷贝无限深的层级）。

## 深拷贝

**方式一**

```javascript
const a = {
    name: 'xiaoming',
    age: 20,
    children: {
        name: 'libai',
        age: 20
    }
}

const b = JSON.parse(JSON.stringify(a))

b.children.age = 30

console.log(a.children.age) // 20
```

通过 JSON 类来实现，实现起来非常简单，首先把对象转成 JSON 字符串，然后在把 JSON 字符串转成对象。但是这种方式依然存在问题，假设我的对象里面有 function 属性等其他非值类型属性，那就无法拷贝了。

```javascript
const a = {
    name: 'xiaoming',
    age: 20,
    children: {
        name: 'libai',
        age: 20
    },
    eat: function () {
        console.log('i am eat')
    }
}

const b = JSON.parse(JSON.stringify(a))

console.log(b.eat) // undefined
```

<br />

**方式二**

使用递归（深度优先搜索）方式，这种就是最稳定的一种方式，但是实现起来也是比较复杂，就是将对象的每一层属性都遍历出来，赋值给新的对象。

这里简单介绍一下什么是递归，就是在一个函数内部中再次调用自己，当达到一定条件后停止调用。

```javascript
// 类型字典
function type(data) {
    let dist = {
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object Number]': 'number',
        '[object Function]': 'function',
        '[object String]': 'string',
        '[object Null]': 'null',
        '[object Undefined]': 'undefined'
    }

    return dist[Object.prototype.toString.call(data)]
}

// 深度优先遍历
function dfs(data) {
    let newData

    if (type(data) === 'array') {
        newData = []
        data.map((item, index) => {
            newData[index] = dfs(item)
        })
    } else if (type(data) === 'object') {
        newData = {}
        Object.keys(data).map((item) => {
            newData[item] = dfs(data[item])
        })
    } else {
        newData = data
    }

    return newData
}
```

```javascript
const a = {
    name: 'xiaoming',
    age: 20,
    children: {
        name: 'libai',
        age: 20
    },
    eat: function () {
        console.log('i am eat')
    }
}

const b = dfs(a)

b.eat() // i am eat
```

<AppComment />