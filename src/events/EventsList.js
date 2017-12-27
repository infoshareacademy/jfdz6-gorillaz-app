import React from 'react'

const EventsList = props => {
    const {events} = props
    const EventViewComponent = props.eventViewComponent

    return (
        <ul>
            {
                events.map(event => (
                        <li key={event.id}>
                            <EventViewComponent event={event}/>
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default EventsList
