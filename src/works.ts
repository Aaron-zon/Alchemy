export const info = [
    {
        name: 'Plum',
        date: '2024/03/11',
    },
    {
        name: 'Move',
        date: '2024/03/13',
    },
    {
        name: 'LeftMove',
        date: '2024/03/13',
    }
]

export const works = info.map((info, idx) => {
    return {
        ...info,
        no: `${idx + 1}`.padStart(3, '0'),
    }
})