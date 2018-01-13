import moment from 'moment'

const firstYear = 1990
const yearsRange = 40
const mapDays = daysRange => Array.from({length: daysRange}, (v, i) => ({value: i + 1}))

export const years = Array.from({length: yearsRange}, (v, i) => ({value: firstYear + i}))
export const months = moment.months().map((month, i) => ({ name: month, value: i + 1 }))
export const getDays = (year, month) => mapDays(month && moment(`${year}-${month}`, 'YYYY-M').daysInMonth() || 31)
