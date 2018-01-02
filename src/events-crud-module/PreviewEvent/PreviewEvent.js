import React from 'react'

import {months} from '../../calendar-module/_helpers/date-data'
import './PreviewEvent.css'

const PreviewEvent = props => {
    const {item} = props
    const shortMonth = (months.find(month => month.value === +item.date.slice(5, 7))).name.slice(0, 3) + '.'

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
