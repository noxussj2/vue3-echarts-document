<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('w10008')
</script>

# <AppCode code="88" /> Loader 加载器

<ClientOnly><AppRead code="w10008" /></ClientOnly>

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 " load (加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中"任务(task)"，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！

Loader 是 webpack 的核心特性，借助于 Loader 可以加载任何类型的资源，Loader 的工作原理就是负责资源文件从输入到输出的转换。

## 常用加载器

**css-loader**

把 css 代码添加到 js 模块中。

**style-loader**

把 js 模块的 css 代码添加到页面头部的 style 上面。

**file-loader**

大多数 loader 都像 css-loader 一样把资源模块转换为 js 代码的实现方式去工作，但是类似于图片、字体这些文件都是无法通过 js 的方式去表示的，所以需要用到 file-loader。

**url-loader**

file-loader 是将资源文件以文件的形式转到 dist 目录中。而 url-loader 是将资源文件转成 base64 的形式写在 js 中。但是文件体积过大会导致打包后的 js 过大，加载负担更大。url-loader 如果使用 limit, 则必须安装 file-loader。

**html-loader**

在 js 中加载 html 文件，html 的文件资源也可以使用 loader。

## 配置

webpack.config.js

```javascript
module.exports = {
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
}
```

<AppComment />