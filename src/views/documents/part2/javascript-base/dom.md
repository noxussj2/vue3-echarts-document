<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'

loginRead('j10008')
</script>

# <AppCode code="32" /> DOM 文档对象模型

<ClientOnly><AppRead code="j10008" /></ClientOnly>

## HTML 模板

```html
<html>
    <head>
        <title>我是网站标题</title>
    </head>
    <body>
        <div class="box">
            <div class="box1"></div>
        </div>

        <div name="xiaoming"></div>

        <div id="box"></div>
    </body>
</html>
```

## 访问节点

**通过 id 访问指定节点 getElementById**

```javascript
var node = document.getElementById('box')
```

<br />

**通过 name 访问指定节点 getElementsByName**

```javascript
var node = document.getElementsByName('xiaoming')
```

<br />

**通过标签名称访问指定节点 getElementsByTagName**

```javascript
var node = document.getElementsByTagName('div')
```

<br />

**通过 class 访问指定节点 getElementsByClassName**

```javascript
var node = document.getElementsByClassName('box')
```

<br />

**全能访问指定节点 querySelector**

```javascript
// 通过id访问
var node = document.querySelector('#box')

// 通过class访问
var node = document.querySelector('.box')

// 通过tag访问
var node = document.querySelector('div')
```

<br />

**全能访问所有节点 querySelectorAll**

```javascript
// 通过id访问
var node = document.querySelectorAll('#box')

// 通过class访问
var node = document.querySelectorAll('.box')

// 通过tag访问
var node = document.querySelectorAll('div')
```

<br />

**访问子节点 childNodes**

```javascript
node.childNodes
```

<br />

**访问父节点 parentNode**

```javascript
node.parentNode
```

<br />

**访问下一个兄弟节点 nextElementSibling**

```javascript
node.nextElementSibling
```

<br />

**访问上一个兄弟节点 previousElementSibling**

```javascript
node.previousElementSibling
```

## 插入节点

**插入子节点（排在最后） append**

```javascript
var node = document.querySelector('.box')

var newNode = document.createElement('div')

node.append(newNode)
```

<br />

**插入子节点（排在最后） appendChild**

```javascript
var node = document.querySelector('.box')

var newNode = document.createElement('div')

node.appendChild(newNode)
```

<br />

**在指定子节点前面插入节点 insertBefore**

```javascript
var node = document.querySelector('.box')

var childNode = document.querySelector('.box1')

var newNode = document.createElement('div')

node.insertBefore(newNode, childNode)
```

## 创建节点

**创建元素节点 createElement**

```javascript
var newNode = document.createElement('div')
```

<br />

**创建文本节点 createTextNode**

```javascript
var newTextNode = document.createTextNode('我是内容')
```

## 删除节点

**删除当前节点 remove**

```javascript
var node = document.querySelector('.box')

node.remove()
```

<br />

**删除子节点 removeChild**

```javascript
var node = document.querySelector('.box')

var childNode = document.querySelector('.box1')

node.removeChild(childNode)
```

## 修改节点

**替换子节点 replaceChild**

```javascript
var node = document.querySelector('.box')

var childNode = document.querySelector('.box1')

var newNode = document.createElement('div')

node.replaceChild(newNode, childNode)
```

<AppComment />