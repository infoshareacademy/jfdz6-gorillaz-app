import React from 'react'

const ReadOnlyEvent = (props) => {
    const event = props.event

    return (
        <div>
            <h3>Title: {event.title}</h3>
            {
                props.isSingleDayListEvent ?
                    null:
                    <h6>Date: {event.start.toDateString()}</h6>
            }
            <p>Description: {event.payload}</p>
        </div>
    )
}

export default ReadOnlyEvent