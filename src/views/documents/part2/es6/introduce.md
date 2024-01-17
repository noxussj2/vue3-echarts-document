<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('e10001')
</script>

# <AppCode code="77" /> ES6 介绍

<ClientOnly><AppRead code="e10001" /></ClientOnly>

在 ES5 的文档中已经介绍了什么是 ES6 了，这里在简单描述一下，就是 ECMAScript 2015 及之后发布的标准，简称 ES6 。主要的功能就是简化了 JS 的语法，使用最精简的代码实现更多的功能。

文档可以看看阮一峰老师写的 "[ES6 入门教程](https://es6.ruanyifeng.com)"，内容非常全面，但是你可能也看不完（像是一本书一样），有时间就去看吧。

**兼容性**

谷歌浏览器已经完全支持 ES6 了，部分浏览器还不支持，特别是 IE 这种。更不用想了。不支持 ES6 的浏览器，都必须安装插件，把 ES6 语法自动转成 ES5 语法。插件就叫 Babel 。网上的解决方案很多。但是我们现在这个阶段不用关心。

<AppComment />