import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {
    getParsedEventsForSelectedRange,
    getParsedHolidaysForSelectedRange,
    getNameDaysForSelectedRange
} from '../calendar/parsers'
import EventsTable from '../events/EventsTable'
import ReadOnlyEvent from '../events/views/ReadOnlyEvent'
import EditableEvent from '../events/views/EditableEvent'
import './EventsDashboard.css'

const sortEventsAscending = (prev, next) => moment(prev.start).isBefore(next.start) ? -1 : 1

class EventsDashboard extends React.Component {

    render() {
        const {customEvents, holidays, selectedDate} = this.props
        const isDateSelected = !Object.keys(selectedDate).every(part => selectedDate[part] === '')

        const selectedEvents = customEvents.data && isDateSelected ?
            getParsedEventsForSelectedRange(customEvents.parsedData, selectedDate).sort(sortEventsAscending) :
            []
        const selectedHolidays = holidays.data && isDateSelected ?
            getParsedHolidaysForSelectedRange(holidays.parsedData, selectedDate).sort(sortEventsAscending) :
            []
        const selectedNameDays = holidays.data && isDateSelected ?
            getNameDaysForSelectedRange(holidays.data.nameDays, selectedDate).sort(sortEventsAscending) :
            []

        return (
            isDateSelected ?
                <div className="EventsDashboard__wrapper">
                    <div className="EventsDashboard__table">
                        <EventsTable
                            eventsName="Holidays"
                            icon="calendar"
                            events={selectedHolidays}
                            eventViewComponent={ReadOnlyEvent}
                            marker={'\u{1F385}'}
                        />
                    </div>

                    <div className="EventsDashboard__table">
                        <EventsTable
                            eventsName="Your events"
                            icon="user"
                            events={selectedEvents}
                            eventViewComponent={EditableEvent}
                            marker={"\u{1F4C5}"}
                        />
                    </div>

                    <div className="EventsDashboard__table">
                        <EventsTable
                            eventsName="Name days"
                            icon="gift"
                            events={selectedNameDays}
                            eventViewComponent={ReadOnlyEvent}
                            marker={"\u{1F382}"}
                        />
                    </div>
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
