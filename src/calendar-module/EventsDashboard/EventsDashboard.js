import React from 'react'
import {connect} from 'react-redux'

import {
    getParsedEventsForSelectedRange,
    getParsedHolidaysForSelectedRange,
    getNameDaysForSelectedRange
} from '../_helpers/parsers'
import {sortEventsAscending} from '../_helpers/sorting'
import {filterMatchingPhrase} from '../_helpers/filtering'
import EventsTable from '../EventsTable/EventsTable'
import ListItemEvent from '../ListItemEvent/ListItemEvent'
import EditableEvent from '../EditableEvent/EditableEvent'

import {FlexContainer, FlexBox} from '../../styled-components/grid-components'

class EventsDashboard extends React.Component {
    render() {
        const {calendar, customEvents, holidays} = this.props
        const selectedDate = {
            year: calendar.year,
            month: calendar.month,
            day: calendar.day
        }
        const selectedPhrase = calendar.phrase

        const selectedData = [
            {
                inputData: holidays.parsedData,
                parser: getParsedHolidaysForSelectedRange,
                configObj: {
                    eventsName: 'Holidays',
                    icon: 'calendar',
                    eventViewComponent: ListItemEvent
                }
            },
            {
                inputData: customEvents.parsedData,
                parser: getParsedEventsForSelectedRange,
                configObj: {
                    eventsName: 'Your events',
                    icon: 'user',
                    eventViewComponent: EditableEvent,
                    marker: '\u{1F4C5}'
                }
            },
            {
                inputData: holidays.data && holidays.data.nameDays || [],
                parser: getNameDaysForSelectedRange,
                configObj: {
                    eventsName: 'Name days',
                    icon: 'gift',
                    eventViewComponent: ListItemEvent,
                    marker: '\u{1F382}'
                }
            }
        ].map(eventGroup => ({...eventGroup.configObj, events: eventGroup.parser.call(null, eventGroup.inputData, selectedDate)}))
            .map(eventGroup => ({...eventGroup, events: eventGroup.events
                .filter(event => filterMatchingPhrase(event, selectedPhrase))
                .sort(sortEventsAscending)
            }))
            .map(eventGroup =>(
                <FlexBox xsFlex="1 0 260px" key={eventGroup.eventsName}>
                    <EventsTable {...eventGroup}/>
                </FlexBox>
            ))

        return <FlexContainer>{selectedData}</FlexContainer>
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
