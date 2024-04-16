<script setup>
import { ref, onMounted } from 'vue'
// 普通视频回传
const backendUrl = 'http://localhost:8080/getVideo'
// 流式回传
const backendStreamUrl = 'http://localhost:8080/getStreamVideo'


const videoPlayer = ref()

onMounted(() => {
    init()
})

/**
 * 流式回传
 */
const init = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', backendStreamUrl, true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
        if (xhr.status === 200) {
            const videoBlob = xhr.response
            const videoUrl = URL.createObjectURL(videoBlob)

            videoPlayer.value.src = videoUrl
        }
    }

    xhr.send();
}

</script>

<template>
    <Paper>
        <div class="flex flex-col w-120 h-120">
            <h2>普通视频</h2>
            <video controls autoplay>
                <source :src="backendUrl" type="video/mp4">
            </video>

            <h2>流式传输</h2>
            <video ref="videoPlayer" controls autoplay></video>
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>