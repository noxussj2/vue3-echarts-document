<script lang="ts" setup>
import Demo1 from "./event/Demo1.vue"
import Demo2 from "./event/Demo2.vue"
import Demo3 from "./event/Demo3.vue"
import Demo4 from "./event/Demo4.vue"
import Demo5 from "./event/Demo5.vue"
import Demo6 from "./event/Demo6.vue"
import Demo7 from "./event/Demo7.vue"
import Demo8 from "./event/Demo8.vue"
import Demo9 from "./event/Demo9.vue"
import Demo10 from "./event/Demo10.vue"
import Demo11 from "./event/Demo11.vue"
import Demo12 from "./event/Demo12.vue"
import Demo13 from "./event/Demo13.vue"
import Demo14 from "./event/Demo14.vue"
import Demo15 from "./event/Demo15.vue"
import { loginRead } from '@/utils/login-read'

loginRead('j10006')
</script>

# <AppCode code="30" /> JavaScript 事件

<ClientOnly><AppRead code="j10006" /></ClientOnly>

## 鼠标事件

**鼠标单击事件 click**

在文档中鼠标进行单击，就会触发事件。

```javascript
var i = 0

document.addEventListener('click', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo1 />
</AppCard>

<br />

**鼠标双击事件 dblclick**

在文档中鼠标进行双击，就会触发事件。

```javascript
var i = 0

document.addEventListener('dblclick', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo2 />
</AppCard>

<br />

**鼠标按下事件 mousedown**

在文档中鼠标进行单击按下，同时不要松开，就会触发事件。

```javascript
var i = 0

document.addEventListener('mousedown', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo3 />
</AppCard>

<br />

**鼠标按下松开事件 mouseup**

在文档中鼠标进行单击按下并且松开后，就会触发事件。

```javascript
var i = 0

document.addEventListener('mouseup', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo4 />
</AppCard>

<br />

**鼠标移入事件 mouseenter**

鼠标光标移入文档内时会触发事件。

```javascript
var i = 0

document.addEventListener('mouseenter', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo5 />
</AppCard>

<br />

**鼠标移出事件 mouseleave**

鼠标光标移出文档内时会触发事件。

```javascript
var i = 0

document.addEventListener('mouseleave', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo6 />
</AppCard>

<br />

**鼠标移动事件 mousemove**

鼠标光标在文档内移动时会触发事件。

```javascript
var i = 0

document.addEventListener('mousemove', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo7 />
</AppCard>

<br />

**鼠标触碰子元素/离开子元素/离开元素事件 mouseout**

鼠标光标移出文档内时会触发事件。若文档内存在子元素，那么子元素也会被绑定上移入移出事件。

```javascript
var i = 0

document.addEventListener('mouseout', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo8 />
</AppCard>

<br />

**鼠标触碰子元素/离开子元素/触碰元素事件 mouseover**

鼠标光标移入文档内时会触发事件。若文档内存在子元素，那么子元素也会被绑定上移入移出事件。

```javascript
var i = 0

document.addEventListener('mouseover', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo9 />
</AppCard>

<br />

**鼠标滚轮事件 mousewheel**

不管是否出现了滚动条，只要在文档内部使用了鼠标滚轮就会触发事件。

```javascript
var i = 0

document.addEventListener('mousewheel', function () {
    console.log(i++)
})
```

<AppCard>
    <Demo10 />
</AppCard>

## 文档事件

**加载事件 onload**

HTML 代码被渲染完毕后会触发事件

```javascript
window.onload = function () {
    console.log(1)
}
```

<br />

**卸载事件 onunload**

当前页面被关闭后会触发事件，目前这个无法调试验证。

```javascript
window.onunload = function () {
    console.log(1)
}
```

<br />

**窗口尺寸更改事件 onresize**

浏览器窗口大小改变时会触发事件。

```javascript
window.onresize = function () {
    console.log(1)
}
```

## 表单事件

**获取焦点事件 onfocus**

输入框内进行单击后鼠标光标会出现，代表激活状态，同时也属于获取焦点。

```html
<input type="text" onfocus="fn()" />

<script>
    var i = 0

    function fn() {
        console.log(i++)
    }
</script>
```

<AppCard>
    <Demo11 />
</AppCard>

<br />

**失去焦点事件 onblur**

输入框光标激活时，鼠标点击输入框以外的地方会取消光标，同时也属于失去焦点。

```html
<input type="text" onblur="fn()" />

<script>
    var i = 0

    function fn() {
        console.log(i++)
    }
</script>
```

<AppCard>
    <Demo12 />
</AppCard>

<br />

**改变事件 onchange**

在输入框输入内容后并按下回车键，`input` 的 `value` 就会变成你输入的内容，同时也会触发 `onchange` 事件。

```html
<input type="text" onchange="fn()" />

<script>
    var i = 0

    function fn() {
        console.log(i++)
    }
</script>
```

<AppCard>
    <Demo13 />
</AppCard>

<br />

**内容选中事件 onselect**

当在输入框输入一些内容后，拖动鼠标去选中文字时触发事件。

```html
<input type="text" onselect="fn()" />

<script>
    var i = 0

    function fn() {
        console.log(i++)
    }
</script>
```

<AppCard>
    <Demo14 />
</AppCard>

<br />

**表单提交事件 onsubmit**

表单提交默认是会刷新页面的，这样的用户体验会很差，所以需要搭配 `e.preventDefault()` 阻止原生事件执行。

```html
<form onsubmit="fn(event)">
    <input type="submit" value="Submit" />
</form>

<script>
    var i = 0

    function fn(e) {
        console.log(i++)

        e.preventDefault()
    }
</script>
```

<AppCard>
    <Demo15 />
</AppCard>

<AppComment />