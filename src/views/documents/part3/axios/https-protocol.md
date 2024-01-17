<script setup>
import Image1 from "./https-protocol/image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('a10004')
</script>

# <AppCode code="95" /> HTTPS 握手过程

<ClientOnly><AppRead code="a10004" /></ClientOnly>

## HTTP 通信的缺点

-   通信使用明文，内容可能被窃听(重要密码泄露)
-   不验证通信方身份，有可能遭遇伪装(跨站点请求伪造)
-   无法证明报文的完整性，有可能已遭篡改(运营商劫持)

## HTTPS 握手过程

1. 客户端发起 HTTPS 请求

用户在浏览器里输入一个 https 网址，与服务器建立 ssl 连接。

2. 服务端响应

服务器收到客户端请求后，确认加密通信协议版本是否一致，如果版本一致则返回服务器证书，否则关闭加密通信。

3. 客户端解析证书

客户端收到网站证书后会检查证书的颁发机构以及过期时间, 如果没有问题就随机产生一个秘钥。

4. 客户端传输秘钥给服务端

客户端利用公钥将秘钥加密, 并传输给服务端。

5. 服务端解密

服务端利用自己的私钥解密出秘钥。

6. 完成加密过程

之后服务器与客户端使用秘钥加密传输。

### 示例图

<AppImage2 :src="Image1" />

<AppComment />