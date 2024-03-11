<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { initCanvas, polar2cart, r15, r180, r90 } from '../utils'
import { useRafFn } from '@vueuse/core';

const el = ref<HTMLCanvasElement | null>();

const init = ref(5)
const len = ref(5)
const stoped = ref(false)

const { random } = Math

const f = {
  start: () => {},
}

onMounted(() => {
  const canvas = el.value!
  const { ctx } = initCanvas(canvas)
  const { width, height } = canvas

  let steps: Function[] = []
  let prevSteps: Function[] = []

  let iterations = 0

  const step = (x: number, y: number, rad: number) => {
    const length = random() * len.value
    const [nx, ny] = polar2cart(x, y, length, rad)

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(nx, ny)
    ctx.stroke()

    const rad1 = rad + random() * r15
    const rad2 = rad - random() * r15

    if (nx < -100 || nx > 500 || ny < -100 || ny > 500) return

    if (iterations <= init.value || random() > 0.5) 
      steps.push(() => step(nx, ny, rad1))
      
    if (iterations <= init.value || random() > 0.5)
      steps.push(() => step(nx, ny, rad2))
  }


  const frame = () => {
    console.log(1)
    iterations += 1
    prevSteps = steps
    steps = []

    if (!prevSteps.length) {
      controls.pause()
      // stop
      stoped.value = true
    }
    prevSteps.forEach(i => i())

  }

  const controls = useRafFn(frame, {immediate: false})

  f.start = () => {
    controls.pause()
    iterations = 0
    ctx.clearRect(0, 0, width, height)
    ctx.lineWidth = 1
    ctx.strokeStyle = '#00000040'
    prevSteps = []
    steps = random() < 0.5
    ? [
      () => step(0, random() * 400, 0),
      () => step(400, random() * 400, r180),
    ]
    : [
      () => step(random() * 400, 0, r90),
      () => step(random() * 400, 400, -r90)
    ]
    controls.resume()
    stoped.value = false
  }
  f.start()
})
</script>
<template>
  <div class="page flex justify-center items-center">
    <canvas ref="el" class="canvas b-solid b-width-1"></canvas>
  </div>
</template>

<style>
</style>
