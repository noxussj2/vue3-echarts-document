# 安装

## YARN

通过 `yarn` 在项目中安装 `rollup` ，后续运行请使用 `npx`

```sh
yarn add rollup
```

## 初始化打包配置

### 新建 `rollup.config.js` 文件

因为后续要使用 `node.js` 命令执行该文件，所以这里要注意用 `CommonJS` 规范。

```javascript
module.exports = {
    input: 'main.js', // 主入口文件
    output: {
        file: 'bundle.js', // 打包文件
        format: 'esm' // 打包代码格式标准
    }
}
```
