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
        events: [
            ...customEvents,
            ...fixedOfficialEvents
        ].map(parseEvents)
    }

    render() {
        console.log(this.state.events)
        return (
            <div className="Calendar__wrapper">
                <BigCalendar
                    events={this.state.events}
                />
            </div>
        )
    }
}