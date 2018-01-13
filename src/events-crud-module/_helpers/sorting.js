import moment from 'moment'

const fullYear = 2020
const sortEvents = sortBy => (prev, next) => (moment(prev[sortBy]).year(fullYear)
    .isBefore(moment(next[sortBy]).year(fullYear)) ? -1 : 1)

export const sortRawEventsAscending = sortEvents('date')
