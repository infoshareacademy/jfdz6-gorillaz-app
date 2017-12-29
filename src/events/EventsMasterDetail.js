import React from 'react'
import {connect} from 'react-redux'

import {
    subscribeCustomEvents,
    unsubscribeCustomEvents
} from '../state/custom-events'
import MasterDetail from '../generic-master-detail/MasterDetail'
import NewEvent from './views/NewEvent'
import PreviewEvent from './views/PreviewEvent'
import DetailedEvent from './views/DetailedEvent'
import EditEvent from './views/EditEvent'

class EventsMasterDetail extends React.Component {
    componentDidMount = () => {
        this.props.subscribeCustomEvents()
    }

    componentWillUnmount = () => {
        this.props.unsubscribeCustomEvents()
    }

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
                <p>Getting data...</p>
        )
    }
}

const mapStateToProps = state => ({
    customEvents: state.customEvents
})

const mapDispatchToProps = dispatch => ({
    subscribeCustomEvents: () => dispatch(subscribeCustomEvents()),
    unsubscribeCustomEvents: () => dispatch(unsubscribeCustomEvents())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsMasterDetail)
