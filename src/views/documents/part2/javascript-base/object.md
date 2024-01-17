<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j10005')
</script>

# <AppCode code="29" />  JavaScript 内置对象

<ClientOnly><AppRead code="j10005" /></ClientOnly>

## String 字符串对象

**字符串转换 toString**

```javascript
var age = 20

var age2 = age.toString() // "20"
```

<br />

**字符串转换 String**

```javascript
var age = 20

var age2 = String(age) // "20"
```

<br />

**字符串分割 split**

```javascript
var str = 'abcdefg'

var str2 = str.split('') // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

<br />

**字符串替换 replace**

```javascript
var str = 'abcdefg'

var str2 = str.replace('abc', 'xxx') // xxxdefg
```

<br />

**字符串查找 indexOf**

```javascript
var str = 'abcdebg'

var str2 = str.indexOf('b') // 1
```

<br />

**字符串查找 lastIndexOf**

```javascript
var str = 'abcdebg'

var str2 = str.lastIndexOf('b') // 5
```

<br />

**字符串查找 charAt**

```javascript
var str = 'abcdebg'

var str2 = str.charAt(1) // b
```

<br />

**字符串查找 match**

```javascript
var str = 'The rain in SPAIN stays mainly in the plain'

var str2 = str.match(/ain/g) // ['ain', 'ain', 'ain']
```

<br />

**字符串拼接 +**

```javascript
var str = 'my name'
var str2 = ' is a xiaoming'

var str3 = str + str2 // 'my name is a xiaoming'
```

<br />

**字符串拼接 concat**

```javascript
var str = 'my name'
var str2 = ' is a xiaoming'

var str3 = str.concat(str2) // 'my name is a xiaoming'
```

<br />

**字符串截取 slice**

```javascript
var str = 'abcedfg'

var str2 = str.slice(0, 2) // 'ab'
```

<br />

**字符串截取 substring**

```javascript
var str = 'abcedfg'

var str2 = str.substring(1, 2) // 'b'
```

<br />

**字符串截取 substr**

```javascript
var str = 'abcedfg'

var str2 = str.substr(1, 2) // 'bc'
```

<br />

**字符串转小写 toLowerCase**

```javascript
var str = 'ABCEDFG'

var str2 = str.toLowerCase() // 'abcedfg'
```

<br />

**字符串转大写 toLocaleUpperCase**

```javascript
var str = 'abcdefg'

var str2 = str.toLocaleUpperCase() // 'ABCDEFG'
```

<br />

**字符串两端去空格 trim**

```javascript
var str = ' abcd efg '

var str2 = str.trim() // 'abcd efg'
```

## Number 数字对象

**加减乘除 + - \* /**

```javascript
var a = 1 + 1 // 2

var b = 1 - 1 // 0

var c = 1 * 1 // 1

var d = 1 / 1 // 1
```

<br />

**数字转换 Number**

```javascript
var a = '10.01'

var b = Number(a) // 10.01
```

<br />

**数字转换 parseInt**

```javascript
var a = '10.01'

var b = Number.parseInt(a) // 10
```

<br />

**数字转换小数点 parseFloat**

```javascript
var a = '10.01'

var b = Number.parseFloat(a) // 10.01
```

<br />

**格式化小数点 toFixed**

```javascript
var a = 10.06

var b = a.toFixed(1) // '10.1'
```

<br />

**判断是否为整数 isInteger**

```javascript
var a = Number.isInteger(10.06) // false

var b = Number.isInteger(10) // true
```

## Object 对象

**创建对象 {}**

```javascript
var obj = {}
```

<br />

**创建对象 new Object**

```javascript
var obj = new Object()
```

<br />

**创建对象 Object.create**

```javascript
var obj = Object.create(null, {})
```

<br />

**访问对象属性 obj[key]**

```javascript
var obj = {
    name: 'xiaoming',
    age: 20
}

var name = obj['name'] // 'xiaoming'
```

<br />

**访问对象属性 obj.key**

```javascript
var obj = {
    name: 'xiaoming',
    age: 20
}

var name = obj.name // 'xiaoming'
```

<br />

**删除对象属性 delete obj.key**

```javascript
var obj = {
    name: 'xiaoming',
    age: 20
}

delete obj.name

console.log(obj.name) // undefined
```

## Array 数组对象

**创建数组 []**

```javascript
var arr = ['a', 'b', 'c', 'd']
```

<br />

**创建数组 Array.from**

```javascript
var arr = Array.from('abcd') //  ['a', 'b', 'c', 'd']
```

<br />

**数组合并 concat**

```javascript
var arr = ['a', 'b', 'c']

var arr2 = ['d', 'e', 'f']

var arr3 = arr.concat(arr2) // ['a', 'b', 'c', 'd', 'e', 'f']
```

<br />

**尾部添加元素 push**

```javascript
var arr = ['a', 'b', 'c', 'd']

