import moment from 'moment'

const firstYear = 1990
const yearsRange = 40

export const years = Array.from({length: yearsRange}, (value, index) => ({value: firstYear + index}))
export const months = moment.months().map((month, i) => ({ name: month, value: i + 1 }))

const monthToDayMap = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const firstDay = 1

const getDays = daysRange => Array(daysRange)
    .fill(null)
    .map((item, index) => ({
            value: firstDay + index
        })
    )

export const getDaysForGivenMonth = month => {
    const daysRange = monthToDayMap[month] || 31

    return getDays(daysRange)
}


