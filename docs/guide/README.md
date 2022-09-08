
# 指南
通过指南，你将明白该组件库的特性，及使用方式。
## 功能
- 全局加载
- 按需加载
- 国际化配置
- 样例网站
## 安装
- npm
``` js
npm install one-ui-element -S
```
- yarn
``` js
yarn add one-ui-element -S
```
## 用法

### 全局引入
``` js
import OneUI from 'one-ui-element'
Vue.use(OneUI)
```
### 按需引入
``` js
import { Button } from 'one-ui-element'
// 引入字体
import 'one-ui-element/lib/fonts/style.css'   
Vue.use(Button)
```


### 配置
按需引入的项目需要安装如下任意一个插件，进行配置
- babel-plugin-component
``` js
npm install babel-plugin-component -D
```
- Babel 配置
``` js
plugins: [
    [
      "component",
      {
        libraryName: "one-ui-element",
        // 是否解析名称为破折号模式
        camel2Dash: false,
        // import js and css from 'style.css'
        style: true,
      },
      "one-ui-element",
    ],
  ],
```