import revise from './revise'

const sidebar = {
    '/guide/': [
        {
            text: '指南',
            collapsable: false,
            link: '',
            items: [
                {
                    text: '介绍',
                    collapsable: false,
                    link: '/guide/introduce/',
                    items: []
                },
                {
                    text: '快速上手',
                    collapsable: false,
                    link: '/guide/getting-started/',
                    items: []
                },
                {
                    text: '优化图表',
                    collapsable: false,
                    link: '/guide/parameter/',
                    items: []
                }
            ]
        },
        {
            text: '进阶',
            collapsable: false,
            link: '',
            items: [
                {
                    text: '继承配置项',
                    collapsable: false,
                    link: '/guide/inherit/',
                    items: []
                },
                {
                    text: '全局配置文件',
                    collapsable: false,
                    link: '/guide/config/',
                    items: []
                }
            ]
        }
    ],
    ...revise
}

export { sidebar }
