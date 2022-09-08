module.exports = {
  theme: '',
  title: 'VuePress + VueUI',
  description: 'VuePress搭建VueUI的组件库文档教程示例代码',
  base: '/',
  port: '8080',
  themeConfig: {
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
      }
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
    ],
  ],
  markdown: {}
}