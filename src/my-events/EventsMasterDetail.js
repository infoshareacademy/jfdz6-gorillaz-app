import React from 'react'
import { connect } from 'react-redux'

import {add} from "../state/custom-events"
import EventsMasterView from './EventsMasterView'
import EventForm from '../events/EventForm'

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

    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
    }

    render() {
        const date = new Date()
        const parsedDate =
            [
                date.getFullYear(),
                ('0' + (date.getMonth() + 1)).slice(-2),
                ('0' + date.getDate()).slice(-2)
            ]
                .join('-')

        return (
            <div>
                <h2>Your custom events</h2>
                <EventsMasterView
                    events={this.props.events}
                    onEventClick={this.handleEventClick}
                />
                <h2>Add new event</h2>
                <EventForm
                    onSubmit={this.handleSubmit}
                    initialValues={{date: parsedDate}}
                />
            </div>

        )
    }
}

const mapStateToProps = state => ({
    events: state.customEvents
})

const mapDispatchToProps = dispatch => ({
    addEvent: (newEvent) => dispatch(add(newEvent))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventsMasterDetail)