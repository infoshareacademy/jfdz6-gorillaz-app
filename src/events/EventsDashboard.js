import React from 'react'
import {connect} from 'react-redux'

import {
    getParsedEventsForSelectedRange,
    getParsedHolidaysForSelectedRange,
    getNameDaysForSelectedRange
} from '../calendar/parsers'
import EventsTable from '../events/EventsTable'
import ReadOnlyEvent from '../events/views/ReadOnlyEvent'
import EditableEvent from '../events/views/EditableEvent'
// import './EventsDashboard.css'

class EventsDashboard extends React.Component {

    render() {
        const {customEvents, holidays, selectedDate} = this.props
        const isDateSelected = !Object.keys(selectedDate).every(part => selectedDate[part] === '')

        const selectedEvents = customEvents.data && isDateSelected ?
            getParsedEventsForSelectedRange(customEvents.parsedData, selectedDate) :
            []
        const selectedHolidays = holidays.data && isDateSelected ?
            getParsedHolidaysForSelectedRange(holidays.parsedData, selectedDate) :
            []
        const selectedNameDays = holidays.data && isDateSelected ?
            getNameDaysForSelectedRange(holidays.data.nameDays, selectedDate) :
            []

        return (
                isDateSelected ?
                    <div>
                        <EventsTable
                            eventsName="Holidays"
                            icon="calendar"
                            events={selectedHolidays}
                            eventViewComponent={ReadOnlyEvent}
                        />

                        <EventsTable
                            eventsName="Your events"
                            icon="user"
                            events={selectedEvents}
                            eventViewComponent={EditableEvent}
                        />

                        <EventsTable
                            eventsName="Name days"
                            icon="gift"
                            events={selectedNameDays}
                            eventViewComponent={ReadOnlyEvent}
                        />
                    </div> :
                    <h5>Click on a given day to check who celebrates a name day!</h5>
        )
    }
}

const mapStateToProps = state => ({
    customEvents: state.customEvents,
    holidays: state.holidays
})

export default connect(
    mapStateToProps
)(EventsDashboard)