arr.push('e')

console.log(arr) // ['a', 'b', 'c', 'd', 'e']
```

<br />

**头部添加元素 unshift**

```javascript
var arr = ['a', 'b', 'c', 'd']

arr.unshift('e')

console.log(arr) // ['e', 'a', 'b', 'c', 'd']
```

<br />

**尾部删除元素 pop**

```javascript
var arr = ['a', 'b', 'c', 'd']

arr.pop()

console.log(arr) // ['a', 'b', 'c']
```

<br />

**头部删除元素 shift**

```javascript
var arr = ['a', 'b', 'c', 'd']

arr.shift('e')

console.log(arr) // ['b', 'c', 'd']
```

<br />

**指定位置删除元素 splice**

```javascript
var arr = ['a', 'b', 'c', 'd']

arr.splice(0, 2)

console.log(arr) // ['c', 'd']
```

<br />

**清空数组 length**

```javascript
var arr = ['a', 'b', 'c', 'd']

arr.length = 0

console.log(arr) // []
```

<br />

**序列化字符串 toString**

```javascript
var arr = ['a', 'b', 'c', 'd']

var str = arr.toString() // 'a,b,c,d'
```

<br />

**序列化字符串 join**

```javascript
var arr = ['a', 'b', 'c', 'd']

var str = arr.join() // 'a,b,c,d'
```

<br />

**截取元素 slice**

```javascript
var arr = ['a', 'b', 'c', 'd']

var arr2 = arr.slice(0, 2)

console.log(arr2) // ['a', 'b']
```

<br />

**查找指定元素 indexOf**

```javascript
var arr = ['a', 'b', 'c', 'd']

var index = arr.indexOf('b') // 1
```

<br />

**访问数组元素 array[index]**

```javascript
var arr = ['a', 'b', 'c', 'd']

var str = arr[1] // b
```

<br />

**访问数组长度 length**

```javascript
var arr = ['a', 'b', 'c', 'd']

var length = arr.length // 4
```

## Function 函数对象

**定义函数 function**

```javascript
function eat() {}
```

<br />

**定义函数参数（形参）arguments**

```javascript
function eat(name) {}
```

<br />

**调用函数 fn()**

```javascript
eat()
```

<br />

**调用函数传入参数（实参） fn(arguments)**

```javascript
eat('xiaoming')
```

<br />

**函数返回值 return**

```javascript
function eat(name) {
    return 'my name is ' + name
}

var person = eat('xiaoming') // 'my name is xiaoming'
```

<br />

**函数多参数 arguments,arguments**

```javascript
function eat(name, age) {
    return 'my name is ' + name + '. age is ' + age
}

var person = eat('xiaoming', 20) // 'my name is xiaoming. age is 20'
```

## Date 日期对象

**获取当前时间戳 Date.now()**

```javascript
var date = Date.now() // 1641973293429
```

<br />

**获取当前中国标准时间 Date()**

```javascript
var date = Date() // 'Wed Jan 12 2022 15:42:21 GMT+0800 (中国标准时间)'
```

<br />

**获取当前年份 getFullYear()**

```javascript
var date = new Date().getFullYear() // 2022
```

<br />

**获取当前月份 getMonth()**

```javascript
var date = new Date().getMonth() // 0
```

<br />

**获取当前日期 getDate()**

```javascript
var date = new Date().getDate() // 12
```

<br />

**获取当前小时 getHours()**

```javascript
var date = new Date().getHours() // 15
```

<br />

**获取当前分钟 getMinutes()**

```javascript
var date = new Date().getMinutes() // 51
```

<br />

**获取当前秒 getSeconds()**

```javascript
var date = new Date().getSeconds() // 41
```

<br />

**获取当前星期几 getDay()**

```javascript
var date = new Date().getDay() // 3
```

## Math 数学对象

**绝对值 abs**

```javascript
var number = Math.abs(-5) // 5
```

<br />

**向上取整 ceil**

```javascript
var number = Math.ceil(10.06) // 11
```

<br />

**向下取整 floor**

```javascript
var number = Math.floor(10.06) // 10
```

<br />

**四舍五入 round**

```javascript
var number = Math.round(10.6) // 11
```

<br />

**最小值 min**

```javascript
var number = Math.min(20, 30, 5, 10, 50) // 5
```

<br />

**最大值 max**

```javascript
var number = Math.max(20, 30, 5, 10, 50) // 50
```

<br />

**平方根 sqrt**

```javascript
var number = Math.sqrt(4) // 2
```

<br />

**次幂 pow**

```javascript
var number = Math.pow(2, 3) // 8
```

<br />

**随机数 random**

```javascript
var number = Math.random() // 0.08225691909776356
```

## RegExp 正则对象

**创建正则对象 new RegExp**

```javascript
var reg = new RegExp('d{2}', 'g')
```

<br />

**创建正则对象 //g**

```javascript
var reg = /d{2}/g
```

<br />

**使用正则替换字符串**

```javascript
var str = 'abcddefgdd'

