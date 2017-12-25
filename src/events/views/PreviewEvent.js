import React from 'react'

import {months} from '../../search-bar/date-data'
import './PreviewEvent.css'

const PreviewEvent = props => {
    const {item} = props

    return (
        <div>
            <h4 className="PreviewEvent__title">
                {item.title}
            </h4>
            <p className="PreviewEvent__date">
                {item.date.slice(8)}
                {' '}
                {(months.find(month => month.value === +item.date.slice(5, 7))).name.slice(0, 3) + '.'}
                {' | '}
                {item.payload.slice(0, 10) + '...'}
            </p>
        </div>
    )
}

export default PreviewEvent
