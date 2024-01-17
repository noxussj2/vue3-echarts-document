<script setup>
import Image1 from "./project/_image1.png"
import Image2 from "./project/_image2.png"
import Image3 from "./project/_image3.png"
import Image4 from "./project/_image4.png"
import { loginRead } from '@/utils/login-read'

loginRead('w10003')
</script>

# <AppCode code="83" /> 搭建工程化项目

<ClientOnly><AppRead code="w10003" /></ClientOnly>

1. 首先创建一个 study 空文件夹，并且把它拖到 VS Code 里面。

<AppImage :src="Image1" />

<br />

2. 在 VS Code 中打开终端，快捷键 `ctrl + ~`

<AppImage :src="Image2" />

<br />

3. 在命令行中输入 `npm init`，在接下来所有选项中全部按 "回车" 采用默认即可。

<AppImage :src="Image3" />

<br />

4. 初始化完毕后，在项目根目录下会出现 package.json 文件，该文件主要是记录项目信息的。

<AppImage :src="Image4" />

<br />

5. 后面工程化项目中安装的插件都会被记录到该文件中，包括其版本号信息等。

<AppComment />