module.exports = {
  theme: '',
  title: 'VuePress + OneUI',
  description: 'VuePress搭建VueUI的组件库文档教程示例代码',
  base: '/',
  port: '8080',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    // nav: [
    //   {
    //     text: '首页',
    //     link: '/'
    //   },
    //   {
    //     text: '指导',
    //     link: '/guide/'
    //   },
    //   {
    //     text: '组件',
    //     link: '/comps/'
    //   },
    //   { text: 'Github', link: 'https://github.com/ly-codeing/one-test-ui'}
    // ],
    // sidebar: {
    //   '/comps/': [
    //     '/comps/',
    //     '/comps/select.md',
    //     '/comps/button.md'
    //   ],
    //   '/guide/': [
    //     '/guide/'
    //   ]
    // }
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          {
            text: '首页',
            link: '/'
          },
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '组件',
            link: '/comps/'
          },
          { text: 'Github', link: 'https://github.com/so-coding/one-test-ui' }
        ],
        sidebar: {
          '/comps/': [
            '/comps/',
            '/comps/select.md',
            '/comps/button.md',
            '/comps/input.md'
          ],
          '/guide/': [
            '/guide/'
          ]
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          {
            text: '首页',
            link: '/'
          },
          {
            text: '指导',
            link: '/guide/'
          },
          {
            text: '组件',
            link: '/comps/'
          },
          { text: 'Github', link: 'https://github.com/ly-codeing/one-test-ui' }
        ],
        sidebar: {
          '/comps/': [
            '/comps/',
            '/comps/select.md',
            '/comps/button.md'
          ],
          '/guide/': [
            '/guide/'
          ]
        }
      }
    }
  },
  head: [],
  plugins: [
    'demo-container',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    ['vuepress-plugin-code-copy', true],
    [
      'cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ]
  ],

  markdown: {}
}