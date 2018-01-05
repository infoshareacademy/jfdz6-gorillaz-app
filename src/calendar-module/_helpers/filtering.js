const isPhraseMatching = (event, phrase) => phrase ?
    new RegExp('\\b' + phrase , 'i').test((event.title || '') + ' ' + event.payload) : true

const isDayAndMonthInRange = (event, selectedDate) => (
    (selectedDate.month ? (event.start.getMonth() + 1 === selectedDate.month) : true) &&
    (selectedDate.day ? (event.start.getDate() === selectedDate.day) : true)
)

export const filterEvents = (events, {date, phrase}) => (
    events.filter(event =>
        event.since <= date.year &&
        isDayAndMonthInRange(event, date) &&
        isPhraseMatching(event, phrase)
    )
)

export const filterHolidays = (events, {date, phrase}) => (
    events.filter(event =>
        isDayAndMonthInRange(event, date) &&
        isPhraseMatching(event, phrase)
    )
)

export const filterNameDays = (nameDays, {date, phrase}) => {
    const nullPattern = '00'
    const dateKey = (nullPattern + date.day).slice(-2) + (nullPattern + date.month).slice(-2)
    const isDateFull = dateKey.slice(0, 2) !== nullPattern && dateKey.slice(-2) !== nullPattern

    return Object.keys(nameDays).reduce((acc, date) => {
        const isMatching = date === dateKey ||
            (!isDateFull &&
                (date.slice(0, 2) === dateKey.slice(0, 2) ||
                    date.slice(-2) === dateKey.slice(-2) ||
                    dateKey === '0000'
                )
            )
        isMatching && (acc.push({
                id: date + 'name',
                start: new Date(2017, +date.slice(-2) - 1, date.slice(0, 2)),
                payload: nameDays[date].join(', ')
            })
        )

        return acc
    }, [])
        .filter(event => isPhraseMatching(event, phrase))
}
