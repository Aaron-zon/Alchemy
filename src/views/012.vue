<script setup>
import { ref } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const editor = ref(null);
const toolbarConfig = ref({})
const mode = ref('default')
const html = ref('<p>Hello</p>')
const editorConfig = ref({ placeholder: '请输入内容...' })

const onCreated = () => {
  console.log('editor created!')
  debugger
  console.log(editor.value)
  // editor.value = Object.seal(editor.value)
}

setTimeout(() => {
            html.value = '<p>模拟 Ajax 异步设置内容 HTML</p>'
        }, 1500)
</script>

<template>
  <Paper>
    <div id="editor" class="wrapper">
      <Toolbar 
        style="border-bottom: 1px solid black;"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor 
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
      />
    </div>
  </Paper>
</template>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss" scoped>
.paper {
  .wrapper {
    border: 1px solid black;
    overflow: hidden;
    width: 500px;
    height: 500px;
  }
}
</style>