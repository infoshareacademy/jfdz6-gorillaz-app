import React from 'react'
import {Glyphicon} from 'react-bootstrap'

import EventsList from '../EventsList/EventsList'

import {NoDataContainer, NoDataInfo, Header} from '../../styled-components/typography-components'

const EventsTable = props => {
    const {eventsName, icon, events, eventViewComponent, marker} = props

    return (
        <div>
            <Header>
                <Glyphicon glyph={icon}/>{eventsName}
            </Header>

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
