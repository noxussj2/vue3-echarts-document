<script setup>
import Image1 from "./xhr/_image1.png"
import Image2 from "./xhr/_image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('a10009')
</script>

# <AppCode code="100" /> 基于 xhr 实现 axios

<ClientOnly><AppRead code="a10009" /></ClientOnly>

上面我们讲到二次封装 axios ，但是现在我们尝试完全脱离 axios，自己实现一个 axios，由于 axios 底层是基于 xhr 做了二次封装，所以我们也可以尝试一下。

## xhr 二次封装

src/plugins/xhr.js

```javascript
/**
 * 请求拦截器队列
 * 响应拦截器队列
 */
const request = []
const response = []

/**
 * xhr 封装
 */
function axios(config) {
    return new Promise((resolve) => {
        request.forEach((fn) => (config = fn(config)))

        const { method, url, data, headers } = config

        /**
         * 新建请求
         */
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        /**
         * 设置请求头
         */
        for (const key in headers) {
            xhr.setRequestHeader(key, headers[key])
        }

        /**
         * 发送请求
         */
        xhr.send(data)

        /**
         * 监听返回值
         */
        xhr.onreadystatechange = () => {
            if (!(xhr.readyState === 4 && xhr.status === 200)) return

            let data = JSON.parse(xhr.responseText)

            response.forEach((fn) => (data = fn(data)))

            resolve(data)
        }
    })
}

/**
 * 拦截器定义
 */
axios.interceptors = {
    request: {
        use: (fn) => {
            request.push(fn)
        }
    },
    response: {
        use: (fn) => {
            response.push(fn)
        }
    }
}

export default axios
```

## axios 二次封装

src/plugins/axios.js

```javascript
import axios from './xhr'
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
    if (response.code !== 200) {
        alert('接口响应失败')
    }

    return response
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

<AppImage :src="Image1" />

修改后预览效果，依然是可以正常请求接口。

<AppImage :src="Image2" />

<AppComment />