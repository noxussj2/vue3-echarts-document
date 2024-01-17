<script setup>
import Image1 from "./dev/_image1.png"
import Image2 from "./dev/_image2.png"
import Image3 from "./dev/_image3.png"
import Image4 from "./dev/_image4.png"
import Image5 from "./dev/_image5.png"
import { loginRead } from '@/utils/login-read'

loginRead('w10006')
</script>

# <AppCode code="86" /> 搭建本地开发服务器

<ClientOnly><AppRead code="w10006" /></ClientOnly>

:::warning 注意
在上一个案例的基础上添加本地开发服务器，请保留上个案例的代码。如需要请查看 [Webpack 使用](/documents/part3/webpack/use.html#使用)。
:::

搭建本地开发服务器这一个环节是非常有必要的，我们不可能每次修改源代码就重新打包一次。这样的操作是不是太繁琐了。所以本地开发服务器的作用就能体现了，它会自动监听我们的入口文件所关联的文件是否有变化，如果有则自动进行打包操作。

1. 通过命令 `yarn add webpack-dev-server` 安装 webpack 本地开发服务器插件。

<AppImage :src="Image1" />

<br />

2. 在之前 `webpack.config.js` 配置的基础上额外添加本地开发服务器配置。

```javascript
module.exports = {
    /**
     * 开发服务器
     */
    devServer: {
        port: 8000, // 启动的端口号
        open: true // 启动服务后自动打开浏览器
    }
}
```

<br />

3. 新建 public 文件夹，这个名称是固定的。把 index.html 文件移动到该目录下，并且修改 bundle.js 路径。

<AppImage :src="Image2" />

<br />

4. 通过命令 `npx webpack-dev-server` 运行本地开发服务器，运行后页面会自动打开。

<AppImage :src="Image3" />

<br />

5. 尝试修改样式文件 styles/index.scss 将 $height 改为 50px。

<AppImage :src="Image4" />

<br />

6. 保存样式文件后直接访问刚才打开的页面，可以看到已经实时更新了。

<AppImage :src="Image5" />

<AppComment />