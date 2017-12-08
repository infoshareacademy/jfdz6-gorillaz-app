import React from 'react'

import Event from './Event'

const EventsList = (props) => {
    const {events} = props

    return (
        <ul>
            {
                events.map(event => (
                        <li key={event.id}>
                            <Event
                                {...props}
                                event={event}
                            />
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default EventsList
