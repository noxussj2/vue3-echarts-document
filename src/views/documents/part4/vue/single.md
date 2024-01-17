<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('v10004')
</script>

# <AppCode code="103" /> 单文件组件形式

<ClientOnly><AppRead code="v10004" /></ClientOnly>

## 非单文件组件

可以理解为是通过 html 文件来使用 Vue。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <div id="app"></div>

        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
        <script>
            var app = new Vue({
                el: '#app',
                data: {
                    message: 'Hello Vue!'
                },
                template: '<div id="app">{{ message }}</div>'
            })
        </script>
    </body>
</html>
```

<AppPlayground href="https://codepen.io/noxussj/pen/LYBJYEO" />

这种方式在很多中小规模的项目中运作的很好，在这些项目里 JavaScript 只被用来加强特定的视图。但当在更复杂的项目中，或者你的前端完全由 JavaScript 驱动的时候，下面这些缺点将变得非常明显。

**非单文件组件缺点**

-   全局定义 (Global definitions) 强制要求每个 component 中的命名不得重复
-   字符串模板 (String templates) 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 \
-   不支持 CSS (No CSS support) 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
-   没有构建步骤 (No build step) 限制只能使用 HTML 和 ES5 JavaScript，而不能使用预处理器，如 Sass 和 Babel

## 单文件组件

文件扩展名为 `.vue` 的 single-file components (单文件组件) 为以上所有问题提供了解决方法，并且还可以使用 webpack 或 Browserify 等构建工具。

```vue
<template>
    <div>
        {{ message }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'hello world'
        }
    }
}
</script>
```

<AppPlayground href="https://codepen.io/noxussj/pen/eYjLYWv" />

这些特定的语言只是例子，你可以只是简单地使用 Babel、TypeScript、SCSS、PostCSS 或者其他任何能够帮助你提高生产力的预处理器。

单文件组件一般可以通过 Vue CLI 脚手架快速搭建一个项目，并且已经帮你配置好了 Babel、Webpack 热更新等功能。

后续所有和 Vue 相关的文章都会以单文件组件的形式来举例。

<AppComment />