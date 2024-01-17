<script setup>
import Image1 from "./markdown/image1.png"
import Image2 from "./markdown/image2.png"
import Image3 from "./markdown/image3.png"
import Image4 from "./markdown/image4.png"
import Image5 from "./markdown/image5.png"
import Image6 from "./markdown/image6.png"
import Image7 from "./markdown/image7.png"
import Image8 from "./markdown/image8.png"
import Image9 from "./markdown/image9.png"
import Image10 from "./markdown/image10.png"
import Image11 from "./markdown/image11.png"
import Image12 from "./markdown/image12.png"
import Image13 from "./markdown/image13.png"
import Image14 from "./markdown/image14.png"
import { loginRead } from '@/utils/login-read'

loginRead('n10014')
</script>

# Markdown 使用教程

<ClientOnly><AppRead code="n10014" /></ClientOnly>

## 介绍

markdown 是一种轻量级标记语言，可以用来编写文档。由于它的易读易写，并且也支持图片、表格、代码块、HTML 代码，所以很多平台都支持用 markdown 来拽写文章。它的预览模式是将你的代码格式转为 HTML 格式。简直就是写文档的神器。

## 环境搭建

1. 我们可以用 VS Code 来编写 md 文档。

2. 其次要把 [Prettier](/documents/part1/html5/vscode.html#扩展插件) 格式化插件安装好。

<AppImage :src="Image1" />

## 开始用 markdown 发布一篇文章

以 [Visual Studio Code](/documents/part1/html5/vscode.html) 作为案例。

1. 首先创建一个 `demo.md` 文件。

<AppImage :src="Image2" />

<br />

2. 编写好 1 级、2 级标题。`#` 符号用来表示标题。

<AppImage :src="Image3" />

<br />

3. 在 VS Code 中按 `F1` 后在输入框中输入 `markdown` 关键词。选中在侧边打开预览模式。

<AppImage :src="Image4" />

<AppImage :src="Image5" />

<br />

4. "介绍" 模块添加内容。

<AppImage :src="Image6" />

<br />

5. "安装" 模块添加官网下载地址。用 `[]()` 表示超链接。`[]` 里面存放展示的文本，`()` 里面存放文本超链接。

<AppImage :src="Image7" />

<br />

6. "安装" 模块添加图片。用 `![]()` 表示，和超链接用法一样的，只是多了 `!` 代表是图片。

<AppImage :src="Image8" />

<br />

7. "汉化" 模块中的内容添加行内代码块。用 ` `` ` 表示。

<AppImage :src="Image9" />

<br />

8. "扩展插件" 模块添加 Prettier 多行代码。

<AppImage :src="Image10" />

<br />

9. "快捷键大全" 模块添加表格。

<AppImage :src="Image11" />

<br />

10. 其余重复内容这边就不一一列举了，大家可以自行完善。

11. 细心的小伙伴们可以发现，我们编写的文档预览模式中是密密麻麻的，不易于阅读。

<AppImage :src="Image12" />

<br />

12. 每一个段落添加换行符标签 `<br />`

<AppImage :src="Image13" />

<br />

13. 更换 VS Code 主题为 [One Dark Pro](/documents/part1/html5/vscode.html#扩展插件)，使得预览模式更加好看。

<AppImage :src="Image14" />

<br />
