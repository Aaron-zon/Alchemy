export const info = [
    {
        name: 'Plum',
        date: '2024/03/11',
    }
]

export const works = info.map((info, idx) => {
    return {
        ...info,
        no: `${idx + 1}`.padStart(3, '0'),
    }
})