import React from 'react'
import {connect} from 'react-redux'

import {filterCustomEvents, filterHolidays, filterNameDays} from '../_helpers/filtering'
import {sortEventsAscending} from '../_helpers/sorting'
import EventsTable from '../EventsTable/EventsTable'
import ListItemEvent from '../ListItemEvent/ListItemEvent'
import EditableEvent from '../EditableEvent/EditableEvent'

import {FlexContainer, FlexBox} from '../../styled-components/grid-components'

class EventsDashboard extends React.Component {
    render() {
        const {calendar, customEvents, holidays} = this.props
        const filterParams = {
            date: {
                year: calendar.year,
                month: calendar.month,
                day: calendar.day
            },
            phrase: calendar.phrase
        }

        const eventsDashboard = [
            {
                inputData: holidays.parsedData,
                filter: filterHolidays,
                configObj: {
                    eventsName: 'Holidays',
                    icon: 'calendar',
                    EventViewComponent: ListItemEvent
                }
            },
            {
                inputData: customEvents.parsedData,
                filter: filterCustomEvents,
                configObj: {
                    eventsName: 'Your events',
                    icon: 'user',
                    EventViewComponent: EditableEvent,
                    marker: '\u{1F4C5}'
                }
            },
            {
                inputData: holidays.data && holidays.data.nameDays || [],
                filter: filterNameDays,
                configObj: {
                    eventsName: 'Name days',
                    icon: 'gift',
                    EventViewComponent: ListItemEvent,
                    marker: '\u{1F382}'
                }
            }
        ].map(eventGroup => ({...eventGroup.configObj, events: eventGroup
            .filter.call(null, eventGroup.inputData, filterParams)
            .sort(sortEventsAscending)}))
            .map(eventGroup =>(
                <FlexBox xsFlex="1 0 260px" key={eventGroup.eventsName}>
                    <EventsTable {...eventGroup}/>
                </FlexBox>
            ))

        return <FlexContainer>{eventsDashboard}</FlexContainer>
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
