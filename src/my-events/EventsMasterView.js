import React from 'react'
import {Button} from 'react-bootstrap'

const EventsMasterView = (props) => {
    const {events, onEventClick} = props

    return (
        <ul>
            {
                events.map(event => (
                        <li key={event.id}>
                            <h3>Date: {event.date.slice(5)}</h3>
                            <h5>Title: {event.title}</h5>
                            <Button
                                onClick={onEventClick}
                                data-event-id={event.id}
                            >
                                See more..
                            </Button>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default EventsMasterView