const eventPropGetter = ({type}) => {
    switch (type) {
        case 'custom':
            return {className: 'Calendar__event Calendar__event-custom'}
        case 'public':
            return {className: ' Calendar__event Calendar__event-public'}
        case 'other':
            return {className: 'Calendar__event Calendar__event-other'}
        default:
            return {className: {}}
    }
}

export function getCalendarConfig() {
    const {year, month, day} = this.state.selectedDate
    const isDatePristine = Object.keys(this.state.selectedDate).every(part => this.state.selectedDate[part] === '')
    const defaultDate = isDatePristine ?
        {
            year: (new Date()).getFullYear(),
            month: (new Date()).getMonth(),
            day: (new Date()).getDate()
        } :
        {
            year: (new Date()).getFullYear(),
            month: 0,
            day: 1
        }

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
        date: new Date(year || defaultDate.year,
            (month && month - 1) || defaultDate.month,
            day || defaultDate.day
        )
    })
}
