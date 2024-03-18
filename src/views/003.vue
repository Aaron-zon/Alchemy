<script setup>
import { onMounted, ref } from 'vue'
import Matter from 'matter-js'

const el = ref()
const body = ref()
const boxB = ref()
onMounted(() => {
    var Engine = Matter.Engine, // 引擎
    Render = Matter.Render, // 渲染器
    Runner = Matter.Runner, // 循环模块
    Bodies = Matter.Bodies, // 刚体
    Composite = Matter.Composite  // 复合体
    // Constraint 约束
    body.value = Matter.Body

    // 创建引擎
    var engine = Engine.create()

    // 创建渲染器
    var render = Render.create({
        element: el.value,
        engine: engine,
        options: {
            width: 800,
            height: 500,
            background: '#ffffff',
            wireframes: false,
            pixelRatio: 'auto',
        }
    })

    // 创建两个盒子和地面
    // rectangle params：X轴/Y轴/宽度/高度
    var boxA = Bodies.rectangle(80, 360, 80, 80)
    boxB.value = Bodies.rectangle(700, 360, 80, 80)
    var ground = Bodies.rectangle(400, 400, 800, 50, { isStatic: true })

    // 将物体加载到世界中
    Composite.add(engine.world, [boxA, boxB.value, ground])

    // 运行渲染器
    Render.run(render)

    // 创建运行方法
    var runner = Runner.create()

    // 运行引擎
    Runner.run(runner, engine)
})

const handleClick = () => {
    // 重置 boxB 的位置
    Matter.Body.applyForce(boxB.value, boxB.value.position, { x: -0.05 , y: -0.1})
}
</script>

<template>
    <Paper>
        <div ref="el" class="container"></div>
        <button @click="handleClick">Active</button>
    </Paper>
</template>

<style lang="scss" scoped>
.container {
    border: 1px solid black;
}
</style>