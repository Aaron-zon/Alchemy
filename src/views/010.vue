<script setup>
import axios from 'axios'
const btnClass = 'bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-700 rounded m-t-4'

const ajaxDownloadUrl = 'http://localhost:8080/downloadFile'

const ajaxDownload = () => {
    axios({
        method: 'get',
        url: ajaxDownloadUrl,
        responseType: 'blob',
    })
    .then(response => {
        const blob = new Blob([response.data], {type: 'application/octet-stream'})
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url 
        a.download = '009.mp3' // 设置下载后的文件名
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
    })
}


</script>

<template>
    <Paper>
        <div class="flex flex-col">
            <a :class="btnClass" download href="http://localhost:8080/downloadFile">a标签下载</a>
            <button :class="btnClass" @click="ajaxDownload">ajax下载</button>
            <button :class="btnClass">下载预览</button>
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>