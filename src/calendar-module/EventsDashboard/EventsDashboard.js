import React from 'react'
import {connect} from 'react-redux'

import {filterCustomEvents, filterHolidays, filterNameDays} from '../_helpers/filtering'
import {sortEventsAscending} from '../_helpers/sorting'
import EventsTable from '../EventsTable/EventsTable'
import ListItemEvent from '../ListItemEvent/ListItemEvent'
import EditableEvent from '../EditableEvent/EditableEvent'

import {FlexContainer, FlexBox} from '../../styled-components/grid-components'
import {ColouredWrapper} from '../../styled-components/miscellaneous-components'

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
                    EventViewComponent: ListItemEvent,
                    marker: 'pushpin'
                }
            },
            {
                inputData: customEvents.parsedData,
                filter: filterCustomEvents,
                configObj: {
                    eventsName: 'Your events',
                    icon: 'user',
                    EventViewComponent: EditableEvent,
                    marker: 'flash'
                }
            },
            {
                inputData: holidays.data && holidays.data.nameDays || [],
                filter: filterNameDays,
                configObj: {
                    eventsName: 'Name days',
                    icon: 'gift',
                    EventViewComponent: ListItemEvent,
                    marker: 'bell'
                }
            }
        ].map(eventGroup => ({
            ...eventGroup.configObj, events: eventGroup
                .filter.call(null, eventGroup.inputData, filterParams)
                .sort(sortEventsAscending)
        }))
            .map(eventGroup => (
                <FlexBox xsFlex="1 0 260px" key={eventGroup.eventsName}>
                    <EventsTable {...eventGroup}/>
                </FlexBox>
            ))

        return (
            <ColouredWrapper>
                <FlexContainer>
                    {eventsDashboard}
                </FlexContainer>
            </ColouredWrapper>
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
