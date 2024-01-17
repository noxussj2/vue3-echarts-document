import { defineConfig } from 'vitepress'
import { nav } from '../../router/nav'
import { sidebar } from '../../router/sidebar'
import { algolia } from './algolia'

/**
 * 详细配置可查看官方文档
 * https://vitepress.dev/reference/site-config
 */
export default defineConfig({
    /**
     * 网站地图
     */
    sitemap: {
        hostname: 'https://note.noxussj.top'
    },

    /**
     * 网站语言，影响 algolia
     */
    lang: 'zh-CN',

    /**
     * 标题
     */
    title: '菜园前端',

    /**
     * 副标题
     */
    titleTemplate: false,

    /**
     * 描述
     */
    description: '前端学习笔记分享，小白都能看懂的笔记',

    /**
     * 网站图标
     */
    head: [['link', { rel: 'icon', href: '/logo.png' }]],

    /**
     * 缓存文件路径
     */
    cacheDir: '../../cache',

    /**
     * 打包出口路径
     */
    outDir: '../../dist',

    /**
     * 启用文章更新时间
     */
    lastUpdated: true,

    /**
     * 主题详细配置
     * https://vitepress.dev/reference/default-theme-config
     */
    themeConfig: {
        /**
         * 最近更新文案
         */
        lastUpdatedText: '更新时间',

        /**
         * 深浅模式 logo
         */
        logo: { light: '/logo.png', dark: '/logo.png' },

        /**
         * 底部版权信息
         */
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Noxussj | <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备18127147号-1</a>'
        },

        /**
         * 三级导航名称
         */
        outlineTitle: '本页目录',

        /**
         * 顶部导航菜单
         */
        nav: nav,

        /**
         * 侧边导航菜单
         */
        sidebar: sidebar,

        /**
         * 全局搜索配置
         */
        algolia,

        /**
         * github 地址
         */
        socialLinks: [{ icon: 'github', link: 'https://github.com/noxussj2' }]
    }
})
