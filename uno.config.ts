import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'
import type { ThemeExtender } from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify({
            // prefix: 'z-',
            // ignoreAttributes: [
            //     'text-red'
            // ]
        }),
        presetUno(),
    ],
    transformers: [
        transformerDirectives({
            // applyVariable: ['--aa'],
            // applyVariable: false  
        })
    ],
    variants: [
        // (matcher) => {
        //     if (matcher == 'e-500') {
        //         console.log('3:', matcher)
        //         return 'blue-500'
        //     }
        //     if (!matcher.startsWith('bg-blue-500')) {

        //         // console.log('1:', matcher)
        //         return matcher
        //     }
        //     console.log('2:', matcher)
        //     return {
        //         // slice `hover:` prefix and passed to the next variants and rules
        //         matcher: matcher.slice(6),
        //         selector: s => `${s}:hover`,
        //     }

            
        // },
    ],
    rules: [
        // [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    ]
})