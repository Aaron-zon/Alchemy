<script setup>
// 后端代码：Alchemy-java/ MediaController.java

// 普通视频回传
const backendUrl = 'http://localhost:8080/getVideo'
// 流式回传
const backendStreamUrl = 'http://localhost:8080/getStreamVideo'
</script>

<template>
    <Paper>
        <div class="flex flex-col w-120">
            <h3>后端代码：Alchemy-java/ MediaController.java</h3>
            <!-- 方式1 适合长视频 -->
            <h2>流式传输(分片读取)</h2>
            <video controls autoplay>
                <source :src="backendStreamUrl" type="video/mp4">
            </video>

            <!-- 方式2 适合短视频 -->
            <!-- <h2>普通传输（一次性读取）</h2>
            <video controls autoplay>
                <source :src="backendUrl" type="video/mp4">
            </video> -->

            
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>