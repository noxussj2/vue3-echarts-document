import request from '@/plugins/axios'

/**
 * 访客登记
 */
export const IVisitor: any = (param: object) => {
    return request.post({ url: '/api/v1/note/visitor', param: param }, async (res: any) => {
        return res
    })
}

/**
 * 阅读文章
 */
export const IRead: any = (param: object) => {
    return request.post({ url: '/api/v1/note/read', param: param }, async (res: any) => {
        return res
    })
}

/**
 * 更新文章阅读时长
 */
export const IOnline: any = (param: object) => {
    return request.post({ url: '/api/v1/note/online', param: param }, async (res: any) => {
        return res
    })
}
