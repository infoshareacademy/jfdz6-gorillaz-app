import React from 'react'

import './EventsList.css'

const EventsList = props => {
    const {events, marker} = props
    const EventViewComponent = props.eventViewComponent

    return (
        <ul className="EventsList__wrapper">
            {
                events.map(event => (
                        <li
                            className="EventsList__item"
                            key={event.id}
                        >
                            <span className="EventsList__marker">{marker}</span>
                            <EventViewComponent event={event}/>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default EventsList
