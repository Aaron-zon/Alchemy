import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify({
            prefix: 'z-',
            ignoreAttributes: [
                'text-red'
            ]
        }),
        presetUno()
    ],
    rules: [
        [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    ]
})