<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j10004')
</script>

# <AppCode code="28" /> JavaScript 基础语法

<ClientOnly><AppRead code="j10004" /></ClientOnly>

## 变量声明

在 JavaScript 程序中，使用一个变量之前应当先声明。变量是使用关键字 `var` 来声明的。

```javascript
var i
var sum = 20
```

如果未在 `var` 声明语句中给变量赋予初始值，那么虽然声明了这个变量，但在给它传入一个值之前，它的初始值就是 `undefined` 。

## 重复的声明和遗漏的声明

使用 `var` 语句重复声明变量是合法的且无副作用的，如果重复声明且带有初始值，那么这就和一条简单的赋值语句没什么两样。

如果你试图读取一个没有声明的变量的值，在严格模式下会报错，但是我们平常写的代码一般都是在非严格模式下，所以不会报错，遇到这种情况时，JavaScript 实际上会给全局对象创建一个同名属性，并且它工作起来像一个正确声明的全局变量。

:::warning 注意
这意味着你可以侥幸不声明全局变量。但这个是一个不好的习惯并会造成很多 bug ，因此，你应当使用 var 来声明变量。
:::

## 运算符

**比较运算符**

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>符号</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>==</td>
            <td>等于</td>
        </tr>
        <tr>
            <td>!=</td>
            <td>不等于</td>
        </tr>
        <tr>
            <td>===</td>
            <td>全等于</td>
        </tr>
        <tr>
            <td>!==</td>
            <td>全不相等</td>
        </tr>
        <tr>
            <td>&gt;</td>
            <td>大于</td>
        </tr>
        <tr>
            <td>&lt;</td>
            <td>小于</td>
        </tr>
        <tr>
            <td>&gt;=</td>
            <td>大于等于</td>
        </tr>
        <tr>
            <td>&lt;=</td>
            <td>小于等于</td>
        </tr>
    </tbody>
</table>

**逻辑运算符**

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>符号</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>&&</td>
            <td>与（并且）</td>
        </tr>
        <tr>
            <td>||</td>
            <td>或（或者）</td>
        </tr>
        <tr>
            <td>!</td>
            <td>非（除外）</td>
        </tr>
    </tbody>
</table>

## 流程控制语句

**判断语句 if...else**

```javascript
var xiaomingScore = 80

if (xiaomingScore > 60) {
    console.log('我及格了')
} else {
    console.log('我不及格')
}
```

<AppPlayground href="https://codepen.io/noxussj/pen/dyjjrwa" />

<br />

**判断语句 switch**

```javascript
var name = 'xiaoming'

switch (name) {
    case 'xiaoming':
        console.log('xiaoming')
        break
    case 'libai':
        console.log('libai')
        break
    default:
        console.log('没有找到该学生')
        break
}
```

<AppPlayground href="https://codepen.io/noxussj/pen/zYLLXqJ" />

<br />

**循环语句 for**

```javascript
for (var i = 0; i < 10; i++) {
    console.log('打印第' + i + '次')
}
```

<AppPlayground href="https://codepen.io/noxussj/pen/KKBBYgy" />

<br />

**循环语句 while**

```javascript
var i = 0

while (i < 10) {
    console.log('打印第' + i + '次')

    i++
}
```

<AppPlayground href="https://codepen.io/noxussj/pen/gOjjyLr" />

<AppComment />