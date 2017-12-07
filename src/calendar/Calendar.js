import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import './Calendar.css'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

export class Calendar extends React.Component {
    render() {
        return (
            <div className="Calendar__wrapper">
                <BigCalendar
                    events={[]}
                />
            </div>
        )
    }
}