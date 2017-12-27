import React from 'react'
import moment from 'moment'

import './ReadOnlyEvent.css'

const ReadOnlyEvent = props => {
    const {event} = props
    const eventDate = moment(event.start)

    return (
        <div>
            <h4 className="ReadOnlyEvent__header">{event.title}</h4>
            <h5 className="ReadOnlyEvent__header ReadOnlyEvent__subheader">
                {eventDate.date()}
                {' '}
                {eventDate.format("MMMM")}
            </h5>
            <p className="ReadOnlyEvent__paragraph">{event.payload}</p>
        </div>
    )
}

export default ReadOnlyEvent