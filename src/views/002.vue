<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Matter from 'matter-js'

const el = ref()
onMounted(() => {
    var Engine = Matter.Engine, // 引擎
    Render = Matter.Render, // 渲染器
    Runner = Matter.Runner, // 循环模块
    Bodies = Matter.Bodies, // 刚体
    Composite = Matter.Composite  // 复合体
    // Constraint 约束

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
    var boxA = Bodies.rectangle(400, 200, 80, 80)
    var boxB = Bodies.rectangle(410, 50, 80, 80)
    var ground = Bodies.rectangle(400, 400, 200, 50, { isStatic: true })

    // 将物体加载到世界中
    Composite.add(engine.world, [boxA, boxB, ground])

    // 运行渲染器
    Render.run(render)

    // 创建运行方法
    var runner = Runner.create()

    // 运行引擎
    Runner.run(runner, engine)
})

</script>

<template>
    <Paper>
        <div ref="el" class="container">
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
.container {
    width: 800px;
    height: 500px;
    border: 1px solid #000;
}
</style>