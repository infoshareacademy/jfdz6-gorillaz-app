import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {
    getParsedEventsForSelectedRange,
    getParsedHolidaysForSelectedRange,
    getNameDaysForSelectedRange
} from '../_helpers/parsers'
import EventsTable from '../EventsTable/EventsTable'
import ListItemEvent from '../ListItemEvent/ListItemEvent'
import EditableEvent from '../EditableEvent/EditableEvent'

import {
    FlexContainer,
    FlexBox,
} from '../../styled-components/grid-components'

const sortEventsAscending = (prev, next) => moment(prev.start).isBefore(next.start) ? -1 : 1
const filterMatchingPhrase = (event, phrase) => phrase ? new RegExp('\\b' + phrase , 'i')
    .test((event.title || '') + ' ' + event.payload) : true

class EventsDashboard extends React.Component {

    render() {
        const {calendar, customEvents, holidays} = this.props
        const selectedDate = {
            year: calendar.year,
            month: calendar.month,
            day: calendar.day
        }
        const selectedPhrase = calendar.phrase
        const isDateSelected = !Object.keys(selectedDate).every(part => selectedDate[part] === '')

        const selectedEvents = customEvents.data && isDateSelected ?
            getParsedEventsForSelectedRange(customEvents.parsedData, selectedDate)
                .filter(event => filterMatchingPhrase(event, selectedPhrase))
                .sort(sortEventsAscending) :
            []
        const selectedHolidays = holidays.data && isDateSelected ?
            getParsedHolidaysForSelectedRange(holidays.parsedData, selectedDate)
                .filter(event => filterMatchingPhrase(event, selectedPhrase))
                .sort(sortEventsAscending) :
            []
        const selectedNameDays = holidays.data && isDateSelected ?
            getNameDaysForSelectedRange(holidays.data.nameDays, selectedDate)
                .filter(event => filterMatchingPhrase(event, selectedPhrase))
                .sort(sortEventsAscending) :
            []

        return (
            isDateSelected ?
                <FlexContainer>
                    <FlexBox xsFlex="1 0 240px">
                        <EventsTable
                            eventsName="Holidays"
                            icon="calendar"
                            events={selectedHolidays}
                            eventViewComponent={ListItemEvent}
                        />
                    </FlexBox>

                    <FlexBox xsFlex="1 0 240px">
                        <EventsTable
                            eventsName="Your events"
                            icon="user"
                            events={selectedEvents}
                            eventViewComponent={EditableEvent}
                            marker={"\u{1F4C5}"}
                        />
                    </FlexBox>

                    <FlexBox xsFlex="1 0 240px">
                        <EventsTable
                            eventsName="Name days"
                            icon="gift"
                            events={selectedNameDays}
                            eventViewComponent={ListItemEvent}
                            marker={"\u{1F382}"}
                        />
                    </FlexBox>
                </FlexContainer> :
                <h5>Click on a given day to check who celebrates a name day!</h5>
        )
    }
}

const mapStateToProps = state => ({
    calendar: state.calendar,
    customEvents: state.customEvents,
    holidays: state.holidays
})

export default connect(
    mapStateToProps
)(EventsDashboard)

