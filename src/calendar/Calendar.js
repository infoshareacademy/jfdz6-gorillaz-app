import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import './Calendar.css'
import {customEvents, fixedOfficialEvents} from "./events"
import {parseEvents} from './helpers'

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
                ...customEvents,
                ...fixedOfficialEvents
            ].map(parseEvents(currentYear))
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

    render() {
        return (
            <div>
                <div className="Calendar__wrapper">
                    <BigCalendar
                        selectable
                        popup
                        timeslots={1}
                        step={3600}
                        events={this.state.events}
                        onNavigate={this.handleNavigate}
                        onSelectSlot={this.handleSelectSlot}
                    />
                </div>
                <div>
                    {
                        this.state.selectedEvents.length ?
                            <ul>
                                {
                                    this.state.selectedEvents.map(event => (
                                            <li>
                                                <h3>{event.title}</h3>
                                                <p>{event.payload}</p>
                                            </li>
                                        )
                                    )
                                }
                            </ul> : null
                    }
                </div>
            </div>
        )
    }
}