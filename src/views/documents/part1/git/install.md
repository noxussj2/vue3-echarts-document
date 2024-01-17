<script setup>
import Image1 from "./install/_image1.png"
import Image2 from "./install/_image2.png"
import Image3 from "./install/_image3.png"
import { loginRead } from '@/utils/login-read'

loginRead('g10003')
</script>

# <AppCode code="21" /> 安装

<ClientOnly><AppRead code="g10003" /></ClientOnly>

线上代码仓库创建好了之后，我们还需要通过 git 命令进行操作，但是在命令行 cmd 中输入 git 开头的命令时会提示不存在，所以我们需要安装 git 命令行工具。

## 官方下载地址

[https://git-scm.com/downloads](https://git-scm.com/downloads)

<AppImage :src="Image1" />

<AppImage :src="Image2" />

## 验证

git 安装完成后我们需要验证一下。

在命令行中输入 `git` 并回车后如果能显示以下内容就证明安装成功了。

<AppImage :src="Image3" />

下一篇将会介绍 git 上传、拉取文件/代码的完整流程。

<AppComment />