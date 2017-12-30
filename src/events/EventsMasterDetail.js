import React from 'react'
import {connect} from 'react-redux'

import MasterDetail from '../generic-master-detail/MasterDetail'
import NewEvent from './views/NewEvent'
import PreviewEvent from './views/PreviewEvent'
import DetailedEvent from './views/DetailedEvent'
import EditEvent from './views/EditEvent'

import Spinner from '../shared-components/Spinner'

class EventsMasterDetail extends React.Component {
    render() {
        const isDataRetrieved = !this.props.customEvents.getting

        return (
            isDataRetrieved ?
                <MasterDetail
                    items={this.props.customEvents.data || []}
                    name={'event'}
                    NewItem={NewEvent}
                    PreviewItem={PreviewEvent}
                    DetailedItem={DetailedEvent}
                    EditItem={EditEvent}
                /> :
               <Spinner/>
        )
    }
}

const mapStateToProps = state => ({
    customEvents: state.customEvents
})

export default connect(
    mapStateToProps
)(EventsMasterDetail)
