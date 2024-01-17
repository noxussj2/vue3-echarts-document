import request from '@/plugins/axios'

/**
 * GPT 问答助手
 */
export const IChatGpt: any = (param: object) => {
    return request.post({ url: '/api/v1/note/gpt', param: param, responseType: 'stream' }, async (res: any) => {
        return res.choices[0].message
    })
}
