<script setup>
import Image1 from "./scope/image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('j20008')
</script>

# <AppCode code="40" /> 作用域

<ClientOnly><AppRead code="j20008" /></ClientOnly>

## 变量作用域

一个变量的作用域（scope）是程序源代码中定义这个变量的区域。全局变量拥有全局作用域，在 JavaScript 代码中的任何地方都是可以访问的。然而在函数内声明的变量只能在函数体内访问，它们是局部变量，作用域是局部性的。函数参数也是局部变量，它们只能在函数体内访问。

在函数体内，局部变量的优先级高于同名的全局变量。如果在函数内声明一个局部变量或者函数参数中带有的变量和全局变量重名，那么全局变量就会被局部变量所覆盖。

```javascript
var scope = 'global'

function checkscope() {
    var scope = 'local'

    return scope
}

checkscope() // 'local'
```

## 函数作用域和声明提前

JavaScript 的函数作用域是指在函数内声明的所有变量在函数体内任何地方都是可以访问的，这意味着变量在声明之前就可以访问了。JavaScript 的这个特性被非正式的称为声明提前（hoisting），即 JavaScript 函数内声明的所有变量（不包含赋值）都被提升至函数体的顶部。声明提前这步操作是在 JS 引擎预编译时进行的，也就是在代码开始运行之前。

```javascript
function test() {
    var i = 2

    if (true) {
        var j = 0

        for (var k = 0; k < 10; k++) {}

        console.log(k) // 10
    }

    console.log(j) // 0
}

test()
```

以上代码，在不同位置定义了变量 i、j、k，但是它们都在同一个函数作用域内。由于声明提前的特性，这三个变量在函数体内任何地方都是可以访问的。

声明提前后相当于下图的效果：

```javascript
function test() {
    var i
    var k
    var j

    i = 2

    if (true) {
        j = 0

        for (k = 0; k < 10; k++) {}

        console.log(k) // 10
    }

    console.log(j) // 0
}

test()
```

## 作用域链

如果将一个局部变量看做是自定义实现的对象的属性的话，那么可以换个角度来解读变量作用域。每一段 JavaScript 代码（全局代码或函数）都有一个与之关联的作用域链（scope chain）。这个作用域链是一个对象或者链表，这组对象定义了这段代码作用域中的变量。在这里涉及到了链表的概念，本来也是打算留在数据结构算法再讲的，但是这里用到了就简单介绍一下什么是链表。

:::tip 超前知识
链表是有序的数据结构，链表中的每个部分称为节点。每个节点都包含两个属性，一个是 value 主要存放当前节点的数据，另外一个是 next 主要用来指向下一个节点。
:::

### 作用域链查找过程

```javascript
var x = 10
var y = 10

function a() {
    var y = 20

    function b() {
        var y = 30

        console.log(x)
    }

    b()
}

a()
```

从上面的代码我们可以得出，全局对象 window 上存在 x 和 y 属性。当前存在三个作用域，一个是全局作用域，一个作用域 a、另外一个是作用域 b。

链表结构如下

<AppImage :src="Image1" />

链表代码如下

```javascript
var window = {
    value: {
        x: 10,
        y: 10
    },
    next: null
}

var a = {
    value: {
        y: 20
    },
    next: window
}

var b = {
    value: {
        x: 30
    },
    next: a
}
```

当 JavaScript 需要查找变量 x 的值的时候（这个过程称为变量解析 variable resolution），它会从链表的第一个对象开始查找，如果这个对象有一个名为 x 的属性，则会直接使用这个属性的值，如果第一个对象中不存在名为 x 的属性，则会继续查找下一个对象（通过链表节点的 next），以此类推（链表的最后一个对象就是全局对象）。如果作用域链上没有任何一个对象含有 x 的属性，那么就会认为这段代码的作用域链上不存在 x，并最终抛出一个引用错误异常 Uncaught ReferenceError: x is not defined。

### 作用域链创建过程

当定义一个函数时，它实际上会保存一个作用域链（每个函数都有独立的作用域链）。

正常形式

```javascript
var x = 10
var y = 10

function a() {
    var x = 20
}
```

链表形式

```javascript
var window = {
    value: {
        x: 10,
        y: 10
    },
    next: null
}

var a = {
    value: null,
    next: window
}
```

例如上图，我们定义了函数 a，这个时候我们还没有进行调用。函数 a 的作用域链为：a -> window

正常形式

```javascript
var x = 10
var y = 10

function a() {
    var x = 20
}

a()
```

链表形式

```javascript
var window = {
    value: {
        x: 10,
        y: 10
    },
    next: null
}

var a = {
    value: {
        x: 20
    },
    next: window
}
```

当调用这个函数时，它就会创建一个新执行上下文环境（对象）来存储它的局部变量，并将这个对象添加至刚才所保存的作用域链上。

<AppComment />