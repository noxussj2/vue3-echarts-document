<script setup>
import Image1 from "./gitee/_image1.png"
import Image2 from "./gitee/_image2.png"
import Image3 from "./gitee/_image3.png"
import Image4 from "./gitee/_image4.png"
import Image5 from "./gitee/_image5.png"
import { loginRead } from '@/utils/login-read'

loginRead('g10002')
</script>

# <AppCode code="20" /> 线上代码仓库 gitee

<ClientOnly><AppRead code="g10002" /></ClientOnly>


gitee - 基于 Git 的代码托管和研发协作平台。这个是我们国内通用的代码管理仓库，除此之外还有比较火的国外的代码管理仓库 Github。国内用户访问 Github 网络不太稳定，所以我这边先用国内的进行讲解。

## gitee 官方地址

[https://gitee.com](https://gitee.com)

## 创建 git 仓库

1. 登录账号后，点击右上角的 + 号。

<AppImage :src="Image1" />

<br />

2. 输入你的项目名称，例如 course-e-project3、如果是学习可以公开项目的代码就选择开源。如果是私人重要的项目就选择为私有。

<AppImage :src="Image2" />

<br />

3. 完成创建，即可获得 git 仓库地址，通过 git 命令可以克隆项目进行开发。

<AppImage :src="Image3" />

<br />

4. 线上仓库已经建好了，如果需要其他认也能够访问你的 git，就需要设置一下开源。

<AppImage :src="Image4" />

<br />

5. 如果是空仓库不允许设置开源，只需要后续提交一下代码到仓库中即可。

<AppImage :src="Image5" />

下一篇将讲解如何利用 git 命令将本地的文件或代码上传到线上仓库。

<AppComment />