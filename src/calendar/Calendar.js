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
        currentYear: (new Date()).getFullYear()
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

    render() {
        return (
            <div className="Calendar__wrapper">
                <BigCalendar
                    events={this.state.events}
                    popup
                    onNavigate={this.handleNavigate}
                />
            </div>
        )
    }
}