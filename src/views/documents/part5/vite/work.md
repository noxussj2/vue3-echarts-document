<script setup>
import Image1 from "./work/image1.svg"
import Image2 from "./work/image2.svg"
import Image3 from "./work/image3.png"
import Image4 from "./work/image4.png"
</script>

# 基于 ESM 的开发服务器

## 传统开发服务器

在传统的开发服务器情况下，启动一个项目时，程序会先获取你的所有资源进行处理解析，处理完之后打包成一个 `bundle.js` 文件并传给浏览器运行。

<AppImage :src="Image1" width="100%" background="#313641" />

## 基于 ESM 的开发服务器

基于 `ESM` 的开发服务器刚好与传统的开发服务器相反，它是先启动一个项目服务，当你访问它的时候，它会通过 `http` 服务去请求你的主入口文件 `main.js` 一步步去分析和处理。例如 `main.js` 中注册的路由页面又引用了哪些模块依赖。最终呈现效果到网页上。

从而达到了真正的按需引入，当前页面用了哪些模块就加载哪些模块资源，而不会一次性把所有资源都加载进来，包括用不上的。所以首屏的渲染时间也大大减少了。

<AppImage :src="Image2" width="100%" background="#313641" />

## Vite 还做了更多的优化事情

`Vite` 不仅使用了基于 `ESM` 的开发服务器，它在项目启动和更新上还做了一些额外的优化。`Vite` 将项目的中代码区分为两大类，依赖和源码。

### 对依赖项做的处理

依赖指的是第三方库 `node_modules`，这些依赖基本上是不会有变动的，也不会特意去改它。

如果项目中用到的依赖包很多，那么平常通过 `JavaScript` 去处理的代价是很高的，甚至这些依赖还存在多种模块化的标准（例如 `ESM` 或者 `CommonJS`）。

所以 `Vite` 将会使用 `esbuild` 进行预构建依赖，而 `esbuild` 又是使用 `Go` 语言编写的，相比 `Javascript` 语言编写的预构建工具快 10-100 倍。

另外浏览器请求依赖资源时，通过 `Cache-Control: max-age=31536000,immutable` 进行强缓存，因此一旦被缓存它们将不需要再次请求了。

<AppImage :src="Image3" width="100%" />

### 对源码做的处理

我们的源码并非都是 `Javascript`， 可能还有 `Sass` `Vue` 之类的文件，这些文件都是要额外编译处理的，浏览器默认都是不支持的。

当浏览器请求源码时，`vite` 会进行转换和按需提供源码，不是当前路由下的源码不会提供。

另外浏览器请求源码时，通过 `304 Not Modified` 进行协商缓存。

<AppImage :src="Image4" width="100%" />

## 为什么生产环境仍需要打包

尽管原生 ESM 得到了广泛的支持，但是打包环节还是要有的。例如下面列举的一些事项，并不都是在开发的环境中适合的。

-   利用插件将代码进行压缩

-   Tree-shaking 移除没有作用的代码

-   根据路由懒加载实现分包 chunk

-   合并嵌套导入，减少 http 请求
