import React from 'react'
import {connect} from 'react-redux'
import {
    Button,
    ButtonToolbar
} from 'react-bootstrap'

import {add, remove} from "../../state/custom-events"
import EventForm from '../form/EventForm'
import ModalButton from '../../ModalButton'

class EventDetailView extends React.Component {
    handleDeleteEventClick = () => {
        this.props.removeEvent(this.props.event.id)
    }

    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
        this.props.removeEvent(this.props.event.id)
    }

    render() {
        const {event} = this.props

        return (
            <div>
                <h3>Title: {event.title}</h3>
                <h5>Date {event.date}</h5>
                <p>Description: {event.payload}</p>

                <ButtonToolbar>
                    <ModalButton
                        buttonName="Edit"
                        modalHeader="Edit your event"
                    >
                        <EventForm
                            onSubmit={this.handleSubmit}
                            initialValues={{...event}}
                        />
                    </ModalButton>

                    <Button onClick={this.handleDeleteEventClick}>
                        Delete
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addEvent: (newEvent) => dispatch(add(newEvent)),
    removeEvent: (eventId) => dispatch(remove(eventId))
})

export default connect(
    null,
    mapDispatchToProps
)(EventDetailView)


