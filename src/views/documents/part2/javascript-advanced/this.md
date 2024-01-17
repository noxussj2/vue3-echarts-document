<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20012')
</script>

# <AppCode code="44" /> this 指向

<ClientOnly><AppRead code="j20012" /></ClientOnly>

this 指向分为两种情况，一种是普通函数中使用的 this，另外一种是箭头函数中的 this。

## 普通函数

this 指向调用者。

**场景 1**

```javascript
function sayHi() {
    console.log(this)
}

sayHi() // window
```

<br />

这里的 this 指向 window，因为 sayHi 的调用者是 window，可是我没有看见有 window 啊，我们要知道 window 一般都是可以省略不写的，同等于 window.sayHi()。

**场景 2**

```javascript
const person = {
    sayHi: function () {
        console.log(this)
    }
}

person.sayHi() // person
```

这里的 this 指向 person，sayHi 是谁调用了？ 很明显一看就知道是 person 。

<br />

**场景 3**

```javascript
const person = {
    sayHi: function () {
        console.log(this)
    }
}

const xiaoming = person.sayHi

xiaoming() // window
```

这里的 this 指向 window，首先是 person.sayHi 赋值给了 xiaoming，这个时候是还没调用的。那么 xiaoming 就是一个函数了，最后我们执行 window.xiaoming() ，调用者就是 window。

<br />

**场景 4**

```javascript
class Person {
    constructor() {}

    sayHi() {
        console.log(this)
    }
}

const xiaoming = new Person()

xiaoming.age = 18

xiaoming.sayHi()
```

构造函数（类）中的 this 也是一样的，sayHi 的调用者是 xiaoming，所以 this 指向它。

<br />

**场景 5**

```javascript
const div = document.querySelector('.content')

div.onclick = function () {
    console.log(this)
}

div.onclick() // 我们去页面点击元素，实际上就是执行的这行代码
```

dom 元素添加了点击事件，但是还没执行。当我们执行 div.onclick() 的时候，调用者就是 div ，所以 this 指向它。

## 箭头函数

这里就不用看谁是调用者了，而是看它定义时所在的环境（作用域）。箭头函数本身不存在 this，所以它的 this 指向上一层作用域所在的对象。

**场景 1**

```javascript
const sayHi = () => {
    console.log(this)
}

sayHi() // window
```

sayHi 是一个箭头函数，本身没有 this，所以 sayHi 的 this 指向上一层作用域所在的对象，也就是 window。

<br />

**场景 2**

```javascript
const person = {
    sayHi: () => {
        console.log(this)
    }
}

person.sayHi() // window
```

sayHi 的上层作用域就是全局作用域，所在的对象是 window，所以 this 指向 window。

<br />

**场景 3**

```javascript
const person = {
    sayHi: function () {
        return {
            fn: () => {
                console.log(this)
            }
        }
    }
}

const xiaoming = person.sayHi()

xiaoming.fn() // person
```

this 在定义时是在 fn 函数作用域中，箭头函数本身不存在 this，所以它的 this 指向上一层作用域 sayHi 所在的对象 person，所以无论是谁调用了 fn ，this 始终指向 person。

## 改变 this 指向

通过 ` call()` `apply()` `bind()` 可以改变 this 指向。

**apply**

```javascript
const Person = {
    name: 'xiaoming'
}

function fn(age, sex) {
    console.log(this) // {name: 'xiaoming'}
}

fn.apply(Person, [18, '男'])
```

<br />

**call**

```javascript
const Person = {
    name: 'xiaoming'
}

function fn(age, sex) {
    console.log(this) // {name: 'xiaoming'}
}

fn.call(Person, 18, '男')
```

<br />

**bind**

```javascript
const Person = {
    name: 'xiaoming'
}

function fn(age, sex) {
    console.log(this) // {name: 'xiaoming'}
}

const ex = fn.bind(Person, 18, '男')

ex()
```

<br />

以上三者的传参方式和执行方式不同。

apply、call 的区别：接受参数的方式不一样。

bind：不立即执行。而 apply、call 立即执行。

<AppComment />