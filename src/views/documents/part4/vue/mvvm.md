<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('v10003')
</script>

# <AppCode code="102" /> MVVM 模式

<ClientOnly><AppRead code="v10003" /></ClientOnly>

官方解释：Vue 虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。

## 什么是 MVVM 模式？

MVVM 是一种新的开发模式，对比传统模式，例如我们要更新 DOM ，一般都是通过 JavaScript 处理数据然后操作 DOM API 将数据渲染到页面上。后续每一次修改数据后，都要重新调用 DOM API 进行数据渲染。当用户操作表单信息后，也要将数据同步到 JavaScript 数据中，这一系列操作将会变得很繁琐。而在 MVVM 模式中，我们只要关心数据层面，而不需要关心渲染逻辑层面，假设我们修改 JavaScript 中的数据后，Vue 会自动实时将数据渲染到页面上，当我们操作视图中表单的数据时，Vue 也会实时的将数据同步到 JavaScript，并不需要我们自己手动调用操作 DOM API 的一系列操作。

**MVVM 主要分为 Model、View、ViewModel 三者**

-   Model：代表数据模型，数据和业务逻辑都在 Model 层中定义
-   View：代表 UI 视图，负责数据的展示
-   ViewModel：负责监听 Model 中数据的改变并且控制视图的更新

MVVM 模式简化了界面与业务的依赖，解决了数据频繁更新。MVVM 在使用当中，利用双向绑定技术，使得 Model 变化时，ViewModel 会自动更新，而 ViewModel 变化时，View 也会自动变化。

以下通过代码的方式进行了解 Model、View、ViewModel

```vue
<template>
    <div id="app">{{ message }}</div>
</template>
```

在 template 中的代码就相当于 View 视图层

```javascript
const app = new Vue({
    el: '#app',
    data: function () {
        return {
            message: 'Hello Vue!'
        }
    }
})
```

其中选项 data 就是 Model 数据层，而 new Vue 则是 ViewModel 控制层，负责监听数据层发生变化，更新视图层。监听视图层发生变化更新数据层。

<AppComment />