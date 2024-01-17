import request from '@/plugins/axios'


/**
 * 获取全局统计
 */
export const ICount: any = (param: object) => {
    return request.post({ url:  '/api/v1/analysis/count', param: param }, async (res: any) => {
        return res
    })
}

/**
 * 获取单篇文章统计
 */
export const IArticle: any = (param: object) => {
    return request.post({ url:  '/api/v1/analysis/article', param: param }, async (res: any) => {
        return res
    })
}
