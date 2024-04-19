<script setup>
import { ref } from 'vue'
import axios from 'axios'
const btnClass = 'bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-700 rounded m-t-4'

const ajaxUploadUrl = 'http://localhost:8080/uploadFile'
const fileInput = ref()

const uploadFile = async () => {
    const file = fileInput.value.files[0]
    if (!file) {
        console.error('No file selected.')
        return
    }

    const formData = new FormData()
    formData.append('file', file)
    try {
        const response = await axios.post(ajaxUploadUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log('File uploaded successfully:', response.data)
    } catch (error) {
        console.error('Error uploading file:', error)
    }
}


</script>

<template>
    <Paper>
        <div class="flex flex-col">
            <button :class="btnClass" @click="uploadFile">文件上传</button>
            <input ref="fileInput" type="file" :class="btnClass">
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>