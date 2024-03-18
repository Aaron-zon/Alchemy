<script lang="ts" setup>
import { works } from '../works'

console.log(works);
</script>

<template>
    <div class="paper index-page">
        <div class="border border-gray-300">
            <h1 class="font-mono mb-2 text-lg font-bold mb-4">Alchemy</h1>
            <pre class="flex grid gap-x-4 gap-y-1">
                <router-link class="flex link block mr-4" v-for="work in works" :key="work.no" :to="`/${work.no}`">
                    <span class="inline-block mr-2 opacity-50">{{ work.no }}</span>
                    <b class="inline-block">{{ work.name }}</b>
                </router-link>
            </pre>
            <h1 class="font-mono mb-2 text-lg font-bold mb-4"></h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.paper {
    @apply fixed top-0 left-0 right-0 bottom-0 grid;
    place-items: center;
    user-select: none;
    justify-content: center;
}

.index-page {
    width: auto;
}
</style>