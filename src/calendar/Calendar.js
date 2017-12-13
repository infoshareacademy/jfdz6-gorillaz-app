import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import {getHolidays} from "../state/holidays"
import './Calendar.css'
import {
    getParsedEvents,
    getParsedEventsForSelectedDate
} from './parsers'
import EventsList from '../events/EventsList'
import NewEvent from '../events/NewEvent'

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
        this.props.getHolidays()
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.holidays.data) {
            const parsedEvents = this.getParsedEvents(this.state.currentYear, newProps)
            const selectedDate = this.state.selectedDate
            selectedDate ? this.getParsedEventsForSelectedDate(selectedDate, parsedEvents) : null
        }
    }

    getParsedEvents = getParsedEvents.bind(this)
    getParsedEventsForSelectedDate = getParsedEventsForSelectedDate.bind(this)

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

    eventPropGetter = ({type}) => {
        switch (type) {
            case 'public':
                return {className: 'Calendar__event-public'}
            case 'other':
                return {className: 'Calendar__event-other'}
            default:
                return {className: {}}
        }
    }

    render() {
        return (
            <div>
                <div className="Calendar__wrapper">
                    <BigCalendar
                        views={['month']}
                        selectable
                        popup
                        timeslots={1}
                        step={3600}
                        events={this.state.events}
                        onNavigate={this.handleNavigate}
                        onSelectSlot={this.handleSelectSlot}
                        onSelectEvent={this.handleSelectEvent}
                        eventPropGetter={this.eventPropGetter}
                    />
                </div>
                <div>
                    {
                        this.props.holidays.getting ? <p>Getting data...</p> : null
                    }
                    <NewEvent
                        selectedDate={this.state.selectedDate}
                    />
                    {
                        this.state.selectedEvents.length ?
                            <EventsList
                                events={this.state.selectedEvents}
                                selectedDate={this.state.selectedDate}
                            /> :
                            <h5>Click on a given day to check who celebrates a name day!</h5>
                    }
                </div>
            </div>
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