<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('e10002')
</script>

# <AppCode code="78" /> ES6 新特性

<ClientOnly><AppRead code="e10002" /></ClientOnly>

## 基础使用

**let**

块级作用域，也就是在同一个作用域内，不能够重复声明同一个变量。

```javascript
let name = 'xiaoming'
```

**const**

在 let 的基础上，声明的变量不能够被重新赋值。

```javascript
const name = 'xiaoming'
```

**解构赋值**

简化对象获取属性、简化数组获取元素的写法。

```javascript
const [a, b, c] = [1, 2, 3]

const { name, age } = { name: 'xiaoming', age: 18 }
```

**扩展运算符**

把对象的属性、数组的元素拆散成单个。

```javascript
const arr = [1, 2, 3]
const arr2 = [...arr]

const obj = { name: 'xiaoming', age: 18 }
const obj2 = { ...obj }
```

**模板字符串**

简化字符串拼接 + 写法。

```javascript
const name = 'xiaoming'

const res = `i am ${name}`
```

**箭头函数**

简化 function 写法，没有 this 指向。

```javascript
const fn = (name) => {
    return name
}

const fn = (name) => name
```

**for...of**

循环语句（只能遍历数组），与 for...in 类似， for...in 是返回 key ，而 for...of 是返回 value 。

```javascript
for (const value of arr) {
    console.log(value)
}
```

**Promise**

异步函数，延迟返回函数结果。

```javascript
const score = 80

const p1 = new Promise((resolve, reject) => {
    if (score > 60) {
        resolve('考试通过了')
    } else {
        reject('考试不通过')
    }
})

// 成功
p1.then((res) => {
    console.log(res) // 考试通过了
})

// 失败
p1.then((res) => {
    console.log(res) // 考试不通过
})
```

**Async、Await**

异步函数，暂时可以理解为是 Promise 的语法糖（但实际不是），语法糖就理解是简化代码的意思。主要是让异步的代码写起来更像同步代码。

```javascript
async function fn() {
    const res = await p1
}
```

**Class**

简化使用 function 实现类（构造函数）的写法。

```javascript
class Person {
    constructor() {}
    myName() {}
}
```

**ESM 模块化（import、export）**

导出（a.js）。

```javascript
const name = 'xiaoming'

export { name }
```

导入（b.js）。

```javascript
import { name } from './a.js'
```

**Map**

数据结构字典，是一种无序且唯一的数据结构。

```javascript
const map = new Map()

map.set('name', 'xiaoming')
```

**Set**

数据结构集合，是一种无序且唯一的数据结构。

```javascript
const set = new Set()

set.add(1)
```

## 数组扩展方法

**includes()**

检测数组中是否包含某个元素。

```javascript
const arr = ['xiaoming', 'libai', 'anqila']

const res1 = arr.includes('xiaoming') // true

const res2 = arr.includes('sunshangxiang') // false
```

**find()**

查找数组中满足条件的那一项。

```javascript
const arr = [
    {
        name: 'xiaoming',
        age: 16
    },
    {
        name: 'libai',
        age: 17
    },
    {
        name: 'anqila',
        age: 18
    }
]

const res = arr.find((item) => item.name === 'xiaoming') // {name: 'xiaoming', age: 16}
```

**findIndex()**

查找数据中满足条件的那一项的索引。

```javascript
const arr = [
    {
        name: 'xiaoming',
        age: 16
    },
    {
        name: 'libai',
        age: 17
    },
    {
        name: 'anqila',
        age: 18
    }
]

const res = arr.findIndex((item) => item.name === 'xiaoming') // 0
```

**map()**

遍历数组。

```javascript
const arr = ['xiaoming', 'libai', 'anqila']

arr.map((item, index) => {
    console.log(item, index) // 分别打印 xiaoming 0、libai 1、anqila 2
})
```

**fill()**

遍历数组。

```javascript
new Array(3).fill('xiaoming') // ['xiaoming', 'xiaoming', 'xiaoming']
```

**sort()**

数组排序。

```javascript
const arr = ['b', 'a', 'c']

const arr2 = arr.sort((a, b) => (a > b ? 1 : -1)) // ['a', 'b', 'c']
```

**filter()**

数组过滤。

```javascript
const arr = ['b', 'a', 'c']

const arr2 = arr.filter((x) => x !== 'a') // ['b', 'c']
```

**some()**

判断数组中任意一项满足条件

```javascript
const arr = ['b', 'a', 'c']

const res = arr.some((x) => x === 'a') // true
```

**every()**

判断数组中所有项满足条件

```javascript
const arr = ['b', 'a', 'c']

const res = arr.every((x) => x === 'a') // false
```

## 对象扩展方法

**Object.assign()**

对象浅拷贝。

```javascript
const obj = {
    name: 'xiaoming',
    age: 18
}

const obj2 = Object.assign({}, obj)

obj2.name = 'libai'

console.log(obj.name) // 'xiaoming'
```

**Object.keys()**

提取对象的所有键组成一个数组返回。

```javascript
const obj = {
    name: 'xiaoming',
    age: 18
}

const keys = Object.keys(obj) // ['name', 'age']
```

**Object.values()**

提取对象的所有值组成一个数组返回。

```javascript
const obj = {
    name: 'xiaoming',
    age: 18
}

const values = Object.values(obj) // ['xiaoming', 18]
```

## ESM 模块化

历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单。

:::warning 注意
ESM 必须应用在 script 标签 type="module" 下才能够生效，并且必须把项目部署到服务端运行，否则在本地直接双击打开 index.html 文件会报错。VS Code 提供了把项目运行在服务端的插件，如有需要请查看 [Live Server](/documents/part1/html5/vscode.html#扩展插件)
:::

**默认导出**

标准语法：`export default $variable`

解析：其中 `$variable` 指的是要导出的变量名称。

```javascript
// index.js

const person = {
    name: 'xiaoming',
    age: 18
}

export default person
```

<br />

**按需导出**

标准语法：`export { $variable1, $variable2 }`

解析：其中 `$variable1` `$variable2` 指的是要导出的变量名称，导出多个的写法用逗号分隔。

```javascript
// index2.js

const name = 'xiaoming'
const age = 18

export { name, age }
```

<br />

**默认导入**

标准语法：`import $variable from $path`

解析：其中 `$variable` 指的是要导入的变量名称，名称是可以自定义的，并非要求和导出的时候一样， `$path` 指的是导入的文件路径。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script type="module">
            import person from 'index.js'

            console.log(person)
        </script>
    </body>
</html>
```

<br />

**按需导入**

标准语法：`import { $variable1, $variable2 } from $path`

解析：其中 `$variable1` `$variable2` 指的是要导入的变量名称，名称必须和导出时一致， `$path` 指的是导入的文件路径。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script type="module">
            import { name } from 'index2.js'

            console.log(name)
        </script>
    </body>
</html>
```

<br />

**总结**

当然不止是能导入 `.js` 文件，还能导入 `.scss` `.vue` `.png` 等等资源文件，基本上都需要搭配 webpack 中的 loader 去解析对应的文件，因为有些文件浏览器是不认识的。这些知识后面都会讲到。

<AppComment />