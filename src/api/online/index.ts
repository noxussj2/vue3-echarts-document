import request from '@/plugins/axios'


/**
 * 更新阅读时长
 */
export const IOnLine: any = (param: object) => {
    return request.post({ url:  '/api/v1/note/online', param: param }, async (res: any) => {
        return res
    })
}
