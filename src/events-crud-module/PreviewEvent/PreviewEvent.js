import React from 'react'
import moment from 'moment'

import './PreviewEvent.css'

const PreviewEvent = props => {
    const {item} = props
    const shortMonth = moment(item.date).format("MMM")

    return (
        <div className="PreviewEvent__wrapper">
            <h4 className="PreviewEvent__header">
                {item.title}
            </h4>

            <p className="PreviewEvent__paragraph">
                {item.date.slice(-2)}
                {' '}
                {shortMonth}
                {' | '}
                {`${item.payload.slice(0, 10)}...`}
            </p>
        </div>
    )
}

export default PreviewEvent
