<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('a10008')
</script>

# <AppCode code="99" /> axios 二次封装

<ClientOnly><AppRead code="a10008" /></ClientOnly>

基本上每一个项目开发，都必须要二次封装 axios。主要是为了减少重复性工作，不可能每一次发起新请求时，都要重新配置请求域名、请求头 Content-Type、Token 等信息。所以需要把公用的部分都封装成一个函数，每次调用的时候只需要传入变化的参数。

:::warning 注意
基于上个案例在继续做优化，如需要请查看 [axios 响应拦截器](/documents/part3/axios/advanced.html#响应拦截器)。
:::

## 封装

src/plugins/axios.js

```javascript
import axios from 'axios'
import qs from 'qs'

/**
 * 请求拦截器
 */
axios.interceptors.request.use((config) => {
    config.data = qs.stringify(config.data)

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
 * 接口请求方法
 */
const request = (method, option) => {
    return axios({
        method: method,
        url: 'https://study.noxussj.top' + option.url,
        data: option.data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export default {
    get: (option) => request('get', option),
    post: (option) => request('post', option),
    put: (option) => request('put', option)
}
```

## 调用

这样每次发起请求时，只需要把 二次封装的 axios 引入进来使用即可。可以大幅减少代码数量。

```javascript
import axios from './plugins/axios.js'

/**
 * 发起请求
 */
const p1 = axios.post({
    url: '/api/login',
    data: { account: 'test', password: '123456' }
})

p1.then((res) => {
    console.log(res.data)
})
```

<AppComment />