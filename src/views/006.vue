<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const box1List = ref([
    {
        id: 1,
        name: 'drag-1'
    },
    {
        id: 2,
        name: 'drag-2'
    },
    {
        id: 3,
        name: 'drag-3'
    },
])
const item1 = ref()
const box2 = ref()

onMounted(() => {
    console.log(item1.value[0])
    const dom: HTMLElement = item1.value[0]

    dom.addEventListener('dragstart', (e: DragEvent) => {
        console.log(e)
    })
    dom.addEventListener('dragend', () => {
        console.log('dom dragend')
    })
    const box2Dom: HTMLElement = box2.value
    box2Dom.addEventListener('dragend', () => {
        console.log('dragend')
    })
})


</script>

<template>
    <Paper>
        <div class="flex">
            <div class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded b-solid b-c-#000">
                <div v-for="item in box1List" class="cursor-move h-30 bg-gray-500/5 rounded p-3 cursor-move" :ref="`item${item.id}`" draggable="true">
                    {{ item.name }}
                </div>
            </div>

            <div ref="box2" class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded b-solid b-c-#000"></div>
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>