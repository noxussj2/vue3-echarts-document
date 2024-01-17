<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('w10009')
</script>

# <AppCode code="89" /> Plugin 插件

<ClientOnly><AppRead code="w10009" /></ClientOnly>

插件是 webpack 的支柱功能。插件目的在于解决 loader 无法实现的其他事。Webpack 提供很多开箱即用的插件。

## 常用插件

**clean-webpack-plugin**

自动清理输出目录

**html-webpack-plugin**

自动生成使用 bundle.js 的 HTML

**copy-webpack-plugin**

拷贝文件到输出目录

## 用法

由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入一个 new 实例。

取决于你的 webpack 用法，对应有多种使用插件的方式。

## 配置方式

webpack.config.js

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过 npm 安装
const webpack = require('webpack') // 访问内置的插件

module.exports = {
    plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({ template: './src/index.html' })]
}
```

<AppComment />