<script setup>
import { ref, onMounted } from 'vue'
// 流式回传
const backendStreamUrl = 'http://localhost:8080/getStreamAudio'
const backendUrl = 'http://localhost:8080/getAudio'

</script>

<template>
    <Paper>
        <div class="flex flex-col w-120">
            <h3>后端代码：Alchemy-java/ MediaController.java</h3>
            <!-- 方式1 适合长音频 -->
            <h2>流式传输(分片读取)</h2>
            <audio ref="audioPlayer" controls autoplay>
                <source :src="backendStreamUrl"/>
            </audio>

            <!-- 方式2 适合短音频 -->
            <h2>普通传输（一次性读取）</h2>
            <audio controls autoplay>
                <source :src="backendUrl"/>
            </audio>
            
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>