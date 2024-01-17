<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('j20013')
</script>

# <AppCode code="45" /> 浏览器缓存

<ClientOnly><AppRead code="j20013" /></ClientOnly>

浏览器缓存主要包含 cookie、 在 HTML5 新标准中新增了本地存储 localStorage 和会话存储 sessionStorage。

## cookie

### 什么是 cookie？

cookie 是一些缓存数据，主要存储在你的电脑中。当你发起网络请求时也会携带当前域名端口下的 cookie 信息传输给后端。

### 创建 cookie

默认情况下，没有设置过期时间，当浏览器关闭时 cookie 就会被删除（关闭当前选项卡不会删除）。

```javascript
document.cookie = 'name=xiaoming' // 'name=xiaoming'
document.cookie = 'age=18' // 'name=xiaoming; age=18'
```

### 创建 cookie 并设置 10 分钟后过期

```javascript
// Thu Jan 12 2023 17:22:34 GMT+0800 (中国标准时间)
const expires = new Date(new Date().getTime() + 1000 * 60 * 10)
document.cookie = 'class=A; expires= ' + expires
```

### 读取 cookie

```javascript
const cookie = document.cookie // 'name=xiaoming; age=18; class=A'
```

### 修改 cookie

相当于把旧的 cookie 进行了删除，在创建新的 cookie

```javascript
document.cookie = 'name=libai' // 'age=18; class=A; name=libai'
```

### 删除 cookie

直接给 cookie 设置一个已过期的时间，那么关闭浏览器后则会被删除

```javascript
document.cookie = 'class=A; expires= Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)'
```

## localStorage

每个域名端口下都会存在一份独立的 localStorage 数据，它是没有过期时间的，只要你不手动清除，那么它会永远都在。localStorage 使用上会比 cookie 要简单。

### 创建 localStorage 属性

```javascript
localStorage.setItem('name', 'xiaoming')
```

### 读取 localStorage 属性

```javascript
localStorage.getItem('name') // 'xiaoming'
```

### 修改 localStorage 属性

```javascript
localStorage.setItem('name', 'libai')
```

### 删除 localStorage 属性

```javascript
localStorage.removeItem('name')
```

### 清空 localStorage 对象

```javascript
localStorage.clear()
```

## sessionStorage

每个域名端口下都会存在一份独立的 sessionStorage 数据，它是有过期时间的，当你关闭当前页面（包含浏览器选项卡）时，sessionStorage 缓存会被销毁。它的用法几乎和 localStorage 是相同的。

### 创建 sessionStorage 属性

```javascript
sessionStorage.setItem('name', 'xiaoming')
```

### 读取 sessionStorage 属性

```javascript
sessionStorage.getItem('name') // 'xiaoming'
```

### 修改 sessionStorage 属性

```javascript
sessionStorage.setItem('name', 'libai')
```

### 删除 sessionStorage 属性

```javascript
sessionStorage.removeItem('name')
```

### 清空 sessionStorage 对象

```javascript
sessionStorage.clear()
```

## 以上三者的区别

### 存储大小

-   cookie：数据大小不能超过 4k

-   localStorage、sessionStorage：数据大小支持 5M 左右，不同浏览器存储大小不同

### 生命周期（有效时间）

-   cookie：需要设置有效期，过期后 cookie 就会销毁

-   localStorage：除非被手动清理，否则永久存在

-   sessionStorage：页面关闭（包括标签选项卡）后就会被销毁

### 存储形式

三者都是存储字符串类型，复杂对象可以采用 json 的 stringify 和 parse 方法来做处理

### 安全性

cookie：请求时一般会携带在 header 中

localStorage、sessionStorage：请求时不会携带

<AppComment />