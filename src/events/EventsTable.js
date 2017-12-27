import React from 'react'
import {Glyphicon} from 'react-bootstrap'

import EventsList from './EventsList'
import './EventsTable.css'

const EventsTable = props => {
    const {eventsName,icon, events, eventViewComponent} = props

    return (
        <div>
            <h3 className="EventsTable__header">
                <Glyphicon
                    glyph={icon}
                    className="EventsTable__logo"
                />
                {' '}
                {eventsName}
            </h3>

            <EventsList
                events={events}
                eventViewComponent={eventViewComponent}
            />
        </div>
    )
}

export default EventsTable
