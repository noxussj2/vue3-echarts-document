import { getCookie } from '@/utils/cookie'
import * as qs from 'qs'

interface Option {
    next: Function
    complete: Function
}

/**
 * 实时流传输
 */
export const _fetch = (url: string, body: any = {}, option: Option) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-csrf-token': getCookie('csrfToken')
        },
        body: qs.stringify(body)
    }).then((response) => {
        // 创建可读流
        const reader = response.body.getReader()

        const read = () => {
            // 读取单次数据
            reader.read().then(({ done, value }) => {
                // 二进制转字符串
                const textDecoder = new TextDecoder('utf-8')
                let decodedString = textDecoder.decode(value)

                // 数据还未读取完毕
                if (done === false) {
                    decodedString = decodedString.replace(/(.+)(OK)/g, '$1')
                    if (decodedString !== 'OK') option.next(decodedString)
                    read()
                }

                // 数据已数据完毕
                if (done === true) {
                    option.complete()
                }
            })
        }

        read()
    })
}
