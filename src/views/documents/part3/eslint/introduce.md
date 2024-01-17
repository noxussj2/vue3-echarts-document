<script setup>
import Image1 from "./introduce/_image1.png"
import Image2 from "./introduce/_image2.png"
import Image3 from "./introduce/_image3.png"
import Image4 from "./introduce/_image4.png"
import Image5 from "./introduce/_image5.png"
import Image6 from "./introduce/_image6.png"
import { loginRead } from '@/utils/login-read'

loginRead('l10001')
</script>

# <AppCode code="91" /> ESLint 介绍

<ClientOnly><AppRead code="l10001" /></ClientOnly>

ESLint 是一款插件，主要用来检测编写的（ JavaScript ）代码是否符合规范。当然在一个团队中也会自定义一些规范条件。另外正常情况下我们不需要单独安装 ESLint 去使用，这里只是为了做演示。例如 vue-cli 脚手架搭建的项目一般都是帮你集成好了。

**ESLint 官方文档**

[https://eslint.bootcss.com](https://eslint.bootcss.com)

## 安装

1. 搭建一个空项目，并且通过命令 `npm init` 初始化 `package.json`

<AppImage :src="Image1" />

<br />

2. 通过 `yarn add eslint` 命令安装 ESLint 插件。

<AppImage :src="Image2" />

<br />

3. 通过 `npx eslint --init` 命令初始化 ESLint 配置文件。

<AppImage :src="Image3" />

<br />

4. 配置文件初始化完毕后，会在对应的目录下生成 ESLint 配置文件，后面可以在这里修改 ESLint 校验的规则。

<AppImage :src="Image4" />

<br />

5. 编写不符合规范的代码进行测试。

<AppImage :src="Image5" />

<br />

6. 通过 `npx eslint main.js` 命令执行 ESLint 校验代码。

<AppImage :src="Image6" />

代码中提示变量定义了却没有使用。以及文件末尾需要有一个换行符。

## ESLint 配置文件初始化步骤分析

```sh
How would you like to use ESLint（您想如何使用 ESLint ）？
  ● To check syntax only（只检查语法）
  ● To check syntax and find problems（检查语法并发现问题）
  ✔ To check syntax, find problems, and enforce code style（检查语法、发现问题并强制执行代码样式）
```

```sh
What type of modules does your project use（您的项目使用什么类型的模块化规范）？
  ✔ JavaScript modules (import/export)（ ESM 模块化规范）
  ● CommonJS (require/exports)（ Common JS 模块化规范）
  ● None of these（这些都不是）
```

```sh
Which framework does your project use（您的项目使用哪个框架）？
  ● React
  ● Vue.js
  ✔ None of these（这些都不是）
```

```sh
Does your project use TypeScript（您的项目使用 TypeScript 吗）？
  ✔ No
  ● Yes
```

```sh
Where does your code run（您的代码运行在什么环境）？
  ✔ Browser（浏览器环境）
  ● Node（ node 脚本环境）
```

```sh
How would you like to define a style for your project（您希望如何定义项目的样式风格）？
  ✔ Use a popular style guide（使用流行风格指南）
  ● Answer questions about your style（根据回答相关问题制定风格）
  ● Inspect your JavaScript file (s)（根据本地文件制定风格）
```

```sh
Which style guide do you want to follo（您想遵循哪种风格指南）？
  ● Airbnb : https://github.com/airbnb/javascript
  ✔ Standard : https://github.com/standard/standard
  ● Google : https://github.com/google/eslint-config-google
  ● XO : https://github.com/xojs/eslint-config-xo
```

```sh
What format do you want your config file to be in（您希望配置文件采用什么格式）？
  ● JavaScript
  ● YAML
  ✔ JSON
```

```sh
Would you like to install them now（是否现在安装这些依赖）？
  ● No
  ✔ Yes
```

```sh
Which package manager do you want to use（您要使用哪个包管理器）？
  ● npm
  ✔ yarn
  ● pnpm
```

最后会在项目根目录中生成 `.eslintrc.json` 文件。

<AppComment />
