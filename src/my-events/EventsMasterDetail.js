import React from 'react'
import {connect} from 'react-redux'

import EventsMasterView from './EventsMasterView'
import EventDetailView from './EventDetailView'
import NewEvent from '../events/NewEventButton'

class EventsMasterDetail extends React.Component {
    state = {
        selectedEvent: null
    }

    componentWillReceiveProps = () => {
        this.setState({
            selectedEvent: null
        })
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
            <div>
                <h2>Your custom events</h2>
                <EventsMasterView
                    events={this.props.events}
                    onEventClick={this.handleEventClick}
                />

                <h2>Add new event</h2>
                <NewEvent/>

                {
                    this.state.selectedEvent ?
                        <EventDetailView event={this.state.selectedEvent}/> :
                        <h2>Select event from the list</h2>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.customEvents
})

export default connect(
    mapStateToProps
)(EventsMasterDetail)