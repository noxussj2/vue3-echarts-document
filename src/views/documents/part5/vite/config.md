# 配置 vite.config.ts

:::danger 警告
如果修改了 vite.config.ts 配置文件后，必须要重新启动项目才会生效。
:::

以下将会列举一些常用的配置选项，详细内容可查看 [Vite 官方配置](https://cn.vitejs.dev/config/)

::: code-group

```js [vite.config.ts]
export default defineConfig({
    /**
     * 项目根目录位置
     */
    root: process.cwd(),

    /**
     * 访问静态资源的路径
     */
    base: '/',

    /**
     * 模式：默认是 development 其他选项为 production
     * 项目中可通过 import.meta.env.MODE 来获取当前所在的模式
     */
    mode: 'development',

    /**
     * 静态资源的文件夹，默认是 public
     */
    publicDir: 'public',

    /**
     * 依赖项缓存的目录，默认是 node_modules/.vite
     */
    cacheDir: 'node_modules/.vite',

    resolve: {
        /**
         * 别名，项目文件中可通过别名快速访问指定目录
         */
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },

    server: {
        /**
         * 通过哪个地址可以访问到我们的项目，默认是 localhost
         * 0.0.0.0 代表所有地址都可以访问，包含局域网、公网地址
         */
        host: '0.0.0.0',

        /**
         * 开发服务器使用的端口号，默认是 5173
         * 如果端口号被占用，则会自动尝试使用下一个可用的端口
         */
        port: 5174,

        /**
         * 热更新，默认 true
         * 当项目的文件被修改后，会实时同步到界面上。vite.config.ts 文件除外
         */
        hmr: true,

        /**
         * 配置自定义代理规则
         */
        proxy: {
            // http://localhost:5174/foo/login -> http://api.test.com/foo/login
            '/foo': 'http://api.test.com',

            // http://localhost:5174/api/login -> http://api.test.com/login
            '/api': {
                target: 'http://api.test.com',
                rewrite: (path) => path.replace('/api', '')
            }
        }
    },

    build: {
        /**
         * 代码混淆器，默认 esbuild 其他选项为 terser
         * esbuild 打包速度会比 terser 快 20-40 倍，压缩率相差 1% - 2%
         */
        minify: 'esbuild',

        /**
         * 打包输出路径，默认为根目录下 dist
         */
        outDir: 'dist',

        /**
         * 打包后静态资源目录，默认为 assets 即 dist/assets
         */
        assetsDir: 'assets',

        /**
         * 是否开启源代码地图，即在生产环境下可访问源代码。
         */
        sourcemap: false
    }
})
```

:::
