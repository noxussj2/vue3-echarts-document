<script setup>
import Image1 from "./vscode/_image1.png"
import Image2 from "./vscode/_image2.png"
import Image3 from "./vscode/_image3.png"
import Image4 from "./vscode/_image4.png"
import Image5 from "./vscode/_image5.png"
import Image6 from "./vscode/_image6.png"
import Image7 from "./vscode/_image7.png"
import Image8 from "./vscode/_image8.png"
import Image9 from "./vscode/_image9.png"
import Image10 from "./vscode/_image10.png"
import Image11 from "./vscode/_image11.png"

import { loginRead } from '@/utils/login-read'
loginRead('h10001')
</script>

# <AppCode code="01" /> Visual Studio Code

<ClientOnly><AppRead code="h10001" /></ClientOnly>

:::warning 阅读要求
由于扩展插件部分是关于整个前端的，对于初学者来说会有些深入，需要有 Git、Vue、Prettier、本地服务器相关经验。
:::

## 什么是 Visual Studio Code？

`Visual Studio Code` 是微软推出的一款轻量级、免费、开源的代码编辑器，简称 `VS Code`。是目前比较主流的编写代码工具。它支持代码语法高亮、代码提示、代码片段、自定义代码主题、还有丰富的插件市场。内部还集成了命令行工具、Git 代码提交等强大功能。

## 安装

官方下载地址：[https://code.visualstudio.com](https://code.visualstudio.com)

<AppImage :src="Image1" />

<AppImage :src="Image2" />

## 汉化

我们下载完后是英文版的，所以要去 VS Code 的插件市场中去下载中文版插件 `Chinese`

<AppImage :src="Image3" />

安装插件后，重新启动 VS Code

<AppImage :src="Image4" />

## 开发习惯配置

以下是我的个人习惯，小伙伴们可以自行看是否需要

设置手动代码提示快捷键

文件 -> 首选项 -> 键盘快捷键方式

或者 Windows 快捷键：`CTRL + K + S`

<AppImage :src="Image5" />

## 扩展插件

VS Code 强大的插件市场，主要介绍几款常用的插件。

:::tip 提示
如果你目前用不上这些插件，可以先不用安装。
:::

### One Dark Pro

好看的代码主题

<AppImage :src="Image6" />

### GitLens — Git supercharged

Git 记录查看工具，方便随时随刻查看某个人某时间点改了某一行代码。方便查看单个文件的修改记录。目前小伙伴们可能用不上，需要先掌握 Git 技术后才能用。

<AppImage :src="Image7" />

### Path Autocomplete

URL 路径补充插件，当你需要查找某个 src 路径的时候，它会给你代码提示。例如写 img 标签的 src 路径时候能用上。

<AppImage :src="Image8" />

### Vuter

用于高亮 `.vue` 文件的代码，主要适用于 Vue2.0。目前如果用不上可以先不安装。

<AppImage :src="Image9" />

### Prettier - Code formatter

用于格式化大部分语言代码，还可以搭配配置文件，自定义格式化风格。

在项目根目录下新建 `.prettierrc` 文件。

```json
{
    "printWidth": 170,
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "none"
}
```

<AppImage :src="Image10" />

### Live Server

可以直接把你的 `.html` 文件部署到服务端。

<AppImage :src="Image11" />

## 快捷键大全

列举了比较常用的快捷键方式

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>功能名称</th>
            <th>快捷键</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>当前文件搜索</td>
            <td>Ctrl + F</td>
        </tr>
        <tr>
            <td>全局搜索</td>
            <td>Ctrl + Shift + F</td>
        </tr>
        <tr>
            <td>全选</td>
            <td>Ctrl + A</td>
        </tr>
        <tr>
            <td>将选中文本转换为大写</td>
            <td>Ctrl + U（需要设置快捷键）</td>
        </tr>
        <tr>
            <td>将选中文本转换为小写</td>
            <td>Ctrl + P（需要设置快捷键）</td>
        </tr>
        <tr>
            <td>折叠代码</td>
            <td>Ctrl + K + 0~9（代表多少级）</td>
        </tr>
        <tr>
            <td>展开折叠代码</td>
            <td>Ctrl + K + J</td>
        </tr>
        <tr>
            <td>跳入选中函数方法体</td>
            <td>F12</td>
        </tr>
        <tr>
            <td>复制</td>
            <td>Ctrl + C</td>
        </tr>
        <tr>
            <td>粘贴</td>
            <td>Ctrl + V</td>
        </tr>
        <tr>
            <td>打开终端</td>
            <td>Ctrl + ~</td>
        </tr>
        <tr>
            <td>删除当前行</td>
            <td>Ctrl + X</td>
        </tr>
        <tr>
            <td>撤销更改</td>
            <td>Ctrl + Z</td>
        </tr>
        <tr>
            <td>代码换行</td>
            <td>Alt + Z</td>
        </tr>
        <tr>
            <td>注释/取消注释</td>
            <td>Ctrl + /</td>
        </tr>
        <tr>
            <td>选中多列</td>
            <td>Shift + Alt + 鼠标移动</td>
        </tr>
        <tr>
            <td>连续选中关键词</td>
            <td>Ctrl + D</td>
        </tr>
        <tr>
            <td>复制行</td>
            <td>Shift + Alt + ↑ 或者 ↓</td>
        </tr>
        <tr>
            <td>移动行</td>
            <td>Alt + ↑ 或者 ↓</td>
        </tr>
        <tr>
            <td>重命名</td>
            <td>F2</td>
        </tr>
        <tr>
            <td>切换打开文件</td>
            <td>Ctrl + Tab</td>
        </tr>
        <tr>
            <td>切换应用</td>
            <td>Alt + Tab</td>
        </tr>
        <tr>
            <td>创建HTML5页面结构</td>
            <td>输入 html5</td>
        </tr>
        <tr>
            <td>跳转到上一个修改处</td>
            <td>Alt + ←</td>
        </tr>
        <tr>
            <td>跳转到下一个修改处</td>
            <td>Alt + →</td>
        </tr>
    </tbody>
</table>

<AppComment />
