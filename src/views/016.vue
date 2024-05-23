<script setup>
console.log('sad')
function clickHandle(e) {
  const transition = document.startViewTransition(() => {
    document.documentElement.classList.toggle('dark');
  })


  transition.ready.then(() => {
    const { clientX, clientY } = e
    // 计算半径，以鼠标点击的位置为圆心，到四个角的距离中最大的那个作为半径
    const radius = Math.hypot(
      Math.max(clientX, innerWidth - clientX),
      Math.max(clientY, innerHeight - clientY)
    )

    const clipPath = [
      `circle(0% at ${clientX}px ${clientY}px)`,
      `circle(${radius}px at ${clientX}px ${clientY}px)`
    ]
    const isDark = document.documentElement.classList.contains('dark')

    document.documentElement.animate(
      {
        // 如果要切换到暗色主题，我们在过渡的时候从半径 100% 的圆开始，到 0% 的圆结束
        clipPath: isDark ? clipPath.reverse() : clipPath
      },
      {
        duration: 500,
        // 如果要切换到暗色主题，我们应该裁剪 view-transition-old(root) 的内容
        pseudoElement: isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)'
      }
    )
  })
}
</script>

<template>
    <Paper>
      <button @click="clickHandle">主题切换</button>
    </Paper>
</template>

<style lang="scss">
:root {
  /* 亮色模式下的背景色 */
  --bg-color: #fff;
  background-color: var(--bg-color);
}
:root.dark {
  /* 暗色模式下的背景色 */
  --bg-color: #000;
}

::view-transition-new(root),
::view-transition-old(root) {
/* 关闭默认动画，否则影响自定义动画的执行 */
   animation: none;
}

.dark::view-transition-old(root) {
  z-index: 100;
}
</style>