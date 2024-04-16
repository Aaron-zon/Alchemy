<script setup>
import { ref, onMounted } from 'vue'
// 流式回传
const backendStreamUrl = 'http://localhost:8080/getStreamAudio'


const audioPlayer = ref()

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

            audioPlayer.value.src = videoUrl
        }
    }

    xhr.send();
}

</script>

<template>
    <Paper>
        <div class="flex flex-col w-120 h-120">
            <!-- 方式1 适合短音频 -->
            <!-- <audio controls autoplay>
                <source :src="backendStreamUrl"/>
            </audio> -->
            <!-- 方式2 适合长音频 -->
            <audio ref="audioPlayer" controls autoplay></audio>
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>