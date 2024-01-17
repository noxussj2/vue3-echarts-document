import { IVisitor } from '@/api/note'
import * as qs from 'qs'
import { getCookie } from '@/utils/cookie'
import { IToken } from '@/api/csrf'

async function run() {
    /**
     * 获取 CSRF Token
     */
    const token = await IToken()
    typeof window !== 'undefined' && window.localStorage.setItem('token', token)

    const search = typeof window !== 'undefined' && window.location.search.replace('?', '')

    const param = search ? qs.parse(search) : {}

    const performanceNavigationTiming: any = typeof window !== 'undefined' && performance.getEntries()[0]

    const load = performanceNavigationTiming.domContentLoadedEventEnd || 0

    await IVisitor({ width: screen.width, source: param.s || param.source || '', load })
}

run()
