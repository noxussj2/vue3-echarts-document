import request from '@/plugins/axios'


/**
 * 访客IP
 */
export const IIP: any = (param: object) => {
    return request.get({ url:  '/api/v1/note/ip', param: param }, async (res: any) => {
        return res
    })
}
