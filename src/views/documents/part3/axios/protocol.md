<script setup>
import Image1 from "./protocol/image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('a10003')
</script>

# <AppCode code="94" /> HTTP 握手过程

<ClientOnly><AppRead code="a10003" /></ClientOnly>

## TCP 建立连接 3 次握手

1. 客户端请求连接服务器
2. 服务器响应成功
3. 客户端回应服务器准备开始连接

## TCP 结束连接 4 次挥手

1. 客户端向服务器发送，断开请求
2. 服务器向客户端发送，还有数据没有传输完毕，请稍等
3. 服务器向客户端发送，传输完毕，可以随时断开请求了
4. 客户端向服务器发送，你断开请求吧，不用回复了

然后各自断开请求

5. 服务器断开请求
6. 客户端等待 2 秒后没有收到消息，断开请求

**也可以这么理解**

1. 男：我要挂了哦
2. 女：等哈，我还要敷面膜
3. 女：我敷完了，现在可以挂了
4. 男：我舍不得挂，你挂吧

然后各自挂电话

5. 女：好吧，我挂了
6. 男：等了 2MSL 听见嘟嘟嘟的声音后挂断

<AppImage :src="Image1" />

<AppComment />