import React from 'react'

import Event from './Event'

const EventsList = (props) => {
    const events = props.events

    return (
        <ul>
            {
                events.map(event => (
                        <li>
                            <Event event={event}/>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default EventsList