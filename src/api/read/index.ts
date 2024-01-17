import request from '@/plugins/axios'


/**
 * 阅读文章
 */
export const IRead: any = (param: object) => {
    return request.post({ url:  '/api/v1/note/read', param: param }, async (res: any) => {
        return res
    })
}
