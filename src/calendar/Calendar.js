import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import './Calendar.css'
import {customEvents, fixedOfficialEvents} from "./events"
import {parseCustomEvents, parseOfficialEvents} from './helpers'
import EventsList from '../events/EventsList'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

export class Calendar extends React.Component {
    state = {
        events: [],
        currentYear: (new Date()).getFullYear(),
        selectedEvents: []
    }

    componentDidMount = () => (
        this.getParsedEvents(this.state.currentYear)
    )

    getParsedEvents = (currentYear) => (
        this.setState({
            events: [
                ...customEvents.map(parseCustomEvents(currentYear)),
                ...fixedOfficialEvents.map(parseOfficialEvents(currentYear))
            ]
        })
    )

    handleNavigate = (currentDate) => {
        const currentYear = (new Date(currentDate)).getFullYear()

        if (this.state.currentYear !== currentYear) {
            this.setState({currentYear})
            this.getParsedEvents(currentYear)
        }
    }

    handleSelectSlot = ({start}) => (
        this.setState({
            selectedEvents: this.state.events.filter(event =>
                event.start.toString() === start.toString()
            )
        })
    )

    eventPropGetter = ({isOfficial}) => (
        {
            className: (isOfficial ? 'Calendar__event-official' : {})
        }
    )

    render() {
        return (
            <div>
                <div className="Calendar__wrapper">
                    <BigCalendar
                        views={['month', 'agenda']}
                        selectable
                        popup
                        timeslots={1}
                        step={3600}
                        events={this.state.events}
                        onNavigate={this.handleNavigate}
                        onSelectSlot={this.handleSelectSlot}
                        eventPropGetter={this.eventPropGetter}
                    />
                </div>
                <div>
                    {
                        this.state.selectedEvents.length ?
                            <EventsList events={this.state.selectedEvents}/> : null
                    }
                </div>
            </div>
        )
    }
}