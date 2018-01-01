import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {setDate} from '../../state/calendar'
import {getCalendarConfig} from '../_helpers/calendar-config'
import NewEventButton from '../NewEventButton/NewEventButton'
import DateSearchBar from '../DateSearchBar/DateSearchBar'
import EventsDashboard from '../EventsDashboard/EventsDashboard'

import {
    Container,
    FlexContainer,
    FlexBox,
} from '../../styled-components/grid-components'
import Spinner from '../../shared-components/Spinner/Spinner'
import './Calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

class Calendar extends React.Component {
    getCalendarConfig = getCalendarConfig.bind(this)

    handleNavigate = date => this.props.setDate(date)

    handleSelectSlot = ({start}) => this.props.setDate(start)

    handleSelectEvent = event => this.handleSelectSlot(event)

    render() {
        const isDataRetrieved = !this.props.holidays.getting && !this.props.customEvents.getting

        return (
            <Container>
                {
                    isDataRetrieved ?
                        <div>
                            <FlexContainer justify="center">
                                <FlexBox xsFlex="0 1 900px">
                                    <div className="Calendar__wrapper">
                                        <BigCalendar {...this.getCalendarConfig()}/>
                                        <NewEventButton/>
                                    </div>
                                </FlexBox>
                            </FlexContainer>

                            <FlexContainer justify="center">
                                <FlexBox xsFlex="0 1 900px">
                                    <DateSearchBar/>
                                </FlexBox>
                            </FlexContainer>

                            <FlexContainer>
                                <FlexBox>
                                    <EventsDashboard/>
                                </FlexBox>
                            </FlexContainer>
                        </div> :
                        <Spinner/>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    calendar: state.calendar,
    customEvents: state.customEvents,
    holidays: state.holidays
})

const mapDispatchToProps = dispatch => ({
    setDate: date => dispatch(setDate(date))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)
