# 一款小巧的打包工具 Rollup

## 概念

`Rollup` 是一款小巧的 `ESM` 打包器，所以后期写的代码必须遵循 `ESM` 模块化标准规范。

支持 [`Tree-shaking`](./tree-shaking)

不支持类似 `HMR` 这种高级特性

打包的结果比 `Webpack` 要小

## 与 Webpack 的比较

`Rollup` 显得更为小巧，因为 `Webpack` 搭配一些 `loader` 和 `plugin` 几乎可以完成前端工程化中绝大多数的工作，而 `Rollup` 仅仅是一个 `ESM` 打包器，并没有其他额外的功能。

`Rollup` 并非要与 `Webpack` 进行竞争，两者的方向不同，`Rollup` 更偏向于 `ESM` ，利用其的各项特性进行高效打包。
