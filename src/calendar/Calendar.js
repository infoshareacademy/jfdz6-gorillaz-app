import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {
    subscribeCustomEvents,
    unsubscribeCustomEvents,
} from '../state/custom-events'
import {
    getHolidays,
}from "../state/holidays"
import {
    setDate
} from '../state/calendar'
import {getCalendarConfig} from './calendar-config'
import NewEventButton from '../events/views/NewEventButton'
import DateSearchBar from '../search-bar/DateSearchBar'
import EventsDashboard from '../events/EventsDashboard'

import {
    Container,
    FlexContainer,
    FlexBox,
} from '../styled-components/grid-components'
import Spinner from '../shared-components/Spinner'
import './Calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

class Calendar extends React.Component {

    componentDidMount = () => {
        !this.props.holidays.data && this.props.getHolidays()
        this.props.subscribeCustomEvents()
    }

    componentWillUnmount = () => {
        this.props.unsubscribeCustomEvents()
    }

    getCalendarConfig = getCalendarConfig.bind(this)

    handleNavigate = date => this.props.setDate(date)

    handleSelectSlot = ({start}) => this.props.setDate(start)

    handleSelectEvent = event => this.handleSelectSlot(event)

    handleRangeChange = (part, value, noSuchDay) => {
        if (part === 'year' && this.state.currentYear !== value) {
            this.props.parseEvents(value)
            this.props.parseHolidays(value)

            this.setState({
                currentYear: value,
            })
        }

        noSuchDay ?
            this.setState({
                selectedDate: {
                    ...this.state.selectedDate,
                    [part]: value,
                    day: ''
                }
            }) :
            this.setState({
                selectedDate: {
                    ...this.state.selectedDate,
                    [part]: value
                }
            })
    }

    handlePhraseChange = selectedPhrase =>  this.setState({selectedPhrase})

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
                                        <NewEventButton selectedDate={this.state.selectedDate}/>
                                    </div>
                                </FlexBox>
                            </FlexContainer>

                            <FlexContainer justify="center">
                                <FlexBox xsFlex="0 1 900px">
                                    <DateSearchBar
                                        selectedDate={this.state.selectedDate}
                                        onRangeChange={this.handleRangeChange}
                                        selectedPhrase={this.state.selectedPhrase}
                                        onPhraseChange={this.handlePhraseChange}
                                    />
                                </FlexBox>
                            </FlexContainer>

                            <FlexContainer>
                                <FlexBox>
                                    <EventsDashboard
                                        selectedDate={this.state.selectedDate}
                                        selectedPhrase={this.state.selectedPhrase}
                                    />
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
    setDate: date => dispatch(setDate(date)),
    subscribeCustomEvents: () => dispatch(subscribeCustomEvents()),
    unsubscribeCustomEvents: () => dispatch(unsubscribeCustomEvents()),
    getHolidays: () => dispatch(getHolidays())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)