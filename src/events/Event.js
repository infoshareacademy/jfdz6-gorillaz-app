import React from 'react'

export default Event = (props) => {
    const event = props.event

    return (
        <div>
            <h2>Date: {event.start.toDateString()}</h2>
            <h4>Title: {event.title}</h4>
            <p>Description: {event.payload}</p>
        </div>
    )
}