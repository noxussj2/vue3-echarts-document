// https://vitepress.dev/guide/custom-theme
// import DefaultTheme from 'vitepress/theme'
import Index from './index.vue'
import { h } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import './style.css'
import registerElementPlus from '@/plugins/element-plus'
import globalComponents from '@/registered/global'
import './visitor' // 访客登记
import "../../../../echarts.config"

/**
 * 注册全局样式
 */
import '@/styles/reset-vitepress.scss'
import '@/styles/index.scss'

export default {
    extends: Theme,
    Layout: () => {
        const { frontmatter } = useData()

        const props = {
            class: frontmatter.value.layoutClass || ''
        }

        return h(Index, props)
    },
    enhanceApp({ app, router, siteData }) {
        /**
         * 注册全局组件
         */
        globalComponents(app)

        /**
         * 注册饿了么组件
         */
        registerElementPlus(app)
    }
}
