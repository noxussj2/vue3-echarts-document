import request from '@/plugins/axios'

/**
 * 获取文章详情
 */
export const IArticle: any = (param: any) => {
    return request.get({ url: '/api/v1/note/article/' + param.code }, async (res: any) => {
        return res
    })
}
