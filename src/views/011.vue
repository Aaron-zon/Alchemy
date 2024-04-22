<script setup>
import { ref } from 'vue'
import axios from 'axios'
const btnClass = 'bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-700 rounded m-t-4'
import SparkMD5 from 'spark-md5'

/**
 * 参考文档：
 * https://zhuanlan.zhihu.com/p/344196767
 * https://segmentfault.com/a/1190000042295442
 */

/**
 * 普通文件上传
 */
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
            // 传入FormData对象会自动设置为multipart/form-data
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            onUploadProgress(e) {
                // 表示已经执行的工作量
                console.log(e.loaded)
                // 表示工作总量
                console.log(e.total)
                // 完成比
                console.log(e.loaded / e.total)
            }
        })
        console.log('File uploaded successfully:', response.data)
    } catch (error) {
        console.error('Error uploading file:', error)
    }
}

/**
 * 分片上传（同步/异步）
 * 
 * 原理：
 * 分片上传，就是将所要上传的文件，按照一定的大小，将整个文件分隔成多个数据块（我们称之为Part）来进行分别上传，上传完之后再由服务端对所有上传的文件进行汇总整合成原始的文件。
 * 
 * 适用场景：
 * a.大文件上传（大文件尽量用异步）
 * b.于网络环境不好，存在需要重传风险的场景（可搭配 断点续传）
 * 
 * 以下是一个分片上传同步的例子
 */
const piecewiseUrl = 'http://localhost:8080/uploadChunk'
const piecewiseFileInput = ref()
const piecewiseFlg = ref(false)
const CHUNK_SIZE = 1 * 1024 * 1024

const piecewiseUpload = () => {
    const file = piecewiseFileInput.value.files[0]
    const fileChunkList = createFileChunk(file)
    piecewiseFlg.value = true

    chunkUpload(fileChunkList)
}

const chunkUpload = async (fileChunkList) => {
    for (let i = 0; i < fileChunkList.length; i++) {
        const fileChunk = fileChunkList[i]
        // 判断片段是否已经上传成功
        if (fileChunk.status == 'SUCCESS') continue

        fileChunk.status = 'UPLOADING'
        const response = await axios.post(piecewiseUrl, fileChunk, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        if (!response.data) {
            piecewiseFlg.value = false
            fileChunk.status = 'ERROR'
        } else {
            fileChunk.status = 'SUCCESS'
        }
    }

    // 断点续传
    // 如果传输中有失败的场合
    if (!piecewiseFlg.value) {
        piecewiseFlg.value = true
        // 重新传输失败的文件片段
        chunkUpload(fileChunkList)
    }

}

/**
 * 创建分片列表
 * @param {*} file 
 * @param {*} blockSize 
 */
function createFileChunk(file, blockSize = CHUNK_SIZE) {
    const fileChunkList = []
    const { name, size } = file
    let cur = 0

    while (cur < size) {
        let end = cur + blockSize

        if (end > size) {
            end = size
        }

        fileChunkList.push(
            new FileChunk(file.slice(cur, end), name, cur, end, size)
        )
        cur += blockSize
    }

    return fileChunkList;
}
/**
 * 文件分片类
 */
class FileChunk {
    constructor(chunk, fileName, start, end, total) {
        // 切片对象
        this.chunk = chunk;
        // 文件名称
        this.fileName = fileName;
        // 切片起始位置
        this.start = start;
        // 切片结束位置
        this.end = end;
        this.total = total;
        // 切片名称
        this.chunkName = '';
        // 整体文件Hash
        this.fileHash = '';
        // 索引
        this.index = 0;
        // 文件切片总数
        this.chunkNum = 0;
        // 文件状态 'READY', 'UPLOADING', 'SUCCESS', 'ERROR'
        this.status = 'READY';
    }
}


/**
 * 秒传
 * 文件已经存在后台就没必要再传一份了，可以通过md5（js-spark-md5）值进行判断
 * 
 * 每次上传时将文件hash存入数据库，上传文件前里用当前文件的hash查询数据库如果查询到值证明文件已经上传过
 */
const hashFileInput = ref()

const hashCheck = () => {
    const file = hashFileInput.value.files[0]
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = e => {
        const spark = new SparkMD5.ArrayBuffer()
        spark.append(e.target.result)
        const hash = spark.end()
        // 用于验证的hash
        console.log(hash)
    }
}
</script>

<template>
    <Paper>
        <div class="flex flex-col">
            <button :class="btnClass" @click="uploadFile">文件上传</button>
            <input ref="fileInput" type="file" :class="btnClass">

            <button :class="btnClass" @click="piecewiseUpload">分片上传</button>
            <input ref="piecewiseFileInput" type="file" :class="btnClass">

            <!-- 秒传 -->
            <button :class="btnClass" @click="hashCheck">hash验证</button>
            <input ref="hashFileInput" type="file" :class="btnClass">

        </div>
    </Paper>
</template>

<style lang="scss" scoped>
</style>