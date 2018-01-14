import moment from 'moment'

const sortEvents = sortBy => (prev, next) => moment(prev[sortBy]).isBefore(next[sortBy]) ? -1 : 1

export const sortEventsAscending = sortEvents('start')
