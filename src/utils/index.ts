import { ref } from 'vue'
import { useRafFn } from '@vueuse/core'
import type { WindowPosition } from '../types/index'

export * from './canvas'
export * from './vector'

export function useWindowPosition() : WindowPosition {
    const screenTop = ref(window.screenTop)
    const screenLeft = ref(window.screenLeft)

    const timeout = useRafFn(() => {
        screenTop.value = window.screenTop
        screenLeft.value = window.screenLeft
    })

    return { screenLeft, screenTop, timeout }
}