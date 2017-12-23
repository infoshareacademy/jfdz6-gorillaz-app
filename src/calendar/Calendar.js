import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {
    subscribeCustomEvents,
    unsubscribeCustomEvents,
    parseEvents
} from '../state/custom-events'
import {
    getHolidays,
    parseHolidays
}from "../state/holidays"
import {
    getParsedEventsForSelectedDate,
    getParsedHolidaysForSelectedDate
} from './parsers'
import {getCalendarConfig} from './calendar-config'
import NewEventButton from '../events/views/NewEventButton'
import EventsList from '../events/EventsList'
import {Container, Box} from '../styled-components/grid-components'
import './Calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

class Calendar extends React.Component {
    state = {
        currentYear: (new Date()).getFullYear(),
        selectedDate: null
    }

    componentDidMount = () => {
        !this.props.holidays.data && this.props.getHolidays()
        this.props.subscribeCustomEvents()
    }

    componentWillUnmount = () => {
        this.props.unsubscribeCustomEvents()
    }

    getCalendarConfig = getCalendarConfig.bind(this)

    handleNavigate = currentDate => {
        const currentYear = (new Date(currentDate)).getFullYear()

        if (this.state.currentYear !== currentYear) {
            this.props.parseEvents(currentYear)
            this.props.parseHolidays(currentYear)

            this.setState({
                currentYear,
                selectedDate: null
            })
        } else {
            this.setState({
                selectedDate: null
            })
        }
    }

    handleSelectSlot = ({start}) => this.setState({selectedDate: start})

    handleSelectEvent = event => this.handleSelectSlot(event)

    render() {
        const {customEvents, holidays} = this.props
        const selectedEvents = customEvents.parsedData && this.state.selectedDate ?
            getParsedEventsForSelectedDate(customEvents.parsedData, this.state.selectedDate) :
            []
        const selectedHolidays = holidays.parsedData && this.state.selectedDate ?
            getParsedHolidaysForSelectedDate(holidays, this.state.selectedDate) :
            []

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
                        <NewEventButton selectedDate={this.state.selectedDate}/>
                        {
                            selectedEvents.length || selectedHolidays.length ?
                                <EventsList
                                    events={[
                                        ...selectedEvents,
                                        ...selectedHolidays
                                    ]}
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
    parseEvents: year => dispatch(parseEvents(year)),
    subscribeCustomEvents: () => dispatch(subscribeCustomEvents()),
    unsubscribeCustomEvents: () => dispatch(unsubscribeCustomEvents()),
    getHolidays: () => dispatch(getHolidays()),
    parseHolidays: year => dispatch(parseHolidays(year))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)