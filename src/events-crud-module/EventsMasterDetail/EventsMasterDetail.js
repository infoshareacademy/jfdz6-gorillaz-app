import React from 'react'
import {connect} from 'react-redux'

import {sortRawEventsAscending} from '../_helpers/sorting'
import MasterDetail from '../../shared-components/MasterDetail/MasterDetail'
import NewEvent from '../NewEvent/NewEvent'
import PreviewEvent from '../PreviewEvent/PreviewEvent'
import DetailedEvent from '../DetailedEvent/DetailedEvent'
import EditEvent from '../EditEvent/EditEvent'
import Spinner from '../../shared-components/Spinner/Spinner'

class EventsMasterDetail extends React.Component {
    render() {
        const isDataRetrieved = !this.props.customEvents.getting
        const rawCustomEvents = this.props.customEvents.data

        return (
            isDataRetrieved ?
                <MasterDetail
                    items={rawCustomEvents && rawCustomEvents.sort(sortRawEventsAscending) || []}
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

const mapStateToProps = state => ({customEvents: state.customEvents})

export default connect(mapStateToProps)(EventsMasterDetail)
