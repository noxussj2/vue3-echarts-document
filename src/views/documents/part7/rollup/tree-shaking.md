<script setup>
import Image1 from "./images/image1.png"
</script>

# Tree-shaking 摇树

:::warning 注意
使用 Tree Shaking 的前提是必须使用 ES Module 模块化标准。
:::

`Tree-shaking` 为了减少最终构建体积而诞生。在现实生活中就是在一棵树上将它枯萎的叶子摇晃下来，避免它继续吸收植物的营养。在开发中则是将没有被引用到的代码进行移除，从而减少项目的打包体积。

`Tree-shaking` 在优化方面的作用是非常强大的，例如使用第三方库 lodash 时，你只用了它其中的一两个 API ，但是打包的时候确实将上百个 API 都打包进来。项目的体积会有很大的变化。

## 支持

-   `Webpack 5` 的 `production` 打包环境下支持 `Tree-shaking`

-   `Rollup` 打包工具中支持 `Tree-shaking`

## 基础案例

根目录新建以下 2 个文件

::: code-group

```javascript [main.js]
import { name } from './data.js'

console.log(name)
```

```javascript [data.js]
const name = 'xiaoming'
const age = 18
const run = () => {
    console.log('I am running')
}

export { name, age, run }
```

:::

<br />

执行打包命令

```sh
npx rollup --config rollup.config.js
```

<AppImage :src="Image1" />

打包后项目根目录就会多出一个 `bundle.js` 文件。从上图中可以发现，我们只引入了变量 `name` 进行使用，而变量 `age` 和 函数 `run` 没有引入进行使用，所以不被打包。
