import moment from 'moment'

export const sortEventsAscending = (prev, next) => moment(prev.start).isBefore(next.start) ? -1 : 1
