<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('w10007')
</script>

# <AppCode code="87" /> Hash 缓存

<ClientOnly><AppRead code="w10007" /></ClientOnly>

## 输出文件名（Hash）

静态资源缓存是前端性能优化的一个点，所以在前端开发过程中，一般会最大限度的利用缓存（这里主要是强缓存）。如果设置了强缓存后，每次当我们部署了新的项目文件到线上的时候，因为文件名称没有变化，浏览器就会读取本地缓存中的 bundle.js 文件，导致了我们新的 bundle.js 没有被加载。所以我们每次部署的时候都要把 bundle.js 改成另外一个名字，这里就会用到 Hash。

Hash 有以下几种：

**hash**

项目中的任何一个地方改动，整个打包出来的文件 Hash 都会发生变化，所有文件的 Hash 值相同。

**chunkhash**

每个分包 / 按需加载模块的 Hask 都是相同的，模块中的任何一个地方改动，只会影响当前模块所有文件的 Hash 发生变化。

**contenthash**

每个文件都是一个单独的 Hash，文件发生变化后，单个文件的 Hash 也会发生变化。

## 建议

推荐使用 contenthash 进行缓存

推荐使用 8 位的 hash 值进行缓存 [contenthas: 8]

```javascript
module.exports = {
    output: {
        path: './dist',
        filename: '[contenthash:8]bundle.js'
    }
}
```

<AppComment />