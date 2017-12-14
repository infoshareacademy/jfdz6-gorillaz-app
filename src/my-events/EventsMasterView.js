import React from 'react'
import {Button} from 'react-bootstrap'

import PreviewEvent from '../events/views/PreviewEvent'

const EventsMasterView = props => {
    const {events, onEventClick} = props

    return (
        <ul>
            {
                events.map(event => (
                        <li key={event.id}>
                            <PreviewEvent event={event}/>

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