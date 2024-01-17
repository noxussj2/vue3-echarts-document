<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('n10007')
</script>

# JavaScript 基础练习

<ClientOnly><AppRead code="n10007" /></ClientOnly>

:::tip 付费服务
需要答案的小伙伴可以联系博主！
:::

## 数据类型

-   [`102` 请描述基本数据类型和引用类型的区别？](/test/javascript-base/code/102)

-   [`103` 请通过代码来证实基本数据类型和引用数据类型的区别。](/test/javascript-base/code/103)

## 运算符

-   [`105` 以上代码中的 console.log 最终会输出什么？并解释原因。](/test/javascript-base/code/105)

## 流程控制语句

-   [`118` 请描述 for 循环和 while 循环的区别？并用代码进行证实。](/test/javascript-base/code/118)

## String 字符串对象

-   [`121` 请编写一个函数，实现将字符串 "a,p,p,l,e" 转为 "['a','p','p','l','e']" 的数据格式。](/test/javascript-base/code/121)

-   [`123` 请编写一个函数，判断字符 "a" 是否在字符串 "apple" 中出现过。](/test/javascript-base/code/123)

-   [`131` 请描述一下 substring 和 substr 的区别？](/test/javascript-base/code/131)

-   [`134` 请编写一个函数，实现将字符串 " hello wolrd " 中的两端空格移除。](/test/javascript-base/code/134)

## Object 对象

-   [`143` 请编写代码访问 obj 对象中的 name-1 属性。](/test/javascript-base/code/143)

-   [`145` 请编写代码删除 obj 对象中的 name-1 属性，删除后在进行访问。](/test/javascript-base/code/145)

## Array 数组对象

-   [`147` 请验证合并（concat） 后的数组会不会受原数组影响。也就是引用类型的作用，改变一个变量会不会影响另外一个变量。](/test/javascript-base/code/147)

-   [`152` 请编写一个函数，实现删除数组 ["a",'b','c','d','e'] 中的 'c'。注意考虑函数的灵活性。](/test/javascript-base/code/152)

## Function 函数对象

-   [`158` 请按照你的理解将上方代码的注释补全。](/test/javascript-base/code/158)

-   [`159` 有一家超市，出售苹果和草莓。其中苹果 8 元/斤，草莓 13 元/斤。 现在顾客 A 在超市购买了若干斤苹果和草莓，需要计算一共多少钱？ 请编写函数，对于 A 购买的水果斤数 (水果斤数为大于等于 0 的整数)，计算并返回所购买商品的总价。](/test/javascript-base/code/159)

## Date 日期对象

-   [`160` 编写一个函数，将指定日期转为时间戳格式 "2023-03-30 17:15" 转为 "1680167700000"。](/test/javascript-base/code/160)

-   [`162` 编写一个函数，返回当前日期时间，格式参考 "2023-03-30 17:15"。](/test/javascript-base/code/162)

## Math 数学库对象

-   [`177` 编写一个函数，随机返回 6 位数字验证码。](/test/javascript-base/code/177)

## RegExp 正则对象

-   [`180` 请利用正则将字符串 these size coresponds to 8px, 12px, 16px. The default size is small, A.K.A. 8px 中的数字部分替换为 0](/test/javascript-base/code/180)

-   [`184` 请利用正则将字符串 these size coresponds to 8px, 12px, 16px. The default size is small, A.K.A. 8px 中的大写字母转为小写。](/test/javascript-base/code/184)

## 鼠标事件

-   [`190` 实现一个拖拽功能，拖拽是指你的鼠标按下并且移动鼠标的一个过程。拖拽的过程中要在控制台打印当前鼠标位置。](/test/javascript-base/code/190)

## 文档事件

-   [`200` 当浏览器窗口的宽度小于 1600px 、1200px 、800px 时给出一次提示，已经提示过的无需再次提示。](/test/javascript-base/code/200)

## 表单事件

-   [`204` 编写一个函数，实现文本输入框中选中的内容超过 5 个字符的时候，给出相应的提示。](/test/javascript-base/code/204)

## BOM 浏览器对象模型

