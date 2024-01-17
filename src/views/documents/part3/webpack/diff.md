<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('w10010')
</script>

# <AppCode code="90" /> Plugin 和 Loader 的区别

<ClientOnly><AppRead code="w10010" /></ClientOnly>

-   Loader 专注实现资源模块加载，从而实现整体项目的打包
-   Plugin 解决除了 loader 以外其他自动化工作
-   相比于 Loader，Plugin 拥有更宽的能力范围

<AppComment />