<script setup>
const btnClass = 'bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-700 rounded m-t-4'
</script>

<template>
    <Paper>
        <div class="flex flex-col">
            <a :class="btnClass" href="http://localhost:8080/aDownloadFile">a标签下载</a>
            <button :class="btnClass">普通下载</button>
            <button :class="btnClass">大文件下载</button>
            <button :class="btnClass">下载预览</button>
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>