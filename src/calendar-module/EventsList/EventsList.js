import React from 'react'
import {Glyphicon} from 'react-bootstrap'

import './EventsList.css'

const EventsList = props => {
    const {events, marker, EventViewComponent} = props

    return (
        <ul className="EventsList__wrapper">
            {
                events.map(event => (
                        <li
                            className="EventsList__item"
                            key={event.id}
                        >
                            <span className="EventsList__marker"><Glyphicon glyph={marker}/></span>
                            <EventViewComponent event={event}/>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default EventsList
