import React from 'react'

import ReadOnlyEvent from './ReadOnlyEvent'
import EditableEvent from './EditableEvent'

const EventsList = (props) => {
    const {events, selectedDate} = props

    return (
        <div>
            <h2>Holidays for {selectedDate}</h2>
            <ul>
                {
                    events.map(event => (
                            <li key={event.id}>
                                {
                                    event.type === 'custom' ?
                                        <EditableEvent event={event}/> :
                                        <ReadOnlyEvent event={event}/>
                                }
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default EventsList
