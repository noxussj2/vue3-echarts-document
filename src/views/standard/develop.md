<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('n10006')
</script>

# 开发规范

<ClientOnly><AppRead code="n10006" /></ClientOnly>

想要写出高质量的代码，就一定要重视规范。以下规范中是包含了 ES6 的语法。

1. 统一风格
2. 封装
3. 易阅读
4. 易扩展

## 文件/文件夹命名采用小写横杠形式

::: info 建议示例

base-card

:::

::: info 不建议示例

BaseCard

:::

## 代码缩进采用 4 个空格

当代码层级非常多的时候，2 个空格代码缩进就会不易阅读了。

::: info 建议示例

```javascript
const obj = {
    class: {
        person: {
            name: 'xiaoming'
        }
    }
}
```

:::

::: info 不建议示例

```
const obj = {
  class: {
    person: {
      name: 'xiaoming'
    }
  }
}
```

:::

## 字符串使用单引号

::: info 建议示例

```javascript
const name = 'xiaoming'
```

:::

::: info 不建议示例

```
const name = "xiaoming"
```

:::

## 代码结尾不使用分号

::: info 建议示例

```javascript
const name = 'xiaoming'
const age = 18
```

:::

::: info 不建议示例

```
const name = 'xiaoming';
const age = 18;
```

:::

## 变量/函数命名采用小写驼峰

如果是类 class 或者构造函数则使用大写驼峰形式。

::: info 建议示例

```javascript
const myName = 'xiaoming'
```

:::

::: info 不建议示例

```
const MyName = 'xiaoming'
```

:::

## 函数命名采用动词开头

::: info 建议示例

```javascript
function loadData() {}
```

:::

::: info 不建议示例

```
function data() {}
```

:::

## 变量定义主用 const

变量主要用 const 来定义，使得代码更加健壮。如该变量的值要被修改，则使用 let 来定义。

::: info 建议示例

```javascript
const obj = {
    name: 'xiaoming'
}
```

:::

::: info 不建议示例

```
let obj = {
    name: 'xiaoming'
}
```

:::

## 能成为公共函数就必须要封装

不要每个地方都编写同样的功能，公共部分就必须要抽离出来。

::: info 建议示例

```javascript
/**
 * 获取今天日期
 */
function getDate() {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const date = new Date().getDate()
    return `${year}年${month}月${date}日`
}

const today = getDate() // 2023年3月24日
```

:::

::: info 不建议示例

```javascript
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const date = new Date().getDate()
const today = `${year}年${month}月${date}日` // 2023年3月24日
```

:::

## css 代码中禁止使用 !important

::: info 建议示例

```css
.box {
    color: red;
}
```

:::

::: info 不建议示例

```css
.box {
    color: red !important;
}
```

:::

## css 全局样式禁止使用单个单词

全局样式建议使用统一前缀，例如 app-xxx 或者 base-xxx。

::: info 建议示例

```css
.app-name {
    color: red;
}
```

:::

::: info 不建议示例

```css
.name {
    color: red;
}
```

:::
