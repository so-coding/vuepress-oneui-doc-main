## Input 输入框

通过鼠标或键盘输入字符

:::warning
Input 为受控组件，它**总会显示 Vue 绑定值**。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model` 修饰符。
:::

### 基础用法

:::demo 通过 `placeholder` 属性指定提示内容
```html
<vt-input v-model="input" placeholder="请输入内容"></vt-input>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::


### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<vt-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</vt-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 可清空

:::demo 使用`clearable`属性即可得到一个可清空的输入框

```html
<vt-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</vt-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 密码框

:::demo 使用`showPassword`属性即可得到一个可切换显示隐藏的密码框

```html
<vt-input placeholder="请输入密码" v-model="input" showPassword></vt-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text，password | text |
| value / v-model | 绑定值           | string / number  | — | — |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| showPassword | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| name | 原生属性 | string | — | — |


### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |

### Input Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |

