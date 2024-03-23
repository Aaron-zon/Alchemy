<script setup>
import { ref } from 'vue'

const text = ref('DARKNESS')

const afterTheme = {
  content: `'${text.value}'`,
  color: '#000'
}
</script>

<template>
    <Paper>
        <div class="w-150 h-150 bg-#555 page flex justify-center items-center">
            <h1>DARKNESS</h1>
        </div>
    </Paper>
</template>

<style lang="scss" scoped>
h1 {
    font-weight: 700;
    position: relative;
    font-family: 'Montserrat';
    color: #fff;
    z-index: 2;
    font-size: 70px;

    &::after {
        content: v-bind('afterTheme.content');
        color: v-bind('afterTheme.color');
        font-size: 70px;
        position: absolute;
        left: 0;
        transform: translate(-32px, 14px) scaleY(0.5) skew(50deg);
        z-index: -1;
        filter: blur(1px);
        -webkit-mask: linear-gradient(transparent, #000);
    }
}
</style>