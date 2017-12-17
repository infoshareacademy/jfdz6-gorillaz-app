const eventPropGetter = ({type}) => {
    switch (type) {
        case 'public':
            return {className: 'Calendar__event-public'}
        case 'other':
            return {className: 'Calendar__event-other'}
        default:
            return {className: {}}
    }
}

export function getCalendarConfig() {
    return (
        {
            views: ['month'],
            selectable: true,
            popup: true,
            timeslots: 1,
            step: 3600,
            events: this.state.events,
            onNavigate: this.handleNavigate,
            onSelectSlot: this.handleSelectSlot,
            onSelectEvent: this.handleSelectEvent,
            eventPropGetter: eventPropGetter
        }
    )
}