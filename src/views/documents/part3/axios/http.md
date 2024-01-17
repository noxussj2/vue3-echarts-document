<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('a10002')
</script>

# <AppCode code="93" /> HTTP 介绍

<ClientOnly><AppRead code="a10002" /></ClientOnly>

HTTP 协议一般指 HTTP（超文本传输协议）。超文本传输协议（英语：HyperText Transfer Protocol，缩写：HTTP）是一种用于分布式、协作式和超媒体信息系统的应用层协议，是因特网上应用最为广泛的一种网络传输协议，所有的 WWW 文件都必须遵守这个标准。

HTTP 是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。

HTTP 是一个基于 TCP/IP 通信协议来传递数据的（HTML 文件、图片文件、查询结果等）。

## HTTP 请求方法

根据 HTTP 标准，HTTP 请求可以使用多种请求方法。

HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD 方法。

HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 方法。

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>方法</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>请求指定的页面信息，并返回实体主体。</td>
        </tr>
        <tr>
            <td>HEAD</td>
            <td>类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头。</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>从客户端向服务器传送的数据取代指定的文档的内容。</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>请求服务器删除指定的页面。</td>
        </tr>
        <tr>
            <td>CONNECT</td>
            <td>HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。</td>
        </tr>
        <tr>
            <td>OPTIONS</td>
            <td>允许客户端查看服务器的性能。</td>
        </tr>
        <tr>
            <td>TRACE</td>
            <td>回显服务器收到的请求，主要用于测试或诊断。</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>是对 PUT 方法的补充，用来对已知资源进行局部更新 。</td>
        </tr>
    </tbody>
</table>

## HTTP 常见状态码

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>状态码</th>
            <th>名称</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>200</td>
            <td>OK</td>
            <td>请求成功。一般用于 GET 与 POST 请求。</td>
        </tr>
        <tr>
            <td>301</td>
            <td>Moved Permanently</td>
            <td>永久移动。请求的资源已被永久的移动到新 URL，返回信息会包括新的 URL，浏览器会自动定向到新 URL。今后任何新的请求都应使用新的 URL 代替。</td>
        </tr>
        <tr>
            <td>302</td>
            <td>Found</td>
            <td>临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URL</td>
        </tr>
        <tr>
            <td>304</td>
            <td>Not Modified</td>
            <td>未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源。</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request</td>
            <td>客户端请求的语法错误，服务器无法理解。</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Unauthorized</td>
            <td>请求要求用户的身份认证。</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Forbidden</td>
            <td>服务器理解请求客户端的请求，但是拒绝执行此请求。</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found</td>
            <td>服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面</td>
        </tr>
        <tr>
            <td>500</td>
            <td>Internal Server Error</td>
            <td>服务器内部错误，无法完成请求。</td>
        </tr>
        <tr>
            <td>502</td>
            <td>Bad Gateway</td>
            <td>作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应。</td>
        </tr>
    </tbody>
</table>

## Content Type 类型

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>分类</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>application/x-www-form-urlencoded</td>
            <td>表单提交格式</td>
        </tr>
        <tr>
            <td>multipart/form-data</td>
            <td>表单文件上传格式</td>
        </tr>
        <tr>
            <td>application/json</td>
            <td>JSON 字符串格式</td>
        </tr>
    </tbody>
</table>

<AppComment />