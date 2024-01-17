import request from '@/plugins/axios'


/**
 * 获取访问统计数据
 */
export const ICount2: any = (param: object) => {
    return request.post({ url:  '/api/v1/note/count', param: param }, async (res: any) => {
        return res
    })
}
