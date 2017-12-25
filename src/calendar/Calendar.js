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
    getParsedEventsForSelectedRange,
    getParsedHolidaysForSelectedRange
} from './parsers'
import {getCalendarConfig} from './calendar-config'
import NewEventButton from '../events/views/NewEventButton'
import EventsList from '../events/EventsList'
import DateSearchBar from '../search-bar/DateSearchBar'
import {Container, Box} from '../styled-components/grid-components'
import './Calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
)

class Calendar extends React.Component {
    state = {
        currentYear: (new Date()).getFullYear(),
        selectedDate: {
            year: '',
            month: '',
            day: ''
        }
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
                selectedDate: {
                    year: currentDate.getFullYear(),
                    month: (currentDate.getMonth() + 1),
                    day: currentDate.getDate()
                }
            })
        } else {
            this.setState({
                selectedDate: {
                    year: currentDate.getFullYear(),
                    month: (currentDate.getMonth() + 1),
                    day: currentDate.getDate()
                }
            })
        }
    }

    handleSelectSlot = ({start}) => this.setState({
        selectedDate: {
            year: start.getFullYear(),
            month: start.getMonth() + 1,
            day: start.getDate()
        }
    })

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


    render() {
        const {customEvents, holidays} = this.props
        const isDateSelected = !Object.keys(this.state.selectedDate).every(part => this.state.selectedDate[part] === '')
        const selectedEvents = customEvents.data && isDateSelected ?
            getParsedEventsForSelectedRange(customEvents.parsedData, this.state.selectedDate) :
            []
        const selectedHolidays = holidays.data && isDateSelected ?
            getParsedHolidaysForSelectedRange(holidays, this.state.selectedDate) :
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
                        <DateSearchBar
                            selectedDate={this.state.selectedDate}
                            onRangeChange={this.handleRangeChange}
                        />

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