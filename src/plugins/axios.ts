import axios from 'axios'
import * as qs from 'qs'
import { getCookie } from '@/utils/cookie'

/**
 * 请求拦截器
 */
axios.interceptors.request.use((config: any) => {
    const param: any = qs.parse(config.data)
    config.data = qs.stringify(param)

    return config
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use((response: any) => {
    return response
})

/**
 * 接口请求方法
 */
const request = (method: string, option: any, fn: Function = (x: any) => x) => {
    return new Promise((resolve) => {
        if (option.url) {
            const param = qs.stringify(option.param, { arrayFormat: 'repeat' })

            if (typeof window !== 'undefined') {
                axios({
                    method: method,
                    url: option.url,
                    params: method === 'get' ? option.param : {},
                    data: param,
                    headers: {
                        ...{
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'x-csrf-token': getCookie('csrfToken')
                        },
                        ...(option.headers || {})
                    },
                    withCredentials: false, // 携带cookie
                    timeout: 60000,
                    responseType: option.responseType || ''
                })
                    .then((res: any) => {
                        resolve(fn(res.data))
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
        } else {
            resolve(fn(false))
        }
    })
}

export default {
    get: (option: any, fn: Function = (x: any) => x) => request('get', option, fn),
    post: (option: any, fn: Function = (x: any) => x) => request('post', option, fn),
    put: (option: any, fn: Function = (x: any) => x) => request('put', option, fn)
}
