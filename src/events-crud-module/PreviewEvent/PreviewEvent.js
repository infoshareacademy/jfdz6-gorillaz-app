import React from 'react'
import moment from 'moment'

import {PreviewHeader, PreviewParagraph} from '../../styled-components/master-detail-components'

const PreviewEvent = props => {
    const {item} = props
    const shortMonth = moment(item.date).format("MMM")

    return (
        <div>
            <PreviewHeader>{item.title}</PreviewHeader>

            <PreviewParagraph>
                {item.date.slice(-2)}
                {' '}
                {shortMonth}
                {' | '}
                {`${item.payload.slice(0, 10)}...`}
            </PreviewParagraph>
        </div>
    )
}

export default PreviewEvent
