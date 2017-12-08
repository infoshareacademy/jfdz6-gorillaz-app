import React from 'react'

const ReadOnlyEvent = (props) => {
    const {event} = props

    return (
        <div>
            <h3>Title: {event.title}</h3>
            <p>Description: {event.payload}</p>
        </div>
    )
}

export default ReadOnlyEvent