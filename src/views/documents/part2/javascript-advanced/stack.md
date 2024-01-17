<script setup>
import Image1 from "./stack/image1.png"
import Image2 from "./stack/image2.png"
import Image3 from "./stack/image3.png"
import Image4 from "./stack/image4.png"
import Image5 from "./stack/image5.png"
import Image6 from "./stack/image6.png"
import Image7 from "./stack/image7.png"
import Image8 from "./stack/image8.png"
import { loginRead } from '@/utils/login-read'

loginRead('j20004')
</script>

# <AppCode code="36" /> JavaScript 调用栈

<ClientOnly><AppRead code="j20004" /></ClientOnly>

## 什么是调用栈？

我们写的 JS 代码大多数都是同步模式，也就是从上往下依次执行。后一个任务必须要等前一个任务结束才能开始执行，程序的执行顺序和我们代码的编写顺序是完全一致的。程序执行中每遇到一个任务都会先入栈，当前入栈的任务执行完毕后就会出栈。本来栈的概念是留到数据结构算法在讲的，但是这里用到了可以提前介绍一下。

## 什么是栈？

栈是基础数据结构，栈是一种遵循后进先出原则的有序集合，添加新元素的一端称为栈顶，另一端称为栈底，操作栈的元素时，只能从栈顶操作（添加、移除、取值）。

下面通过代码的例子和调试工具去更好的理解栈和 JS 调用栈。

```javascript
console.log('global begin')

function bar() {
    console.log('bar task')
}

function foo() {
    console.log('foo task')

    bar()
}

foo()

console.log('global end')
```

**执行顺序如下**

1. JS 引擎会将整个 script 的代码提取到一个匿名函数（anonymous）中，并且压入调用栈（也就是入栈）开始逐行执行

2. 首先是第一行 global begin，压入调用栈

<AppImage :src="Image1" />

3. 执行 global begin 在控制台打印完毕后，出栈

<AppImage :src="Image2" />

4. 接下来就遇到了函数的声明 bar 和 foo ，只有代码的调用才会入栈，声明是不会的

5. 遇到了 foo 函数的调用，压入调用栈

<AppImage :src="Image3" />

6. 执行 foo 函数，foo 函数第一行是 foo task 压入调用栈

<AppImage :src="Image4" />

7. 执行 foo task （控制台打印） 完成后，往下就是调用了 bar 函数，将 bar 函数压入调用栈

<AppImage :src="Image5" />

8. 在 bar 函数执行过程中将 bar task 入栈

<AppImage :src="Image6" />

9. 执行 bar task （控制台打印）完后，也代表我们的 bar 函数执行完成，bar 函数执行完成也代表 foo 函数执行完成，将它们依次出栈。最后 global end 也压入调用栈

10. 最后将 global end 入栈，执行完毕后出栈。整个匿名函数（anonymous）也执行完成

<AppImage :src="Image7" />

在浏览器调试工具右侧可以看到调用栈：

<AppImage :src="Image8" />

<AppComment />