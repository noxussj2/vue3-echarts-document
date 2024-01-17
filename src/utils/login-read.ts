import { IRead, IOnline } from '@/api/note'
import { IToken } from '@/api/csrf'
import { getCookie } from '@/utils/cookie'

let requestId = 0

let num = 0

let hasToken = false

/**
 * 登录和阅读
 */
const loginRead = async () => {
    if (typeof window !== 'undefined') {
        cancelAnimationFrame(requestId)

        /**
         * 获取 CSRF Token
         */
        if (hasToken === false) {
            const token = await IToken()
            typeof window !== 'undefined' && window.localStorage.setItem('token', token)
            hasToken = true
        }

        IRead({ url: location.pathname })

        const fn = () => {
            requestId = requestAnimationFrame(() => {
                fn()

                num++

                if (num >= 300) {
                    IOnline({ url: location.pathname, duration: 5 })

                    num = 0

                    cancelAnimationFrame(requestId)

                    fn()
                }
            })
        }

        if (process.env.NODE_ENV !== 'development') {
            fn()
        }
    }
}

export { loginRead }
