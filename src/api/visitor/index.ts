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
 * 访客登记（测试）
 */
export const ITextVisitor: any = (param: object) => {
    return request.get({ url: '/api/v1/test/visitor', param: param }, async (res: any) => {
        return res
    })
}
