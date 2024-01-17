<script lang="ts" setup>
import Demo1 from "./bom/Demo1.vue"
import Demo2 from "./bom/Demo2.vue"
import Demo3 from "./bom/Demo3.vue"
import Demo4 from "./bom/Demo4.vue"
import Demo5 from "./bom/Demo5.vue"
import Demo6 from "./bom/Demo6.vue"
import Demo7 from "./bom/Demo7.vue"
import { loginRead } from '@/utils/login-read'

loginRead('j10007')
</script>

# <AppCode code="31" /> BOM 浏览器对象模型

<ClientOnly><AppRead code="j10007" /></ClientOnly>

## window 对象

**提示框 alert**

```javascript
alert(1)
```

<AppCard>
    <Demo1 />
</AppCard>

<br />

**确认提示框 confirm**

```javascript
var conf = confirm('是否打开') // true or false
```

<AppCard>
    <Demo2 />
</AppCard>

<br />

**定时器 setTimeout**

```javascript
var t1 = setTimeout(function () {
    console.log(1) // 3000 毫秒后打印 1
}, 3000)
```

<AppCard>
    <Demo3 />
</AppCard>

<br />

**取消定时器 clearTimeout**

```javascript
clearTimeout(t1)
```

<AppCard>
    <Demo4 />
</AppCard>

<br />

**循环定时器 setInterval**

```javascript
var t1 = setInterval(function () {
    console.log(1) // 每隔 1000 毫秒打印 1
}, 1000)
```

<AppCard>
    <Demo5 />
</AppCard>

<br />

**取消循环定时器 clearInterval**

```javascript
clearInterval(t1)
```

<AppCard>
    <Demo6 />
</AppCard>

<br />

**本地化存储 localStorage**

localStorage 是 HTML5 新增的 API，主要用于长期存储数据在本地（存储在访问者的浏览器中），它是没有过期时间的，除非你的手动删除它，否则它会一直存在。localStorage 的存储数据大小是 4M。

```javascript
// 设置缓存
localStorage.setItem('name', 'xiaoming')

// 读取缓存
localStorage.getItem('name') // 'xiaoming'

// 删除缓存
localStorage.removeItem('name')
```

<AppCard>
    <Demo7 />
</AppCard>

设置和删除缓存后可以通过 "浏览器调试工具" 进行验证。

## location 对象

**获取 url 地址 location.href**

```javascript
var str = location.href // 'https://echarts.noxussj.top/#/'
```

<br />

**获取域名 location.host**

```javascript
var str = location.host // 'echarts.noxussj.top'
```

<br />

**获取端口号 location.port**

```javascript
var str = location.port // 8888
```

<br />

**获取 web 协议 location.protocol**

```javascript
var str = location.protocol // 'https:'
```

## navigator 对象

**获取浏览器名称 navigator.appName**

```javascript
var str = navigator.appName // 'Netscape'
```

<br />

**获取浏览器版本 navigator.appVersion**

```javascript
var str = navigator.appVersion // '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
```

<br />

**获取操作系统 navigator.platform**

```javascript
var str = navigator.platform // 'Win32'
```

## history 对象

**返回上一页 history.back**

```javascript
history.back()
```

<br />

**返回下一页 history.forward**

```javascript
history.forward()
```

<br />

**返回上下页 history.go**

```javascript
history.go(-1)
```

## screen 对象

**屏幕宽度 screen.width**

```javascript
var str = screen.width // 1920
```

<br />

**屏幕高度 screen.height**

```javascript
var str = screen.height // 1080
```

## document 对象

**浏览器缓存 document.cookie**

cookie 是最原始的浏览器缓存，cookie 会有过期时间，如果不设置则关闭当前浏览器窗口则会立即失效。cookie 的存储数据的上限是 4kb。

```javascript
// 设置cookie
document.cookie = 'name=xiaoming;'

// 访问cookie
var str = document.cookie //  'name=xiaoming';

// 删除cookie
document.cookie = ''
```

<br />

**文档标题 document.title**

```javascript
document.title = 'my-title'
```

<br />

**打印内容 document.write**

```javascript
document.write('我是内容')
```

<AppComment />