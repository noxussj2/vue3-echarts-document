<script setup>
import Image1 from "./use/_image1.png"
import Image2 from "./use/_image2.png"
import Image3 from "./use/_image3.png"
import Image4 from "./use/_image4.png"
import Image5 from "./use/_image5.png"
import Image6 from "./use/_image6.png"
import Image7 from "./use/_image7.png"
import Image8 from "./use/_image8.png"
import { loginRead } from '@/utils/login-read'

loginRead('w10005')
</script>

# <AppCode code="85" /> Webpack 使用

<ClientOnly><AppRead code="w10005" /></ClientOnly>

前几篇文章中已经介绍了如何初始化包管理器 package.json 这里不再重复介绍，如有需要请查看 [搭建工程化项目](/documents/part3/webpack/project.html)。

## 安装

:::warning 注意
请确保你已经安装了 yarn，如有需要请查看 [搭建工程化开发环境](/documents/part3/webpack/env.html#安装-yarn)。
:::

1. 通过命令 `yarn add webpack webpack-cli` 安装最新版本 webpack。

<AppImage :src="Image1" />

<br />

2. 然后项目中就会生成了 node_modules 目录，用于存第三方包代码。同时 package.json 也会同步第三方包版本信息。

<AppImage :src="Image2" />

## 使用

::: tip 回顾
接下来我们就在 scss 的案例中进行调整，不使用 koala 实时编译 scss，如果忘记这回事了请回顾 [Koala 介绍](/documents/part3/sass/koala.html#使用) 。这次我们使用 webpack 进行实时编译。
:::

1. 新建 main.js 入口文件，并且引入我们要用到的 scss 文件。

<AppImage :src="Image3" />

<br />

2. 新建 webpack.config.js 配置文件。

```javascript
const path = require('path')

module.exports = {
    /**
     * 打包模式
     */
    mode: 'production',

    /**
     * 打包入口文件
     */
    entry: './src/main.js',

    /**
     * 打包出口文件
     */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    /**
     * 模块
     */
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
```

<AppImage :src="Image4" />

<br />

3. 由于配置文件中使用到了 3 个 loader，所以需要通过 yarn 安装。

```sh
$ yarn add style-loader css-loader sass-loader sass
```

<AppImage :src="Image5" />

## 打包

1. 通过命令 `npx webpack` 打包项目，然后就会生成一个打包好的文件 `dist/bundle.js`

<AppImage :src="Image6" />

<br />

2. 我们新建一个 html 文件，并且引入该 bundle.js 文件。

<AppImage :src="Image7" />

<br />

3. 查看运行页面效果。

<AppImage :src="Image8" />

到此 webpack 打包就完成了

<AppComment />