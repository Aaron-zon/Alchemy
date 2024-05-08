<script lang="ts" setup>
// https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API

/**
 * 拖拽元素
 * - dragstart: 拖拽开始
 * - drag: 拖动
 * - dragend: 拖拽结束
 * 放置区域
 * - dragover: 进入可释放目标
 * - dragenter: 进入可释放目标(每100毫秒执行一次)
 * - dragleave: 离开可释放目标
 * - drop: 释放
 */
// * 要触发drop事件必须取消dragover的默认事件，因为dragover事件不允许其他元素在其元素上释放
// * 触发drop事件时最好也取消默认事件，在内部有文字或链接时可能会有影响
import { ref, onMounted } from 'vue'
const dr1 = ref()
const box2 = ref()

onMounted(() => {
    const dragDom = dr1.value
    const targetDom = box2.value

    targetDom.addEventListener('dragover', (e) => {
        e.preventDefault()
        console.log('dragover')
    })
    targetDom.addEventListener('dragenter', () => console.log('dragenter'))
    targetDom.addEventListener('dragleave', () => console.log('dragleave'))
    targetDom.addEventListener('drop', (e) => {
        e.preventDefault()
        targetDom.appendChild(dragDom)
        console.log('drop')
    })

    // 拖拽开始
    // dragDom.addEventListener('dragstart', () => console.log('content dragstart'))
    // // 拖动
    // dragDom.addEventListener('drag', () => console.log('content drag'))
    // // 拖拽结束
    // dragDom.addEventListener('dragend', () => console.log('content dragend'))

})


</script>

<template>
    <Paper>
        <div class="flex">
            <div class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded b-solid b-c-#000">
                <div ref="dr1" class="cursor-move h-30 bg-gray-500/5 rounded p-3 cursor-move" draggable="true">
                    被拖拽元素
                </div>
            </div>

            <div ref="box2" class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded b-solid b-c-#000"></div>
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>