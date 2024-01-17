<script setup>
import Image1 from "./prototype/image1.png"
import Image2 from "./prototype/image2.png"
import Image3 from "./prototype/image3.png"
import Image4 from "./prototype/image4.png"
import { loginRead } from '@/utils/login-read'

loginRead('j20007')
</script>

# <AppCode code="39" /> 原型

<ClientOnly><AppRead code="j20007" /></ClientOnly>

## 什么是原型？

每一个函数都包含一个 prototype 属性，这是一个指针指向 "原型对象" （prototype object），也就是我们平时说的原型。每一个函数都包含不同的原型对象。当将函数用作构造函数的时候，新创建的对象（实例）会从原型对象上继承属性。

```javascript
/**
 * 定义一个构造函数（类）
 */
function Person(name) {}

/**
 * 实例属性
 */
Person.prototype.age = 18

/**
 * 实例方法
 */
Person.prototype.eat = function () {
    console.log('我会吃饭')
}

/**
 * 通过 new 关键字实例化出一个 xiaoming 实例
 * xiaoming 继承了 Person 的 age 实例属性和 eat 实例方法
 */
const xiaoming = new Person('a')

/**
 * 通过 new 关键字实例化出一个 libai 实例
 * libai 继承了 Person 的 age 实例属性和 eat 实例方法
 */
const libai = new Person('b')
```

关系图

<AppImage :src="Image1" />

调试工具图如下

<AppImage :src="Image2" />

## 原型链

假设一个原型对象等于另一个类型（构造函数）的实例，另一个类型的原型对象又等于另一个类型的实例。就像这样一层层递进，就构成了实例与原型的链条，这个就是所谓的原型链。

```javascript
function Animal(name) {}
Animal.prototype.name1 = 'xiaoming'

function Cat(name) {}
Cat.prototype = new Animal()
Cat.prototype.name2 = 'libai'

const cat1 = new Cat()
cat1.name = 'xiaohong'

console.log(cat1)
```

关系图

<AppImage :src="Image3" />

调试工具图如下

<AppImage :src="Image4" />

## 原型链（扩展）

-   原型链的本质是链表，原型链上的节点是各种原型对象，例如 Function.prototype 、Object.prototype、Array.prototype ...

-   原型链通过 \_proto\_ 属性连接各种原型对象

**原型链指向**

-   object -> Object.prototype -> null

-   function -> Function.prototype -> Object.prototype -> null

-   array -> Array.prototype -> Object.prototype -> null

-   ...

<AppComment />