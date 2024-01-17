<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20006')
</script>

# <AppCode code="38" /> 面向对象编程

<ClientOnly><AppRead code="j20006" /></ClientOnly>

## 什么是面向对象编程？

面向对象程序设计（Object Oriented Programming，OOP）是一种计算机编程架构，也可以理解为是一种编程的思想。面向对象程序设计的核心就是对象和类，对象也是类的实例化，类是对现实对象的抽象。对象间通过消息传递相互通信，来模拟现实世界中不同实体间的联系。OOP 达到了软件工程的三个主要目标：重用性、灵活性和扩展性。在 JavaScript 中处处皆是对象，不像其他编程语言一样，JavaScript 中是没有类的存在，只能通过一系列的方法进行模拟成类。

:::tip 指导
面向对象就是把现实世界中的事物抽象成程序世界中的类和对象，通过封装、继承、多态来演示事物事件的联系。
:::

## 对象 Object

对象的成员主要包含属性、方法。

```javascript
const person = {
    name: 'xiaoming',
    age: 18,
    eat: () => {
        console.log('我会吃饭')
    }
}
```

## 类 Class

类主要包含静态属性、静态方法、实例属性、实例方法。类的命名必须以大写字母开头。

```javascript
/**
 * 定义一个构造函数（类）
 */
function Person() {}

/**
 * 静态属性
 */
Person.class = 'class1'

/**
 * 静态方法
 */
Person.study = function () {
    console.log('我在学习')
}

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
 * 通过new关键字实例化出一个xiaoming实例
 * xiaoming继承了Person的age实例属性和eat实例方法
 */
const xiaoming = new Person()

/**
 * 通过new关键字实例化出一个libai实例
 * libai继承了Person的age实例属性和eat实例方法
 */
const libai = new Person()

/**
 * 以上两个实例的成员都是独立的，互不影响
 */
```

<AppComment />