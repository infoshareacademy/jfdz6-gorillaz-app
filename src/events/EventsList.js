import React from 'react'

import ReadOnlyEvent from './ReadOnlyEvent'
import EditableEvent from './EditableEvent'

const EventsList = (props) => {
    const {events, selectedDate} = props

    return (
        <div>
            <h2>Holidays for {selectedDate.toDateString()}</h2>
            <ul>
                {
                    events.map(event => (
                            <li key={event.id}>
                                {
                                    event.type === 'custom' ?
                                        <EditableEvent
                                            event={event}
                                            selectedDate={selectedDate}
                                        /> :
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
