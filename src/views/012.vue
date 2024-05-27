<script setup>
// wangeditor: https://www.wangeditor.com/v5/getting-started.html
import { nextTick, onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

import { DomEditor } from '@wangeditor/editor'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

const toolbarConfig = {
  modalAppendToBody: true
}
const editorConfig = { 
  placeholder: '请输入内容...',
  autoFocus: false
}
const mode = 'default'

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = Object.seal(editor) // 记录 editor 实例，重要！
  nextTick(() => {
    console.log('asdasd')
    const toolbar = DomEditor.getToolbar(editorRef.value)
    console.log(toolbar.getConfig())
  })
}

editorConfig.maxLength = 10
const onMaxLength = () => {
  console.log('max')
}

</script>

<template>
  <Paper>
    <div class="wrapper">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        ref="editor"
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
        @onMaxLength="onMaxLength"
      />
    </div>
  </Paper>
</template>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss" scoped>
.wrapper {
  border: 1px solid #ccc
  
}
</style>