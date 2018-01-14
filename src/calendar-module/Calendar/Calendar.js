import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {setDate, setPhrase} from '../../state/calendar'
import {getCalendarConfig} from '../_helpers/calendar-config'
import NewEventButton from '../NewEventButton/NewEventButton'
import DateSearchBar from '../DateSearchBar/DateSearchBar'
import EventsDashboard from '../EventsDashboard/EventsDashboard'
import Spinner from '../../shared-components/Spinner/Spinner'

import {Container, FlexContainer, FlexBox} from '../../styled-components/grid-components'
import './Calendar.css'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends React.Component {
    getCalendarConfig = getCalendarConfig.bind(this)

    handleDateChange = newDate => {
        this.props.setDate(newDate)
        this.props.setPhrase('')
    }

    handleNavigate = date => this.handleDateChange(date)

    handleSelectSlot = ({start}) => this.handleDateChange(start)

    handleSelectEvent = event => this.handleSelectSlot(event)

    render() {
        const isDataRetrieved = !this.props.holidays.getting && !this.props.customEvents.getting

        return (
            <Container>
                {
                    isDataRetrieved ?
                        <FlexContainer justify="center">
                            <FlexBox xsFlex="0 1 1000px">
                                <div className="Calendar__wrapper">
                                    <BigCalendar {...this.getCalendarConfig()}/>
                                    <NewEventButton/>
                                </div>

                                <DateSearchBar/>
                                <EventsDashboard/>
                            </FlexBox>
                        </FlexContainer> :
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
    setDate: date => dispatch(setDate(date)),
    setPhrase: phrase => dispatch(setPhrase(phrase))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)
