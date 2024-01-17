<script setup>
import Image1 from "./advanced/_image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('a10007')
</script>

# <AppCode code="98" />axios 进阶

<ClientOnly><AppRead code="a10007" /></ClientOnly>

## 接口传参方式

使用 xhr 原生技术或者是 axios 时，它的 post 传参方式是键值对的形式 `key=value`。但是在实际开发中一般是使用对象的形式定义数据，方便读取和赋值。所以当我们需要发起请求时可以通过 qs 这一款插件将对象转成键值对形式，也可以将键值对形式转成对象，这样就省去了我们自己手动转换的代码。

:::warning 注意
接下来的会在上一个 axios 案例的基础上去做调整，如需要请查看 [axios 使用](/documents/part3/axios/introduce.html#使用)。
:::

<br />

1. 通过命令安装 qs 插件

```sh
$ yarn add qs
```

2. 修改传参方式

```javascript
import axios from 'axios'
import qs from 'qs'

const data = qs.stringify({
    account: 'test',
    password: '123456'
})

const p1 = axios({
    method: 'post',
    url: 'https://study.noxussj.top/api/login',
    data: data,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

p1.then((res) => {
    console.log(res.data)
})
```

3. 修改后预览效果，依然是可以正常请求接口。

<AppImage :src="Image1" />

## 请求拦截器

请求拦截器一般是指在请求前需要做的一些处理，例如配置默认请求参数，或者把对象转成键值传参对方式等。这里要记住，每一次新的请求都会先经过请求拦截器。例如我们可以把 qs 转换方法写在请求拦截器中，这样就不需要在每次请求前都要调用 qs 做数据处理，从而节省了部分代码，也让请求参数格式统一成对象形式。

:::warning 注意
基于上面的案例在继续做优化，如需要请查看 [axios 接口传参方式](/documents/part3/axios/advanced.html#接口传参方式)。
:::

```javascript
import axios from 'axios'
import qs from 'qs'

/**
 * 请求拦截器
 */
axios.interceptors.request.use((config) => {
    config.data = qs.stringify(data)

    return config
})

/**
 * 发起请求
 */
const data = { account: 'test', password: '123456' }

const p1 = axios({
    method: 'post',
    url: 'https://study.noxussj.top/api/login',
    data: data,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

p1.then((res) => {
    console.log(res.data)
})
```

修改后预览效果，依然是可以正常请求接口。

<AppImage :src="Image1" />

## 响应拦截器

响应拦截器一般是指接口响应成功，准备返回接收的数据之前做的一些处理。例如只返回核心部分数据、判断后端的 code 是否正常，错误则弹出提示框提示等。这里要记住，每一次新的请求数据返回之前都会先经过响应拦截器。

:::warning 注意
基于上面的案例在继续做优化，如需要请查看 [axios 请求拦截器](/documents/part3/axios/advanced.html#请求拦截器)。
:::

```javascript
import axios from 'axios'
import qs from 'qs'

/**
 * 请求拦截器
 */
axios.interceptors.request.use((config) => {
    config.data = qs.stringify(data)

    return config
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use((response) => {
    if (response.data.code !== 200) {
        alert('接口响应失败')
    }

    return response.data
})

/**
 * 发起请求
 */
const data = { account: 'test', password: '123456' }

const p1 = axios({
    method: 'post',
    url: 'https://study.noxussj.top/api/login',
    data: data,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

p1.then((res) => {
    console.log(res.data)
})
```

<AppComment />