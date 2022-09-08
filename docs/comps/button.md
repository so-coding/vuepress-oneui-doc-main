# Button 按钮

当选项过多时，使用下拉菜单展示并选择内容。

## 基本用法

适用广泛的基础单选

::: demo 使用type、plain、round和circle属性来定义 Button 的样式。
```html
<template>
  <h2>普通按钮</h2>
		<div class="row">
			<vt-button>按钮</vt-button>
			<vt-button type="primary">primary按钮</vt-button>
			<vt-button type="success">success按钮</vt-button>
			<vt-button type="info">info按钮</vt-button>
			<vt-button type="danger">danger按钮</vt-button>
			<vt-button type="warning">warning按钮</vt-button>
		</div>
		<h2>朴素按钮</h2>
		<div class="row">
			<vt-button plain>按钮</vt-button>
			<vt-button type="primary" plain>primary按钮</vt-button>
			<vt-button type="success" plain>success按钮</vt-button>
			<vt-button type="info" plain>info按钮</vt-button>
			<vt-button type="danger" plain>danger按钮</vt-button>
			<vt-button type="warning" plain>warning按钮</vt-button>
		</div>
		<h2>圆角按钮</h2>
		<div class="row">
			<vt-button plain round>按钮</vt-button>
			<vt-button type="primary" plain round>primary按钮</vt-button>
			<vt-button type="success" plain round>success按钮</vt-button>
			<vt-button type="info" plain round>info按钮</vt-button>
			<vt-button type="danger" plain round>danger按钮</vt-button>
			<vt-button type="warning" plain round>warning按钮</vt-button>
		</div>
		<h2>圆形按钮</h2>
		<div class="row">
			<vt-button plain round circle>钮</vt-button>
			<vt-button type="primary" plain circle>primary按</vt-button>
			<vt-button type="success" plain circle>1</vt-button>
			<vt-button type="info" plain circle>2</vt-button>
			<vt-button type="danger" plain circle>3</vt-button>
			<vt-button type="warning" plain circle>4</vt-button>
		</div>
		<h2>带图标按钮</h2>
		<div class="row">
			<vt-button plain round circle>钮</vt-button>
			<vt-button type="primary" icon="course">primary按</vt-button>
			<vt-button type="success" icon="settings">1</vt-button>
			<vt-button type="info" plain circle icon="bluray">2</vt-button>
			<vt-button type="danger" plain circle icon="cancel">3</vt-button>
			<vt-button type="warning" plain circle icon="home">4</vt-button>
		</div>
		<h2>按钮点击事件</h2>
		<div class="row">
			<vt-button type="primary" icon="course" @click="clicks"></vt-button>
		</div>
		<h2>按钮禁用</h2>
		<div class="row">
			<vt-button type="primary" icon="course" disabled @click="clicks"></vt-button>
			<vt-button type="success" icon="course" disabled @click="clicks"></vt-button>
			<vt-button type="info" icon="bluray" disabled>2</vt-button>
			<vt-button type="danger" icon="cancel" disabled>3</vt-button>
			<vt-button type="warning" icon="home" disabled>4</vt-button>
		</div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
		methods: {
      click() {
        alert('aaaa')
      }
    }
  }
</script>
```
:::