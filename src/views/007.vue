<script setup>
import { ref, onMounted } from 'vue'
const main = ref(null);
const box = ref(null);


const dragBox = () => {
    const boxDom = box.value;
    const mainDom = main.value;
    // 鼠标与物体边界距离
    boxDom.onmousedown = function (event) {
        // 鼠标距离窗口的XY轴0坐标的距离 box_dis
        var clientX = event.clientX
        var clientY = event.clientY
        // box距离mainXY轴的距离 box_2_doc_dis
        var tarX = boxDom.offsetLeft;
        var tarY = boxDom.offsetTop;
        // main距离窗口的距离
        var mainX = mainDom.offsetLeft;
        var mainY = mainDom.offsetTop;
        // 鼠标距离box的距离 鼠标距离窗口的距离 - box距离main的距离 - main距离窗口的距离
        var oldToBoxX = clientX - tarX - mainX;
        var oldToBoxY = clientY - tarY - mainY;

        document.onmousemove = function (ev) {
            // 用现在鼠标到窗口的距离 - 以前鼠标到窗口的距离 获得鼠标移动的距离  doc_dis - box_dis = traveled_dis
            // 用原来box到窗口的距离 + 鼠标移动的距离 得到当前box距离窗口的距离 box_2_doc_dis + traveled_dis
            var x = tarX + ev.clientX - clientX;
            var y = tarY + ev.clientY - clientY;
            var maxX = mainDom.offsetWidth - boxDom.offsetWidth;
            var maxY = mainDom.offsetHeight - boxDom.offsetHeight;
            // console.log('xas:', x)

            console.log(y, '--1', oldToBoxY, y == - oldToBoxY)
            if (x <= - oldToBoxX) {
                // 鼠标在main以左
                document.onmousemove = null;
                document.onmouseup = null;
            } else if (y <= - oldToBoxY) {
                // 鼠标在main以上
                document.onmousemove = null;
                document.onmouseup = null;
            } else if (ev.clientX >= mainX + mainDom.offsetWidth) {
                // 鼠标在main以右
                document.onmousemove = null;
                document.onmouseup = null;
            } else if (ev.clientY >= mainY + mainDom.offsetHeight) {
                // 鼠标在main以下
                document.onmousemove = null;
                document.onmouseup = null;
            }

            // 将box限制在main内
            if (x >= maxX) {
                x = maxX;
            } else if (x <= 0) {
                x = 0;
            }
            if (y > maxY) {
                y = maxY;
            } else if (y < 0) {
                y = 0;
            }

            boxDom.style.left = x + 'px';
            boxDom.style.top = y + 'px';
        }

        // 鼠标抬起 清除事件
        document.onmouseup = function (ev) {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}

onMounted(() => {
    dragBox();
})
</script>

<template>
    <Paper>
        <div ref="main" class="flex b-solid b-width-1 b-g-#ccc w-200 h-200 relative">
            <div ref="box" class="bg-#bbbb2a w-30 h-30 absolute">
            </div>
        </div>
    </Paper>
</template>

<style lang="scss" scoped></style>