-   [`208` 以上代码中的 console.log 最终会输出什么？并解释原因。](/test/javascript-base/code/208)

-   [`210` 实现将一箱旧的水果 var old = ['apple','banana','strawberry'] 装到新的箱子上 var new = [] ，每间隔 1 秒装一个，每装完 1 个都要打印输出旧的箱子和新的箱子。](/test/javascript-base/code/210)

-   [`212` 请实现一个用户名输入框和登录按钮。登录后页面展示用户名称，并且关掉浏览器下次进来时依然可以显示。](/test/javascript-base/code/212)

-   [`216` 请实现一个跳转页面按钮。利用 location 对象实现点击后将当前页面跳转到 "https://baidu.com" ](/test/javascript-base/code/216)

## DOM 文档对象模型

-   [`228` 请描述为什么 getElementById 总是返回单个节点，而 getElementsByClassName 总是返回多个节点。](/test/javascript-base/code/228)

-   [`229` 请编写一个注册函数，点击注册按钮时获取用户名、密码、邮箱信息并提示。](/test/javascript-base/code/229)

-   [`232` 请利用 querySelector 以标签名称、id、class 的形式进行访问任意节点。](/test/javascript-base/code/232)

-   [`239` 不得改变 body 部分的前提下，通过 JS 将用户列表数据渲染到页面上。](/test/javascript-base/code/239)

## JavaScript 进阶

-   [`246-1` 请描述为什么 JavaScript 被设计为单线程的工作形式？如果设计为多线程会存在什么问题？](/test/javascript-base/code/246-1)

-   [`246-2` 现实生活中哪些场景类似同步模式？并要发现其中的问题。](/test/javascript-base/code/246-2)

-   [`246-3` 现实生活中哪些场景类似异步模式？并要发现其解决了什么问题。](/test/javascript-base/code/246-3)

-   [`246-4` 请编写一个涉及调用栈的例子，并在调试工具中证明其真的存在。](/test/javascript-base/code/246-4)

-   [`246-5` 以上代码中先打印 "libai" 还是先渲染 "xiaoming" 到页面上，请利用 JS 事件循环机制来解释原理。](/test/javascript-base/code/246-5)

-   [`246-6` 请编写一个班级类，并且可以通过该类实例化不同的班级，每个班级可以加入自己的学生和查看当前学生。](/test/javascript-base/code/246-6)

-   [`247` 请描述什么是原型链并且编写一个原型链的例子。](/test/javascript-base/code/247)

-   [`248` 以上代码中 console.log 最终会输出什么？并且解释原因。](/test/javascript-base/code/248)

-   [`249` 请编写一个闭包的例子，并且证明访问的变量是从闭包中获取的。](/test/javascript-base/code/249)

-   [`250` 如何判断一个函数是否为回调函数，并编写一个例子。](/test/javascript-base/code/250)

-   [`252-1` 请编写一个函数将 obj 对象深拷贝一份到 obj2 中，以及验证两者修改后互不影响。用任何方法都可以。](/test/javascript-base/code/252-1)

-   [`252-2` 请描述上方代码中的 this 输出什么信息？以及原因。](/test/javascript-base/code/252-2)

-   [`252-3` 请描述浏览器缓存 cookie、localStorage、sessionStorage 三者有什么区别？](/test/javascript-base/code/252-3)

-   [`252-4` 请通过编写代码实现一个防抖和节流的案例。](/test/javascript-base/code/252-4)

-   [`253` 请编写一个纯函数和不纯函数的例子。](/test/javascript-base/code/253)

-   [`254` 请描述有副作用的函数会导致什么问题？同时编写一个例子来证明。](/test/javascript-base/code/254)

-   [`255` 请编写两个高阶函数例子，分别是函数作为参数和函数作为返回值的情况。](/test/javascript-base/code/255)

-   [`256` 请编写一个函数柯里化的例子。](/test/javascript-base/code/256)

-   [`257` 请编写一个函数组合的例子，同时要判断是否满足结合律。](/test/javascript-base/code/257)

-   [`258` 请描述函数式编程思想对于我们开发带来了什么优势？](/test/javascript-base/code/258)
