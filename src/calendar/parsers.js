const getEasterRelatedDate = (year, holiday) => {
    const auxVars = []
    let holidayOffset = null

    auxVars[0] = Math.floor(year % 19)
    auxVars[1] = Math.floor(year / 100)
    auxVars[2] = Math.floor(year % 100)
    auxVars[3] = Math.floor(auxVars[1] / 4)
    auxVars[4] = Math.floor(auxVars[1] % 4)
    auxVars[5] = Math.floor((8 * auxVars[1] + 13) / 25)
    auxVars[6] = Math.floor((19 * auxVars[0] + auxVars[1] - auxVars[3] - auxVars[5] + 15) % 30)
    auxVars[7] = Math.floor(auxVars[2] / 4)
    auxVars[8] = Math.floor(auxVars[2] % 4)
    auxVars[9] = Math.floor((auxVars[0] + 11 * auxVars[6]) / 319)
    auxVars[10] = Math.floor((2 * auxVars[4] + 2 * auxVars[7] - auxVars[8] - auxVars[6] + auxVars[9] + 32) % 7)

    switch (holiday) {
        case 'Easter Monday':
            holidayOffset = 1
            break
        case 'Pentecost Sunday':
            holidayOffset = 49
            break
        case 'Corpus Christi':
            holidayOffset = 60
            break
        default:
            holidayOffset = 0
    }

    const month = Math.floor((auxVars[6] - auxVars[9] + auxVars[10] + 90) / 25)
    const day = Math.floor((auxVars[6] - auxVars[9] + auxVars[10] + month + 19) % 32)

    const easterDate = new Date(year, month, day)
    let holidayDate = new Date(easterDate)
    holidayDate.setDate(holidayDate.getDate() + holidayOffset)

    return ('0' + holidayDate.getDate()).slice(-2) + ('0' + holidayDate.getMonth()).slice(-2)
}

const getParsedObjectCommonPart = (currentYear, event) => (
    {
        start: new Date(currentYear, +event.date.slice(2) - 1, +event.date.slice(0, 2)),
        end: new Date(currentYear, +event.date.slice(2) - 1, +event.date.slice(0, 2)),
        title: event.title,
        payload: event.payload
    }
)

const parseCustomEvents = (currentYear) => (
    (event) => (
        {
            id: event.id,
            start: new Date(currentYear, +event.date.slice(5, 7) - 1, +event.date.slice(8)),
            end: new Date(currentYear, +event.date.slice(5, 7) - 1, +event.date.slice(8)),
            title: event.title,
            payload: event.payload,
            type: 'custom'
        }
    )
)

const parseOtherHolidays = (currentYear) => (
    (event) => (
        {
            ...getParsedObjectCommonPart(currentYear, event),
            id: event.date + 'other',
            type: 'other'
        }
    )
)

const parsePublicMovableHolidays = (currentYear) => (
    (event) => {
        event =
            {
                ...event,
                date: getEasterRelatedDate(currentYear, event.title)
            }

        return (
            {
                ...getParsedObjectCommonPart(currentYear, event),
                id: event.date + 'public',
                type: 'public'
            }
        )
    }
)

const parsePublicNonMovableHolidays = (currentYear) => (
    (event) => (
        {
            ...getParsedObjectCommonPart(currentYear, event),
            id: event.date + 'public',
            type: 'public'
        }
    )
)

export function getParsedEvents(currentYear, sentProps) {
    const props = sentProps || this.props
    const {customEvents} = props
    const {otherHolidays, publicMovableHolidays, publicNonMovableHolidays} = props.holidays.data
    const parsedEvents =
        [
            ...customEvents.filter(event =>
                +event.date.slice(0, 4) <= currentYear)
                .map(parseCustomEvents(currentYear)),
            ...otherHolidays.map(parseOtherHolidays(currentYear)),
            ...publicMovableHolidays.map(parsePublicMovableHolidays(currentYear)),
            ...publicNonMovableHolidays.map(parsePublicNonMovableHolidays(currentYear))
        ]

    this.setState({
        events: parsedEvents
    })

    return parsedEvents
}

export function getParsedEventsForSelectedDate(date, sentParsedEvents) {
    const parsedEvents = sentParsedEvents || this.state.events
    const dateKey = ('0' + date.getDate()).slice(-2) + ('0' + (date.getMonth() + 1)).slice(-2)
    const names = this.props.holidays.data.nameDays[dateKey].join(' ')
    const namesObj =
        {
            id: dateKey + 'name',
            start: new Date(date),
            title: 'People celebrating name day',
            payload: names
        }

    this.setState(
        {
            selectedEvents:
                [
                    ...parsedEvents.filter(event =>
                        event.start.toString() === date.toString()
                    ),
                    namesObj
                ],
            selectedDate: date
        }
    )
}
