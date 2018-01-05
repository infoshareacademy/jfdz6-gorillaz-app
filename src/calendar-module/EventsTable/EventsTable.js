import React from 'react'
import {Glyphicon} from 'react-bootstrap'

import EventsList from '../EventsList/EventsList'

import {NoDataContainer, NoDataInfo} from '../../styled-components/typography-components'
import './EventsTable.css'

const EventsTable = props => {
    const {eventsName, icon, events, eventViewComponent, marker} = props

    return (
        <div>
            <h3 className="EventsTable__header">
                <Glyphicon
                    glyph={icon}
                    className="EventsTable__logo"
                />
                {' '}
                {eventsName}
            </h3>

            {
                events.length ?
                    <EventsList
                        events={events}
                        eventViewComponent={eventViewComponent}
                        marker={marker}
                    /> :
                    <NoDataContainer>
                        <NoDataInfo>
                            No items for the selected range
                        </NoDataInfo>
                    </NoDataContainer>
            }
        </div>
    )
}

export default EventsTable
