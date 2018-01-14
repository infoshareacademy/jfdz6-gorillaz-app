import React from 'react'
import moment from 'moment'

import {PreviewHeader, PreviewParagraph} from '../../styled-components/master-detail-components'

const PreviewEvent = props => {
    const {item: event} = props
    const shortMonth = moment(event.date).format("MMM")

    return (
        <div>
            <PreviewHeader>{event.title}</PreviewHeader>

            <PreviewParagraph>
                {event.date.slice(-2)}
                {' '}
                {shortMonth}
                {' | '}
                {`${event.payload.slice(0, 10)}...`}
            </PreviewParagraph>
        </div>
    )
}

export default PreviewEvent
