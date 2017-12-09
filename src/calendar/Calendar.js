import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import './Calendar.css'
import {
    parseCustomEvents,
    parseOtherHolidays,
    parsePublicMovableHolidays,
    parsePublicNonMovableHolidays
} from './helpers'
import EventsList from '../events/EventsList'
import NewEvent from '../events/NewEvent'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

class Calendar extends React.Component {
    state = {
        events: [],
        currentYear: (new Date()).getFullYear(),
        selectedDate: null,
        selectedEvents: []
    }

    componentDidMount = () => (
        this.getParsedEvents(this.state.currentYear)
    )

    componentWillReceiveProps = (newProps) => {
        const parsedEvents = this.getParsedEvents(this.state.currentYear, newProps)
        this.state.selectedDate ? this.handleSelectSlot({start: this.state.selectedDate}, parsedEvents) : null
    }

    getParsedEvents = (currentYear, sentProps) => {
        const props = sentProps || this.props
        const {customEvents, otherHolidays, publicMovableHolidays, publicNonMovableHolidays} = props
        const parsedEvents = [
            ...customEvents.filter(event => +event.date.slice(0, 4) <= currentYear)
                .map(parseCustomEvents(currentYear)),
            ...otherHolidays.map(parseOtherHolidays(currentYear)),
            ...publicMovableHolidays.map(parsePublicMovableHolidays(currentYear)),
            ...publicNonMovableHolidays.map(parsePublicNonMovableHolidays(currentYear))
        ]

        this.setState({
            events: parsedEvents
        })

        return parsedEvents
    }

    handleNavigate = (currentDate) => {
        const currentYear = (new Date(currentDate)).getFullYear()

        if (this.state.currentYear !== currentYear) {
            this.setState({currentYear})
            this.getParsedEvents(currentYear)
        }

        this.setState({
            selectedDate: null,
            selectedEvents: []
        })
    }

    handleSelectSlot = ({start}, sentParsedEvents) => {
        const parsedEvents = sentParsedEvents || this.state.events
        const dateKey = ('0' + start.getDate()).slice(-2) + ('0' + (start.getMonth() + 1)).slice(-2)
        const names = this.props.nameDays[dateKey].join(' ')
        const namesObj = {
            id: dateKey + 'name',
            start: new Date(start),
            title: 'People celebrating name day',
            payload: names
        }

        this.setState(
            {
                selectedEvents: [
                    ...parsedEvents.filter(event =>
                        event.start.toString() === start.toString()
                    ),
                    namesObj
                ],
                selectedDate: start
            }
        )
    }

    handleSelectEvent = (event) => {
        this.handleSelectSlot(event)
    }

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
    nameDays: state.nameDays,
    otherHolidays: state.otherHolidays,
    publicMovableHolidays: state.publicMovableHolidays,
    publicNonMovableHolidays: state.publicNonMovableHolidays
})

export default connect(
    mapStateToProps
)(Calendar)