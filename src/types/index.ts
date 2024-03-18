import type { Ref } from 'vue'
import type { Pausable } from '@vueuse/core'

export interface WindowPosition {
    screenTop: Ref<number>
    screenLeft: Ref<number>
    timeout: Pausable
}