<script setup>
import Image1 from "./dependent/image1.png"
import Image2 from "./dependent/image2.png"
import Image3 from "./dependent/image3.png"
import Image4 from "./dependent/image4.png"
</script>

# 依赖预构建

当你首次启动 `vite` 时，`Vite` 在本地加载你的站点之前预构建了项目依赖。主要做的两件事情就是统一代码模块化标准和合并内置模块。

## 统一模块化标准为 ESM

`Vite` 会将所有的代码视为 `ESM` 模块代码，所以一开始会将模块标准为 `CommonJS` 和 `UMD` 的依赖项转为 `ESM` 模块。

## 合并内置模块

每当我们使用 `import` 导入一个文件的时候，都会视为一次 `http` 请求，而 `import` 的文件中内部中可能还会存在其他 `import`，当我们的组件化和模块化细分的很微小的时候，就会导致了页面加载时会存在一堆的 `http` 请求，大幅降低的网页的加载效率。

为了提高页面的加载性能，`Vite` 将依赖中的多个内置模块合并为单个模块，例如 `lodash` 库中存在 600 多个内置模块，当我们执行 `import _ from "lodash-es"` 时，也就意味着浏览器会同时发出 600 多个 `http` 请求，大量的 `http` 请求会造成网络的堵塞，从而大幅降低了页面的加载效率。通过 `Vite` 的预构建处理后，将其视为单个模块，最终只会执行一次 `http` 请求。

### 验证

假设我们从 `lodash-es` 中导入了 `forEach` 函数

<AppImage :src="Image1" width="100%" />

<AppImage :src="Image2" width="100%" />

<br />

而 `forEach.js` 文件中又导入了其他 4 个文件，里面就不细说了。

<AppImage :src="Image3" width="100%" />

<br />

按道理会有至少 5 次以上的 `http` 请求。因为是经过 `vite` 的预构建处理，所以最终只有一次 `http` 请求。

<AppImage :src="Image4" width="100%" />
