<script setup>
import Image1 from "./images/image1.png"
import Image2 from "./images/image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('n10022')
</script>

# 在线 Visual Studio Code

<ClientOnly><AppRead code="n10022" /></ClientOnly>

限时提供在线 `Visual Studio Code` 服务，针对有些宝子们，想做实践练习，但是又不想在自己电脑上搭配一套开发环境的，这是一个不错的选择。

## 优势

-   开箱即用：无需下载安装，打开网页即可使用

-   跨平台：支持 Windows、Mac 操作系统

-   跨终端：支持手机、平板、电脑随时随地编码

-   无延迟：使用了 `CDN` 加速，以及服务器带宽为 `300 Mbps` 的网络，保证了你的编码体验

-   高性能：`20 核` 服务器 CPU 高速运行代码

-   集成开发环境：安装了 `nvm` 管理工具，可以自由切换 `node` 版本

## 使用方法

::: danger
平台不提供存储数据服务，请宝子们用完数据自行清除！避免影响他人使用。
:::

访问地址 `https://vscode.noxussj.top/`

为了避免滥用资源的情况，访问是需要密码的，需要使用的宝子们请主动联系博主哦！[小小菜园](/noxussj/)

<AppImage :src="Image1" />

预览效果

<AppImage :src="Image2" />
