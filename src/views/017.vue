<script setup>
// 和风天气： https://dev.qweather.com/
// https://devapi.qweather.com/v7/weather/now?location=101010100&key=你的Key : 当天天气 v7/weather/now
// https://devapi.qweather.com/v7/weather/7d?location=101010100&key=你的Key ：七日天气 v7/weather/7d
import { ref, onMounted } from 'vue'
import axios from 'axios'

const dailys = ref([])

onMounted(() => {
  axios.get('https://devapi.qweather.com/v7/weather/7d?location=101010100&key=你的Key')
    .then(res => {
      if (res.data.code === '200') {
        console.log(res.data.daily)
        dailys.value = res.data.daily
      }
    })
})

</script>

<template>
  <Paper>
    <div>
      <h1>七日天气</h1>
      <table class="weatherWrapper" width="400" cellspacing="0">
      <!-- <table class="weatherWrapper" width="400" cellspacing="1"> -->
        <thead>
          <tr>
            <th>no</th>
            <th>日期</th>
            <th>温度</th>
            <th>天气</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(daily, index) in dailys">
            <td>{{ index }}</td>
            <td>{{ daily.fxDate }}</td>
            <td>{{ daily.tempMax + '℃~' + daily.tempMin + '℃' }}</td>
            <td>{{ daily.textNight }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Paper>
</template>

<style lang="scss" scoped>
.weatherWrapper {
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  text-align: center;
  // background-color: #000;

  th, td {
    border-left: 1px solid #000000;
    border-top: 1px solid #000000;
    // background-color: #fff;
  }
}
</style>