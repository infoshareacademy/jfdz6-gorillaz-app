import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {getHolidays} from "../state/holidays"
import {Container, Box} from '../styled-components/grid-components'
import './Calendar.css'
import {
    getParsedEvents,
    getParsedEventsForSelectedDate,
    getParsedEventsForSelectedRange
} from './parsers'
import {getCalendarConfig} from './calendar-config'
import NewEventButton from '../events/views/NewEventButton'
import EventsList from '../events/EventsList'
import DateSearchBar from '../search-bar/DateSearchBar'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

class Calendar extends React.Component {
    state = {
        events: [],
        currentYear: (new Date()).getFullYear(),
        selectedDate: null,
        selectedEvents: []
    }

    componentDidMount = () => {
        this.props.holidays.data ? this.componentWillReceiveProps(this.props) : this.props.getHolidays()
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.holidays.data) {
            const parsedEvents = this.getParsedEvents(this.state.currentYear, newProps)
            this.state.selectedDate && this.getParsedEventsForSelectedDate(this.state.selectedDate, parsedEvents)
        }
    }

    getParsedEvents = getParsedEvents.bind(this)
    getParsedEventsForSelectedDate = getParsedEventsForSelectedDate.bind(this)
    getParsedEventsForSelectedRange = getParsedEventsForSelectedRange.bind(this)
    getCalendarConfig = getCalendarConfig.bind(this)

    handleNavigate = (currentDate) => {
        const currentYear = (new Date(currentDate)).getFullYear()

        this.setState({
            selectedDate: null,
            selectedEvents: []
        })

        if (this.state.currentYear !== currentYear) {
            this.getParsedEvents(currentYear)
            this.setState({currentYear})
        }
    }

    handleSelectSlot = ({start}) => this.getParsedEventsForSelectedDate(start)

    handleSelectEvent = (event) => this.handleSelectSlot(event)

    handleRangeChange = selectedRange => this.getParsedEventsForSelectedRange(selectedRange)

    render() {
        return (
            <Container>
                <Box sm={8}>
                    <div className="Calendar__wrapper">
                        <BigCalendar {...this.getCalendarConfig()}/>
                    </div>
                </Box>
                <Box sm={4}>
                <div>
                    {
                        this.props.holidays.getting && <p>Getting data...</p>
                    }
                    <DateSearchBar
                        onRangeChange={this.handleRangeChange}
                        selectedDate={this.state.selectedDate}
                    />

                    <NewEventButton selectedDate={this.state.selectedDate}/>
                    {
                        this.state.selectedEvents.length ?
                            <EventsList
                                events={this.state.selectedEvents}
                                selectedDate={this.state.selectedDate}
                            /> :
                            <h5>Click on a given day to check who celebrates a name day!</h5>
                    }
                </div>
                </Box>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    customEvents: state.customEvents,
    holidays: state.holidays
})

const mapDispatchToProps = dispatch => ({
    getHolidays: () => dispatch(getHolidays())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)