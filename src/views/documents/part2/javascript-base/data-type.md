<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j10003')
</script>

# <AppCode code="27" /> JavaScript 数据类型

<ClientOnly><AppRead code="j10003" /></ClientOnly>

常见的 ES5 数据类型分为基本数据类型、引用数据类型两种。包含字符串、数字、对象、数组、函数、布尔值、空值、未知。

## 基本数据类型

**String 类型（字符串）**

```javascript
var name = 'xiaoming'
```

<br />

**Number 类型（数字）**

```javascript
var age = 20
```

<br />

**Boolean 类型（布尔值）**

```javascript
var isXiaoMing = true
```

<br />

**Null 类型（空值）**

```javascript
var name = null
```

<br />

**Undefined 类型（未知、找不到）**

```javascript
var name = undefined
```

## 引用数据类型

**Object 类型（对象）**

```javascript
var person = {
    name: 'xiaoming',
    age: 20
}
```

<br />

**Array 类型（数组）**

```javascript
var names = ['xiaoming', 'xiaohong']
```

<br />

**Function 类型（函数）**

```javascript
function toEat() {
    return '我会吃饭'
}
```

## 以上两种数据类型的区别

:::warning 注意
以下概念有点偏向计算机原理了，理解起来可能没那么容易。
:::

基本数据类型和引用数据类型的区别在于它们在内存中存储的方式不同，基本数据类型的数据是存储在栈中，而引用类型的数据是存储在堆中。

### 基本类型存储方式

复制出来独立的一个值。

```javascript
var a = 'xiaoming'
var b = 'libai'
var c = b
```

栈

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>变量名</th>
            <th>变量类型</th>
            <th>变量值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>a</td>
            <td>String</td>
            <td>"xiaoming"</td>
        </tr>
        <tr>
            <td>b</td>
            <td>String</td>
            <td>"libai"</td>
        </tr>
        <tr>
            <td>c</td>
            <td>String</td>
            <td>"libai"</td>
        </tr>
    </tbody>
</table>

### 引用类型存储方式

复制的是指针地址，但是两个地址都是指向同一个数据。

```javascript
var obj1 = { name: 'xiaoming', age: 18 }
var obj2 = obj1
```

栈

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>变量名</th>
            <th>变量类型</th>
            <th>变量值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>a</td>
            <td>Object</td>
            <td>0x000001</td>
        </tr>
        <tr>
            <td>b</td>
            <td>Object</td>
            <td>0x000001</td>
        </tr>
    </tbody>
</table>

堆

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>地址名称</th>
            <th>属性 name</th>
            <th>属性 age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0x000001</td>
            <td>"xiaoming"</td>
            <td>18</td>
        </tr>
    </tbody>
</table>

<AppComment />