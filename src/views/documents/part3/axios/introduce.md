<script setup>
import Image1 from "./introduce/_image1.png"
import Image2 from "./introduce/_image2.png"
import Image3 from "./introduce/_image3.png"
import { loginRead } from '@/utils/login-read'

loginRead('a10006')
</script>

# <AppCode code="97" /> axios 介绍

<ClientOnly><AppRead code="a10006" /></ClientOnly>

axios 是一款基于 javascript xhr 进行封装的插件，自己通过 xhr 进行编写 ajax 请求，实现起来逻辑比较复杂，axios 封装后将复杂的逻辑写在插件的内部，我们用户只需要关心如何调用即可。对我们的开发带来了很大的便捷。

## 安装

:::warning 注意
在 webpack 案例的基础上进行 axios 实现，请保留上个案例的代码。如需要请查看 [搭建本地开发服务器](/documents/part3/webpack/dev.html#搭建本地开发服务器)。
:::

通过命令安装 axios 插件

```sh
$ yarn add axios
```

<AppImage :src="Image1" />

## 使用

在 `main.js` 文件中编写 axios 代码。

```javascript
import axios from 'axios'

const p1 = axios({
    method: 'post',
    url: 'https://study.noxussj.top/api/login',
    data: 'account=test&password=123456',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

p1.then((res) => {
    console.log(res.data)
})
```

<AppImage :src="Image2" />

<br />

通过 `npx webpack-dev-server` 命令运行项目预览效果，同时在浏览器中按 F12 打开调试工具。

<AppImage :src="Image3" />

可以看到接口请求成功了。

<AppComment />