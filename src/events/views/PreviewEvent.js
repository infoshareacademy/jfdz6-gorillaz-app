import React from 'react'

const PreviewEvent = props => {
    const {item} = props

    return (
        <div>
            <h3>Date: {item.date.slice(5)}</h3>
            <h5>Title: {item.title}</h5>
        </div>
    )
}

export default PreviewEvent
