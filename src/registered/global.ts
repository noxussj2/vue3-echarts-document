import AppComment from '@/registered/AppComment.vue'
import AppImage from '@/registered/AppImage.vue'
import AppImage2 from '@/registered/AppImage2.vue'
import AppRead from '@/registered/AppRead.vue'
import AppPlayground from '@/registered/AppPlayground.vue'
import AppVSCode from '@/registered/AppVSCode.vue'
import AppCardBlank from '@/registered/AppCardBlank.vue'

/**
 * 注册全局组件
 */
export default (app: any) => {
    if (typeof window !== 'undefined') {
        app.component('AppComment', AppComment)
        app.component('AppImage', AppImage)
        app.component('AppImage2', AppImage2)
        app.component('AppRead', AppRead)
        app.component('AppPlayground', AppPlayground)
        app.component('AppVSCode', AppVSCode)
        app.component('AppCardBlank', AppCardBlank)
    }
}
