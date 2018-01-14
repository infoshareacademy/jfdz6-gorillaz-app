const isPhraseMatching = (event, phrase) => phrase ?
    new RegExp('\\b' + phrase , 'i').test((event.title || '') + ' ' + event.payload) : true

const isDayAndMonthInRange = (event, selectedDate) => (
    (selectedDate.month ? (event.start.getMonth() + 1 === selectedDate.month) : true) &&
    (selectedDate.day ? (event.start.getDate() === selectedDate.day) : true)
)

const isEventInRange = (event, {date, phrase}) => isDayAndMonthInRange(event, date) && isPhraseMatching(event, phrase)

const isDateMatching = (date, dateKey, isDateFull) => (
    date === dateKey ||
    (!isDateFull &&
        (date.slice(0, 2) === dateKey.slice(0, 2) || date.slice(-2) === dateKey.slice(-2) || dateKey === '0000')
    )
)

export const filterCustomEvents = (events, {date, phrase}) => (
    events.filter(event => event.since <= date.year && isEventInRange(event, {date, phrase}))
)

export const filterHolidays = (events, {date, phrase}) => events.filter(event => isEventInRange(event, {date, phrase}))

export const filterNameDays = (nameDays, {date, phrase}) => {
    const nullPattern = '00'
    const dateKey = (nullPattern + date.day).slice(-2) + (nullPattern + date.month).slice(-2)
    const isDateFull = dateKey.slice(0, 2) !== nullPattern && dateKey.slice(-2) !== nullPattern

    return Object.keys(nameDays).reduce((acc, date) => {
        isDateMatching(date, dateKey, isDateFull) && (acc.push({
                id: date + 'name',
                start: new Date(2017, +date.slice(-2) - 1, date.slice(0, 2)),
                payload: nameDays[date].join(', ')
            })
        )

        return acc
    }, [])
        .filter(event => isPhraseMatching(event, phrase))
}
