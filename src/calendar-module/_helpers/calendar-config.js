const eventPropGetter = ({type}) => ({className: type ? `Calendar__event Calendar__event-${type}` : {}})

export function getCalendarConfig() {
    const {year, month, day} = this.props.calendar
    const defaultDate = {month: 0, day: 1}

    return ({
        views: ['month'],
        selectable: true,
        popup: true,
        timeslots: 1,
        step: 3600,
        events: [
            ...this.props.customEvents.parsedData,
            ...this.props.holidays.parsedData
        ],
        onNavigate: this.handleNavigate,
        onSelectSlot: this.handleSelectSlot,
        onSelectEvent: this.handleSelectEvent,
        eventPropGetter: eventPropGetter,
        date: new Date(year, (month && month - 1) || defaultDate.month, day || defaultDate.day)
    })
}
