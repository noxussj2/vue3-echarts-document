import iconHtml5 from './images/html5.png'
import iconCss3 from './images/css3.png'
import iconEs6 from './images/es6.png'
import iconGit from './images/git.png'
import iconJs from './images/js.png'
import iconSass from './images/sass.png'
import iconWebpack from './images/webpack.png'
import iconESLint from './images/eslint.png'
import iconAxios from './images/axios.png'
import iconVue from './images/vue.png'
import iconElementUI from './images/element-ui.png'
import iconPinia from './images/pinia.png'
import iconElementPlus from './images/element-plus.png'
import iconVite from './images/vite.png'
import iconTs from './images/ts.png'
import iconEcharts from './images/echarts.png'
import iconTencentMap from './images/tencent-map.png'
import iconThree from './images/three.png'
import iconHandlebars from './images/handlebars.png'
import iconPlop from './images/plop.png'
import iconRollup from './images/rollup.png'
import iconSnabbdom from './images/snabbdom.png'
import iconNPM from './images/npm.png'
import iconGithub from './images/github.png'
import iconSSG from './images/ssg.png'
import iconSSR from './images/ssr.png'
import iconNuxt from './images/nuxt.png'
import iconVercel from './images/vercel.png'
import iconGridsome from './images/gridsome.png'
import iconPromise from './images/promise.png'
import iconLeetCode from './images/leetcode.png'
import iconNode from './images/node.png'
import iconExpress from './images/express.png'
import iconKoa from './images/koa.png'
import iconEgg from './images/egg.png'
import iconGraphql from './images/graphql.png'
import iconMysql from './images/mysql.png'
import iconMongodb from './images/mongodb.png'
import iconAliyun from './images/aliyun.png'

export const stage1 = [
    {
        icon: iconHtml5,
        name: 'HTML5',
        details: '包含 HTML、HTML5、Web标准; W3C 规范介绍，以及前端常用的开发软件 VSCode 下载安装。列举了 16 种常用标签和一部分语义化标签。',
        link: '/documents/part1/html5/vscode.html'
    },
    {
        icon: iconCss3,
        name: 'CSS3',
        details: '介绍了什么是 CSS？以及 CSS3 有哪些新特性。列举了 27 种常用的样式案例。还有选择器、flex 布局的使用、三种定位的区别。',
        link: '/documents/part1/css3/css.html'
    },
    {
        icon: iconGit,
        name: 'Git',
        details: 'Git 是我们程序员必不可少的一款线上仓库管理工具，几乎所有的项目代码都会存储在仓库中。文章中主要介绍了 Git 的安装、使用。',
        link: '/documents/part1/git/git.html'
    }
]

export const stage2 = [
    {
        icon: iconJs,
        name: 'JavaScript 基础',
        details: 'JavaScript 是前端的核心技术，是必须要掌握的。基础中包含了数据类型、基础语法、内置对象、事件、BOM、DOM 对象模型。',
        link: '/documents/part2/javascript-base/javascript.html'
    },
    {
        icon: iconJs,
        name: 'JavaScript 进阶',
        details: 'JavaScript 进阶中基本上都是概念性、原理性的内容。在所有前端面试中，进阶中提到的任何问题都是高频被面试官问到的。',
        link: '/documents/part2/javascript-advanced/thread.html'
    },
    {
        icon: iconJs,
        name: 'JavaScript 高级',
        details:
            'JavaScript 高级是最难的一部分，并不是常用的数据结构使用、常见的算法知识等。而是遇到实际场景中要学会利用这些知识去更好的解决问题，例如 LeetCode中的题目。',
        link: '/documents/part2/javascript-senior/introduce.html'
    },
    {
        icon: iconEs6,
        name: 'ES6',
        details: 'ES6 是 JavaScript 中的一个新的标准，也是新的简洁的一种 JavaScript 语法。主要大幅精简了 JavaScript 编写的代码。',
        link: '/documents/part2/es6/introduce.html'
    }
]

