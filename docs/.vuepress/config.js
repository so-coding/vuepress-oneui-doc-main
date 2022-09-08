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
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: {
      '/comps/': [
        '/comps/',
        '/comps/select.md'
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}