<script setup>
import Image1 from "./design/_image1.png"
import Image2 from "./design/_image2.png"
import Image3 from "./design/_image3.png"
import { loginRead } from '@/utils/login-read'

loginRead('g10006')
</script>

# <AppCode code="24" /> 蓝湖设计图

<ClientOnly><AppRead code="g10006" /></ClientOnly>

## 介绍

前面已经介绍了如何使用 git 来管理我们的项目代码。这里顺带介绍一下，在企业实际开发中，基本上都是有设计图的存在，前端是按照设计图去开发实现，并不是自己凭空想象页面长什么样子。蓝湖就是目前比较主流的设计图网站。在设计图上面可以方便查看任何一个元素的尺寸大小、间距、字体大小等，以及点击图片直接下载切图。

## 使用

加入团队后，是能够看见设计图的。

<AppImage :src="Image1" />

<br />

并且拥有设计席位权限后可以看到标注信息

<AppImage :src="Image2" />

<br />

还能够进行切图的下载

<AppImage :src="Image3" />

<AppComment />