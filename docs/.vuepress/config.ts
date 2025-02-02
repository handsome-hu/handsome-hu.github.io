// import {resolve} from 'path'
import {defineConfig4CustomTheme} from 'vuepress/config'
import {VdoingThemeConfig} from 'vuepress-theme-vdoing/types'
// @ts-ignore
import dayjs from 'dayjs'
import htmlModules from './config/htmlModules' // 自定义插入的html块


export default defineConfig4CustomTheme<VdoingThemeConfig>({
    theme: 'vdoing', // 使用npm包主题
    // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

    locales: {
        '/': {
            lang: 'zh-CN',
            title: "HuKai's Blog",
            description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
        }
    },
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'Java',
                link: '/java/',
                items: [
                    {
                        text: 'Java核心技术',
                        items: [
                            {text: 'Java基础', link: '/pages/7f049b/'},
                            {text: 'Java并发编程', link: '/pages/7f049b/'},
                            {text: 'JVM', link: '/pages/7f049b/'},
                            {text: 'Java新特性', link: '/pages/7f049b/'},
                        ]
                    },
                    {
                        text: 'Spring生态',
                        items: [
                            {text: 'Spring5', link: '/pages/7f049b/'},
                            {text: 'SpringMVC', link: '/pages/7f049b/'},
                            {text: 'SpringBoot', link: '/pages/7f049b/'},
                        ]
                    },
                    {
                        text: '开源框架',
                        items: [
                            {text: 'MyBatis', link: '/pages/cc6386/'},
                        ]
                    }
                ]
            },
            {
                text: '基本功',
                link: '/base/',
                items: [
                    {text: '计算机网络', link: '/pages/7f049b/'},
                    {text: '操作系统', link: '/pages/7f049b/'},
                    {text: '数据结构与算法', link: '/pages/b19901/'},
                    {text: '设计模式', link: '/pages/b19901/'},
                ]
            },
            {
                text: '数据库',
                link: '/db/',
                items: [
                    {
                        text: 'SQL数据库',
                        items: [
                            {text: 'MySQL', link: '/pages/b19901/'},
                            {text: 'Oracle', link: '/pages/04a594/'},
                        ]
                    },
                    {
                        text: 'NoSQL数据库',
                        items: [
                            {text: 'Redis', link: '/pages/f322db/'},
                            {text: 'MongoDB', link: '/pages/948036/'},
                        ]
                    }
                ]
            },
            {
                text: '前端',
                link: '/web/',
                items: [
                    {
                        text: '页面样式',
                        items: [
                            {text: 'HTML', link: '/pages/948036/'},
                            {text: 'CSS', link: '/pages/56c2f3/'},
                        ]
                    },
                    {
                        text: 'JavaScript',
                        items: [
                            {text: 'JavaScript基础', link: '/pages/0796ba76b4b55368/'},
                            {text: 'ECMAScript6教程', link: '/pages/f344d070a1031ef7/'},
                            {text: 'TypeScript', link: '/pages/822b08/'},
                        ]
                    },
                    {
                        text: '前端框架',
                        items: [
                            {text: 'Vue', link: '/pages/c660da/'},
                            {text: 'Webpack', link: '/pages/389bf1/'},
                        ]
                    }
                ]
            },
            {
                text: '分布式',
                link: '/distributed/',
                items: [
                    {text: 'NIO', link: '/pages/87065a/'},
                    {text: 'Netty', link: '/pages/a300fa/'},
                ]
            },
            {
                text: '系统设计',
                link: '/design/',
                items: [
                    {text: 'RabbitMQ', link: '/pages/8f8d52/'},
                ]
            },
            {
                text: '更多',
                link: '/more/',
                items: [
                    {
                        text: '技术文档',
                        items: [
                            {text: 'GitHub技巧', link: '/pages/180676/'},
                            {text: '博客搭建', link: '/pages/180676/'},
                            {text: '技术笔记', link: '/pages/f3cefb/'},
                        ]
                    },
                    {
                        text: '优质文章',
                        items: [
                            {text: '小技巧', link: '/pages/62dd4b/'},
                            {text: '解决方案', link: '/pages/8ef442/'},
                        ]
                    }
                ]
            }
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/logo.png', // 导航栏logo
        repo: 'handsome-hu/handsome-hu.github.io', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        editLinks: true, // 启用编辑
        editLinkText: '编辑',

        //*** 以下是首页大图相关配置，文档：https://notes.youngkbt.cn/about/website/index-big-img ***//
        indexImg: {
            navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
            switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
            // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
            bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
            bgTimeColorArray: ['transparent', 'transparent', 'transparent', 'transparent'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
            descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
            desc: ["青年时种下什么，老年时就收获什么 —— 来自 易卜生", "成功=艰苦劳动+正确的方法+少说空话 —— 来自 Da Vinci", "从不浪费时间的人，没有工夫抱怨时间不够 —— 来自 Jefferson"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
            descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
            descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
            descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
            descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
            bubble: true,    // 是否开启图片的气泡效果，默认为 false
            bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
            bubbleNum: 100,   // 气泡的个数，bubble 为 true 生效，默认 200 个
        },


        //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

        // category: false, // 是否打开分类功能，默认true
        // tag: false, // 是否打开标签功能，默认true
        // archive: false, // 是否打开归档功能，默认true
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        // bodyBgImg: [
        //     'https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/my/bg/bg1.png',
        //     'https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/my/bg/bg2.png',
        //     'https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/my/bg/bg3.jpg'
        // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
        // bodyBgImgOpacity: 1, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

        // updateBar: { // 最近更新栏
        //   showToArticle: false, // 显示到文章页底部，默认true
        //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        // },
        // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
        // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
        // pageButton: false, // 是否显示快捷翻页按钮，默认true

        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'HuKai', // 必需
            link: 'https://github.com/handsome-hu', // 可选的
        },

        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: 'https://blog-1259322452.cos.ap-guangzhou.myqcloud.com/my/headPic.jpg',
            name: 'HuKai',
            slogan: '梦想成为全栈的保安',
        },

        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: {
            // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:hukai2688@163.com',
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/Handsome-Hu',
                },
                {
                    iconClass: 'icon-gitee',
                    title: 'Gitee',
                    link: 'https://gitee.com/impluvious',
                },
                {
                    iconClass: 'icon-zhihu',
                    title: '知乎',
                    link: 'https://www.zhihu.com/people/qing-huai-zhu-62',
                },
                {
                    iconClass: 'icon-yuque',
                    title: '语雀',
                    link: 'https://www.yuque.com/qinghuai-aikxc',
                },
            ],
        },

        // 页脚信息
        footer: {
            createYear: 2021, // 博客创建年份
            copyrightInfo:
                'HuKai | <a href="http://www.beian.miit.gov.cn">赣ICP备17016768号</a>', // 博客版权信息，支持a标签或换行标签</br>
        },

        // 自定义hmtl(广告)模块
        htmlModules
    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}], //favicons，资源放在public文件夹
        [
            'meta',
            {
                name: 'keywords',
                content: '博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
            },
        ],
        ['meta', {name: 'theme-color', content: '#11a8cd'}], // 移动浏览器主题颜色
        // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
        // [
        //   'script',
        //   {
        //     'data-ad-client': 'ca-pub-7828333725993554',
        //     async: 'async',
        //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        //   },
        // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    ],

    // 插件配置
    plugins: {
        // 导入本地插件（供学习参考）
        // [resolve(__dirname, './plugins/love-me')]: { // 鼠标点击爱心特效
        //   color: '#11a8cd', // 爱心颜色，默认随机色
        //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
        // },

        // 百度自动推送
        // 'vuepress-plugin-baidu-autopush': {},

        // 百度统计
        // 'vuepress-plugin-baidu-tongji': {
        //   hm: baiduCode,
        // },

        // 全文搜索
        'fulltext-search': {},
        // 鼠标点击效果
        'cursor-effects': {},
        // 一条漂亮的彩带
        'ribbon': {},

        // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
        // 'thirdparty-search': {
        //   thirdparty: [
        //     {
        //       title: '在MDN中搜索',
        //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
        //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        //     },
        //     {
        //       title: '在Runoob中搜索',
        //       frontUrl: 'https://www.runoob.com/?s=',
        //     },
        //     {
        //       title: '在Vue API中搜索',
        //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
        //     },
        //     {
        //       title: '在Bing中搜索',
        //       frontUrl: 'https://cn.bing.com/search?q=',
        //     },
        //     {
        //       title: '通过百度搜索本站的',
        //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
        //     },
        //   ],
        // },

        // 代码块复制按钮
        'one-click-copy': {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false, // whether to display on the mobile side, default: false.
        },

        // DEMO演示模块, API: https://github.com/xiguaxigua/vuepress-plugin-demo-block
        'demo-block': {
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false, // 是否展示为横向样式
            },
        },

        // 放大图片
        'vuepress-plugin-zooming': {
            selector: '.theme-vdoing-content img:not(.no-zoom)', // not排除class是no-zoom的图片
            options: {
                bgColor: 'rgba(0,0,0,0.6)',
            },
        },

        // 评论区
        'vuepress-plugin-comment': {
            choosen: 'gitalk',
            options: {
                clientID: '12cbab58d5a3e5b40ad4',
                clientSecret: 'f140b9c95078fe93300cd1b5cc27c11642f808ad',
                repo: 'blog-gitalk-comment', // GitHub 仓库
                owner: 'handsome-hu', // GitHub仓库所有者
                admin: ['handsome-hu'], // 对仓库有写权限的人
                distractionFreeMode: false,
                pagerDirection: 'last', // 'first'正序 | 'last'倒序
                id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
            },
        },

        // "上次更新"的时间格式
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => {
                return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
            },
        },
    },

    markdown: {
        lineNumbers: true
    }
})
