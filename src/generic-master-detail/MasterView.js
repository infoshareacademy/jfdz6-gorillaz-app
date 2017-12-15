import React from 'react'
import {Button} from 'react-bootstrap'

const EventsMasterView = props => {
    const {events, PreviewItem, onEventClick} = props

    return (
        <ul>
            {
                events.map(event => (
                        <li key={event.id}>
                            <PreviewItem event={event}/>

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