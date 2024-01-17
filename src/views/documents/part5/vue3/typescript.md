# TypeScript 开发环境

`Vue2.0` 中源码是采用 `JavaScript` + `flow` 进行编写的。

`Vue3.0` 中源码是采用 `TypeScript` 进行编写的。

由于 `Vue3.0` 源码以及相关的社区都支持了 `TypeScript` 语法，并且自带了相关的类型声明文件，这对于我们开发有了更大的帮助，也是未来的一个趋势。

## 为什么使用 TypeScript

`TypeScript` 的类型系统可以在编码的阶段通过静态分析检测出很多常见的问题，例如定义了一个字符串，你却给它赋值数字，或者是一个函数接收布尔值的参数，你却传入了字符串类型等等。这将减少了运行的的错误频率，也让我们在开发项目中更加的有信心。在大多数的 `IDE` 编辑器工具中，例如 `VS Code` 中支持了类型的自动补全，提高了开发的体验和效率。

-   补一张类型校验图

## IDE 支持

强烈推荐使用 `Visual Studio Code` + `Volar` 进行开发。

`Volar` 是官方推荐的 `Vue3.0` 开发插件，它提供了很多的功能，例如对 `TypeScript` 的支持。

::: warning 注意
在使用 `Volar` 插件的时候，必须要把 `Vetur` 插件禁用掉，否则会出现很多的问题。而且 `Vetur` 是提供给 `Vue2.0` 使用的。
:::

-   补一张 Volar 插件图

## 配置文件

使用 `yarn create vite` 命令创建项目时，根目录下会存在一个预先配置好的 `tsconfig.json` 文件。除了默认的配置外，我们还可以进行一些额外的配置。

### 别名

在 `vite.config.ts` 中配置别名后，我们还需要在 `tsconfig.json` 中配置一下别名，否则在 `IDE` 中会报错，因为 `TypeScript` 并不识别你使用的别名。

:::code-group

```javascript [tsconfig.json]
{
    "compilerOptions": {
        "paths": {
            "@/*": ["src/*"],
            "utils/*": ["src/utils/*"]
        },
    }
}

```

:::
