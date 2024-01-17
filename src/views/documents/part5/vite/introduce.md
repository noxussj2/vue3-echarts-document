# 下一代前端工具链 Vite

:::tip 提示
Vite 内部使用的是 [rollup](/documents/part7/rollup/introduce.html) 打包工具，而不是 webpack。
:::

`Vite` 将会作为下一代的前端工具链，`Vite` 具有极速启动项目，轻量快速的热重载 `HMR` 等一系列功能。

## 现实问题

在此之前我们启动一个 `Webpack` 项目，`Webpack` 开发服务器都必须先将所有的源码、依赖项加载一遍并进行处理。

如果是小型项目可能没有太大感觉，当我们的项目越来越庞大的时候，这个处理和打包的时间可以要了我们的命。例如我们启动项目的时间可能要等上几分钟，当你修改了文件代码后，又要等待重新编译 10 秒左右才能在浏览器中反映出来。在一个开发模式下，如此的反复等待会极其得浪费我们的时间，大幅的降低了我们的开发效率和心态。

## Module Script

`Vite` 最核心的部分就是利用了 Module Script 的特性，即 `<script type="module">` 。

目前大部分浏览器已经支持 ESM 模块化标准了，也就是说可以直接在浏览器中使用 `ES6` 语法。但是有以下前提条件。

-   `ES6` 代码必须写在 `<script type="module">` 下才能生效。

-   写了 `<script type="module">` 的 `.html` 文件必须运行在服务端才可访问。

<br />

在此之前浏览器都是不支持的，所以就会涉及到 `Webpack`、`Rollup`、`Parcel` 等打包工具的使用，将我们的源代码进行处理和打包，甚至是语法降级，最终生成的代码能够在浏览器中运行。

`Vite` 就从此诞生了，`Vite` 会利用生态系统中的新特性解决以上问题，例如目前浏览器原生支持 ESM 模块化标准，就能省掉一部分的处理和打包工作。

## 新的主入口文件

在一个 `Vite` 项目中，`index.html` 是存在于项目的根目录中的。当你的项目运行或者打包时， `Vite` 会将该文件作为主入口文件，而不再是 `src/main.ts`

`Vite` 将会解析 `<script type="module">` 或者是 `<link rel="stylesheet">` 标签。例如将 `TypeScript` 转为 `JavaScript`，`Sass` 转为 `CSS`、文件缓存等等一系列处理。

:::code-group

```html [index.html]
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + Vue + TS</title>
        <link rel="stylesheet" href="/src/styles/comm.scss" />
    </head>
    <body>
        <div id="app"></div>
        <script type="module" src="/src/main.ts"></script>
    </body>
</html>
```

:::
