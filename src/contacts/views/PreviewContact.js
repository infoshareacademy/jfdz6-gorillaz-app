import React from 'react'

const PreviewContact = props => {
    const {event} = props

    return (
        <div>
            <h3>{`${event.firstName.charAt(0)}. ${event.lastName}`}</h3>
        </div>
    )
}

export default PreviewContact
