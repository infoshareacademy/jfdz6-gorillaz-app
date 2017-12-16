import React from 'react'
import {connect} from 'react-redux'

import MasterDetail from '../generic-master-detail/MasterDetail'
import NewEvent from './views/NewEvent'
import PreviewEvent from './views/PreviewEvent'
import DetailedEvent from './views/DetailedEvent'
import EditEvent from './views/EditEvent'

const EventsMasterDetail = props => {

    return (
        <MasterDetail
            items={props.items}
            name={'event'}
            NewItem={NewEvent}
            PreviewItem={PreviewEvent}
            DetailedItem={DetailedEvent}
            EditItem={EditEvent}
        />
    )
}

const mapStateToProps = state => ({
    items: state.customEvents
})

export default connect(
    mapStateToProps
)(EventsMasterDetail)
