<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('a10001')
</script>

# <AppCode code="92" /> 浏览器输入 URL 后执行过程

<ClientOnly><AppRead code="a10001" /></ClientOnly>

主要步骤如下

1. 浏览器通过 dns 查找域名的 ip 地址
2. 浏览器与目标服务器建立 tcp 连接（3 次握手）
3. 浏览器通过 http 协议发送请求
4. 服务器端响应 http 请求
5. 释放 tcp 连接（4 次挥手）
6. 浏览器解析 html 代码
7. 浏览器发送请求获取 html 中的资源（如图片、音频、视频、CSS、JS 等等）
8. 浏览器对页面进行渲染呈现给用户

<AppComment />