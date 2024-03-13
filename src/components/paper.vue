<script setup>

</script>

<template>
    <div class="paper">
        <div class="goBack nav">
            <router-link to="/" class="link text-xl block pt-1">
                <CarbonChevronLeft></CarbonChevronLeft>
            </router-link>
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.paper {
    @apply fixed top-0 left-0 right-0 bottom-0 grid;
    place-items: center;
    user-select: none;
    justify-content: center;

    .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 12px;
    }
  
}
</style>