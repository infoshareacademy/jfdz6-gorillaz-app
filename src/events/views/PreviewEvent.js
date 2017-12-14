import React from 'react'

const PreviewEvent = props => {
    const {event} = props

    return (
        <div>
            <h3>Date: {event.date.slice(5)}</h3>
            <h5>Title: {event.title}</h5>
        </div>
    )
}

export default PreviewEvent