export const stage3 = [
    {
        icon: iconSass,
        name: 'Sass',
        details: 'Sass 和 ES6 很类似，Sass 是属于大幅精简 css 代码的一个插件。实现了在 css 中写 "JavaScript"。',
        link: '/documents/part3/sass/introduce.html'
    },
    {
        icon: iconWebpack,
        name: 'Webpack',
        details: '前端主流的代码打包工具，将项目中的代码进行过滤、压缩、混淆、解析，最终输出成一个包。文章中还包含了前端工程化的介绍，一种全新的开发思想。',
        link: '/documents/part3/webpack/introduce.html'
    },
    {
        icon: iconESLint,
        name: 'ESLint',
        details: 'ESLint 是一款代码校验工具/插件，当你在编写代码时，可以实时的检测你书写代码是否规范。当然你也可以自定义代码规范，使得团队开发的规范性更强。',
        link: '/documents/part3/eslint/introduce.html'
    },
    {
        icon: iconAxios,
        name: 'Axios',
        details: '由于使用 JavaScript 原生的 xhr 进行数据接口请求实现难度大，所以市面上会有很多封装好的 ajax 库，例如 Axios 就是其中的一款，使用起来非常简单。',
        link: '/documents/part3/axios/url.html'
    }
]

export const stage4 = [
    {
        icon: iconVue,
        name: 'Vue2.0',
        details: '前端三大主流框架之一，适合中小型项目开发。相比传统模式，使用 Vue 进行项目开发可以大幅提升开发效率。',
        link: '/documents/part4/vue/introduce.html'
    },
    {
        icon: iconVue,
        name: 'Vue Router 3.0',
        details: '基于 Vue 实现的前端路由',
        link: '/documents/part4/ecology/router/introduce.html'
    },
    {
        icon: iconVue,
        name: 'Vuex 3.0',
        details: '基于 Vue 实现的状态管理器',
        link: '/documents/part4/ecology/vuex/introduce.html'
    },
    {
        icon: iconElementUI,
        name: 'Element UI',
        details: '基于 Vue2.0 封装的 UI 组件库，前端比较火的组件库之一，简洁的组件样式以及容易上手。使用现成的组件无需自己手动造轮子，提升工作效率。',
        link: '/documents/part4/element-ui/introduce.html'
    }
]

export const stage5 = [
    {
        icon: iconVue,
        name: 'Vue3.0',
        details: '相比 2.0 性能会更加突出，兼容了旧的语法，同时新增了新的语法。',
        link: '/documents/part5/vue3/introduce.html'
    },
    {
        icon: iconVue,
        name: 'Vue Router 4.0',
        details: '随着 Vue3.0 的推出进行了更新。',
        disabled: true
    },
    {
        icon: iconVue,
        name: 'Vuex 4.0',
        details: '随着 Vue3.0 的推出进行了更新。',
        disabled: true
    },
    {
        icon: iconPinia,
        name: 'pinia',
        details: 'Vue 官网推出的状态管理器，未来将取代 Vuex',
        disabled: true
    },
    {
        icon: iconElementPlus,
        name: 'Element Plus',
        details: '随着 Vue3.0 的推出进行了更新。',
        disabled: true
    },
    {
        icon: iconVite,
        name: 'Vite',
        details: '下一代的前端工具链',
        link: '/documents/part5/vite/introduce.html'
    },
    {
        icon: iconTs,
        name: 'TypeScript',
        details: 'TS 可以使得 JS 代码更加的严谨，能够减少出错的概率。',
        disabled: true
    }
]

export const stage6 = [
    {
        icon: iconEcharts,
        name: 'Echarts 5.0',
        details: '数据可视化技术中缺一不可的图表技术。',
        disabled: true
    },
    {
        icon: iconTencentMap,
        name: '腾讯地图 API',
        details: '关于腾讯地图的渲染，使用规则、案例等说明。',
        disabled: true
    },
    {
        icon: iconThree,
        name: 'Three.js',
        details: '数据可视化 3D 技术，也是前端领域中最难的技术。',
        disabled: true
    }
]

