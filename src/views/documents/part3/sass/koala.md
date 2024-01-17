<script setup>
import Image1 from "./koala/_image1.png"
import Image2 from "./koala/_image2.png"
import Image3 from "./koala/_image3.png"
import Image4 from "./koala/_image4.png"
import Image5 from "./koala/_image5.png"
import Image6 from "./koala/_image6.png"
import Image7 from "./koala/_image7.png"
import { loginRead } from '@/utils/login-read'

loginRead('s10002')
</script>

# <AppCode code="79" /> Koala 介绍

<ClientOnly><AppRead code="s10002" /></ClientOnly>

koala 是一个前端预处理器语言图形编译工具，支持 Less、Sass、Compass、CoffeeScript，帮助 web 开发者更高效地使用它们进行开发。跨平台运行，完美兼容 windows、linux、mac。

## 关键特性

**多语言支持**

支持 Less、Sass、CoffeeScript 和 Compass Framework。

**实时编译**

监听文件，当文件改变时自动执行编译，这一切都在后台运行，无需人工操作。

**编译选项**

可以设置各个语言的编译选项。

**项目配置**

支持为项目创建一个全局配置，为文件设置统一编译选项。

**错误提示**

在编译时如果遇到语法的错误，koala 将在右下角弹出错误信息，方便开发者定位代码错误位置。

**跨平台**

Windows、Linux、Mac 都能完美运行。

## 安装

下载地址

1. 开始下载软件

[http://koala-app.com/index-zh.html](http://koala-app.com/index-zh.html)

<AppImage :src="Image1" />

## 使用

1. 新建一个 study 项目，并且编写好 index.html 文件。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <div class="box">
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
        </div>
    </body>
</html>
```

<AppImage :src="Image2" />

<br />

2. 新建 index.scss 文件，并且编写好对应的 sass 样式。

```scss
$width: 100px;
$height: 100px;

.box {
    .box1 {
        width: $width;
        height: $height;
        background-color: #5cd8a2;
    }

    .box2 {
        width: $width;
        height: $height;
        background-color: #ffcb3d;
    }

    .box3 {
        width: $width;
        height: $height;
        background-color: #ff8077;
    }
}
```

<AppImage :src="Image3" />

<br />

3. 把 study 项目拖到 koala 中，它会自动识别所有 scss 文件同时生成对应的 css 文件。

<AppImage :src="Image4" />

<br />

4. 回到项目中，此时已经发现生成了 css 文件，进行查看编译后的 css。

<AppImage :src="Image5" />

<br />

5. 在 index.html 中引入 css 文件，记住不能直接引入 scss 文件，浏览器不会识别的。

<AppImage :src="Image6" />

<br />

6. 预览网页效果

<AppImage :src="Image7" />

<br />

7. 只要开启了 Koala 软件，它就会实时监听我们的 scss 文件。后续只要修改了 scss 文件，css 文件也会自动同步更新。

<AppComment />