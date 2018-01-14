import React from 'react'
import moment from 'moment'

import './ListItemEvent.css'

const ListItemEvent = props => {
    const {event} = props
    const eventDate = moment(event.start)

    return (
        <div>
            <h4 className="ListItemEvent__header">{event.title}</h4>
            <h5 className="ListItemEvent__header ListItemEvent__subheader">
                {eventDate.date()}
                {' '}
                {eventDate.format("MMMM")}
            </h5>
            <p className="ListItemEvent__paragraph">{event.payload}</p>
        </div>
    )
}

export default ListItemEvent