var reg = new RegExp('d{2}', 'g')

var str2 = str.replace(reg, 'xx') // 'abcxxefg'
```

<br />

**正则表达式修饰符**

修饰符可以在全局搜索中不区分大小写。

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>修饰符</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>i</td>
            <td>执行对大小写不敏感的匹配。</td>
        </tr>
        <tr>
            <td>g</td>
            <td>执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。</td>
        </tr>
        <tr>
            <td>m</td>
            <td>执行多行匹配。</td>
        </tr>
    </tbody>
</table>

<br />

**正则表达式模式**

方括号用于查找某个范围内的字符。

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>表达式</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[abc]</td>
            <td>查找方括号之间的任何字符。</td>
        </tr>
        <tr>
            <td>[^abc]</td>
            <td>查找任何不在方括号之间的字符。</td>
        </tr>
        <tr>
            <td>[0-9]</td>
            <td>查找任何从 0 至 9 的数字。</td>
        </tr>
        <tr>
            <td>[a-z]</td>
            <td>查找任何从小写 a 到小写 z 的字符。</td>
        </tr>
        <tr>
            <td>[A-z]</td>
            <td>查找任何从大写 A 到小写 z 的字符。</td>
        </tr>
        <tr>
            <td>(red|blue|green)</td>
            <td>查找任何指定的选项。</td>
        </tr>
    </tbody>
</table>

元字符是拥有特殊含义的字符。

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>元字符</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>.</td>
            <td>查找单个字符，除了换行和行结束符。</td>
        </tr>
        <tr>
            <td>\w</td>
            <td>查找数字、字母及下划线。</td>
        </tr>
        <tr>
            <td>\W</td>
            <td>查找非单词字符。</td>
        </tr>
        <tr>
            <td>\d</td>
            <td>查找数字。</td>
        </tr>
        <tr>
            <td>\D</td>
            <td>查找非数字字符。</td>
        </tr>
        <tr>
            <td>\s</td>
            <td>查找空白字符。</td>
        </tr>
        <tr>
            <td>\S</td>
            <td>查找非空白字符。</td>
        </tr>
        <tr>
            <td>\b</td>
            <td>匹配单词边界。</td>
        </tr>
        <tr>
            <td>\B</td>
            <td>匹配非单词边界。</td>
        </tr>
        <tr>
            <td>\0</td>
            <td>查找 NULL 字符。</td>
        </tr>
        <tr>
            <td>\n</td>
            <td>查找换行符。</td>
        </tr>
        <tr>
            <td>\f</td>
            <td>查找换页符。</td>
        </tr>
        <tr>
            <td>\r</td>
            <td>查找回车符。</td>
        </tr>
        <tr>
            <td>\t</td>
            <td>查找制表符。</td>
        </tr>
        <tr>
            <td>\v</td>
            <td>查找垂直制表符。</td>
        </tr>
        <tr>
            <td>\xxx</td>
            <td>查找以八进制数 xxx 规定的字符。</td>
        </tr>
        <tr>
            <td>\xdd</td>
            <td>查找以十六进制数 dd 规定的字符。</td>
        </tr>
        <tr>
            <td>\uxxxx</td>
            <td>查找以十六进制数 xxxx 规定的 Unicode 字符。</td>
        </tr>
    </tbody>
</table>

量词

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>量词</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>n+</td>
            <td>匹配任何包含至少一个 n 的字符串。 例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。</td>
        </tr>
        <tr>
            <td>n*</td>
            <td>匹配任何包含零个或多个 n 的字符串。 例如，/bo*/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。</td>
        </tr>
        <tr>
            <td>n?</td>
            <td>配任何包含零个或一个 n 的字符串。 例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。</td>
        </tr>
        <tr>
            <td>n{X}</td>
            <td>匹配包含 X 个 n 的序列的字符串。 例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。</td>
        </tr>
        <tr>
            <td>n{X,}</td>
            <td>
                X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。 例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。
            </td>
        </tr>
        <tr>
            <td>n{X,Y}</td>
            <td>
                X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。 例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个
                "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。
            </td>
        </tr>
        <tr>
            <td>n$</td>
            <td>匹配任何结尾为 n 的字符串。</td>
        </tr>
        <tr>
            <td>^n</td>
            <td>^n 匹配任何开头为 n 的字符串。</td>
        </tr>
        <tr>
            <td>?=n</td>
            <td>匹配任何其后紧接指定字符串 n 的字符串。</td>
        </tr>
        <tr>
            <td>?!n</td>
            <td>匹配任何其后没有紧接指定字符串 n 的字符串。</td>
        </tr>
    </tbody>
</table>

<AppComment />