export const stage7 = [
    {
        icon: iconHandlebars,
        name: 'Handlebars',
        details: '类似于 Vue 中的模板语法技术。',
        disabled: true
    },
    {
        icon: iconPlop,
        name: 'Plop',
        details: '一款小而美的脚手架工具，也可实现自动化生成代码文件。',
        disabled: true
    },
    {
        icon: iconRollup,
        name: 'Rollup',
        details: '一款小巧的打包工具，基于前端 ESM 模块标准而生。',
        link: '/documents/part7/rollup/introduce.html'
    },
    {
        icon: iconSnabbdom,
        name: 'Snabbdom',
        details: '虚拟 DOM 插件，Vue 的源码中就是借鉴了 Snabbdom 技术。',
        disabled: true
    },
    {
        icon: iconNPM,
        name: 'NPM',
        details: '关于如何发布一款自己的插件到 NPM 平台上。',
        disabled: true
    },
    {
        icon: iconGithub,
        name: 'Github Actions',
        details: 'Github 提供了自动化部署技术。',
        disabled: true
    },
    {
        icon: iconSSG,
        name: 'SSG',
        details: '静态站点生成技术。',
        disabled: true
    },
    {
        icon: iconSSR,
        name: 'SSR',
        details: '服务端渲染技术。',
        disabled: true
    },
    {
        icon: iconNuxt,
        name: 'Nuxt.js',
        details: '基础 SSR 以及 Vue 语法二次封装的一款服务端渲染框架。',
        disabled: true
    },
    {
        icon: iconVercel,
        name: 'vercel',
        details: '静态站点部署平台。',
        disabled: true
    },
    {
        icon: iconGridsome,
        name: 'gridsome',
        details: '与 Nust 类似，基于 SSR 以及 Vue 语法二次封装的一款服务端渲染框架。',
        disabled: true
    }
]

export const stage8 = [
    {
        icon: iconPromise,
        name: '手写 Promise 源码',
        details: '高级前端面试中必须要掌握的一个环节。',
        disabled: true
    },
    {
        icon: iconVue,
        name: 'Vue2.0 源码分析',
        details: '深入了解 Vue2.0 源码，使得开发更加得心应手。',
        disabled: true
    },
    {
        icon: iconVue,
        name: 'Vue3.0 源码分析',
        details: '深入了解 Vue3.0 源码，使得开发更加得心应手。',
        disabled: true
    },
    {
        icon: iconWebpack,
        name: 'Webpack 源码分析',
        details: '深入了解 Webpack 源码，使得开发更加得心应手。',
        disabled: true
    },
    {
        icon: iconLeetCode,
        name: 'LeetCode 所有题目',
        details: '将 LeetCode 所有的题目都做完一遍。',
        disabled: true
    }
]

export const stage9 = [
    {
        icon: iconNode,
        name: 'Node.js',
        details: '是一项可以让前端开发者也能实现后端服务的技术。',
        disabled: true
    },
    {
        icon: iconExpress,
        name: 'Express',
        details: '基于 Node.js 二次封装的框架。',
        disabled: true
    },
    {
        icon: iconKoa,
        name: 'Koa',
        details: 'Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造。',
        disabled: true
    },
    {
        icon: iconEgg,
        name: 'Egg',
        details: 'Egg 选择了 Koa 作为其基础框架，在它的模型基础上，进一步对它进行了一些增强。',
        link: '/documents/part9/egg/introduce.html'
    },
    {
        icon: iconGraphql,
        name: 'GraphQL API',
        details: '一种用于 API 的查询语言。',
        disabled: true
    },
    {
        icon: iconMysql,
        name: 'mysql',
        details: '主流的关系型数据库管理系统。',
        disabled: true
    },
    {
        icon: iconMongodb,
        name: 'MongoDB',
        details: 'MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是类似 Json 格式，因此可以存储比较复杂的数据类型。',
        disabled: true
    }
]

export const stage10 = [
    {
        icon: iconAliyun,
        name: '阿里云服务器申请',
        details: '关于如何申请阿里云服务器以及使用教程。',
        disabled: true
    },
    {
        icon: iconAliyun,
        name: '域名申请',
        details: '申请属于自己的一个域名。',
        disabled: true
    },
    {
        icon: iconAliyun,
        name: '域名备案',
        details: '关于域名如何进行备案教程。',
        disabled: true
    },
    {
        icon: iconAliyun,
        name: 'SSL证书申请',
        details: '让你的网站添加上 https 安全标识。',
        disabled: true
    },
    {
        icon: iconAliyun,
        name: '网站部署',
        details: '部署你的网站到公网上，其他用户可进行访问。',
        disabled: true
    },
    {
        icon: iconAliyun,
        name: 'Node.js 部署',
        details: '部署网站的后端服务。提供网站进行调用接口。',
        disabled: true
    }
]
