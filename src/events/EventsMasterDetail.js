import React from 'react'

import MasterDetail from '../generic-master-detail/MasterDetail'
import NewEvent from './views/NewEvent'
import PreviewEvent from './views/PreviewEvent'
import DetailedEvent from './views/DetailedEvent'
import EditEvent from './views/EditEvent'

const EventsMasterDetail = props => {

    return (
        <MasterDetail
            NewItem={NewEvent}
            PreviewItem={PreviewEvent}
            DetailedItem={DetailedEvent}
            EditItem={EditEvent}
        />
    )
}

export default EventsMasterDetail
