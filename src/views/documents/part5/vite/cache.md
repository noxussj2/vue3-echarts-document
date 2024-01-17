<script setup>
import Image1 from "./cache/image1.png"
import Image2 from "./cache/image2.png"
import Image3 from "./cache/image3.png"
</script>

# 缓存

## 文件系统缓存

Vite 会将预构建的依赖项缓存到 `node_modules/.vite` 中。

<AppImage :src="Image1" width="100%" />

当以下内容发生更改时，会导致整个 `.vite` 目录被清空，然后重新运行预构建步骤。

-   包管理器的锁文件，例如 `yarn.lock` `package-lock.json` 等等

-   补丁文件夹的修改时间

-   `vite.config.js` 中的相关字段

-   `NODE_ENV` 的值

<br />

除了第一项可以进行验证以外，其他选项官方并没有给出明确的字段，故无法进行验证。

目前 demo 中的 `.vite` 是存在 `lodash-es` 缓存的。我们通过 `yarn` 将其进行删除。`yarn add` 或者 `yarn remove` 是会导致 `yarn.lock` 发生变更的。

<AppImage :src="Image2" width="100%" />

然后运行项目 `npm run dev` ，这个时候才会开始清空 `.vite` 目录，并且重新运行预构建步骤。

<AppImage :src="Image3" width="100%" />

<br />

如果出于某些原因，你想要强制 Vite 重新构建依赖项，你可以在启动开发服务器时指定 `--force` 选项，或者手动删除 `node_modules/.vite` 缓存目录。

```sh
vite --force
```

## 浏览器缓存

前面的文章 [基于 ESM 的开发服务器](/documents/part5/vite/work.html) 中也有介绍到，已预构建的依赖请求使用 HTTP 头 `max-age=31536000, immutable` 进行强缓存。
