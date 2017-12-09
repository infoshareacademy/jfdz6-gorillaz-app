import React from 'react'
import { connect } from 'react-redux'

import EventsMasterView from './EventsMasterView'

class EventsMasterDetail extends React.Component {
    state = {
        selectedEvent: null
    }

    handleEventClick = (event) => {
        const target = event.currentTarget
        const selectedEventId = +target.dataset.eventId
        const selectedEvent = this.props.events.find(event => event.id === selectedEventId)

        this.setState({
            selectedEvent
        })
    }

    render() {
        return (
            <EventsMasterView
                events={this.props.events}
                onEventClick={this.handleEventClick}
            />
        )
    }
}

const mapStateToProps = state => ({
    events: state.customEvents
})

export default connect(
    mapStateToProps
)(EventsMasterDetail)