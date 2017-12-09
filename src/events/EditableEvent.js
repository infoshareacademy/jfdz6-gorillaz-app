import React from 'react'
import {connect} from 'react-redux'
import {
    Button,
    ButtonToolbar
} from 'react-bootstrap'

import EventForm from './EventForm'
import ModalButton from '../ModalButton'
import {add, remove} from "../state/custom-events"

class EditableEvent extends React.Component {
    handleDeleteEventClick = () => {
        this.props.removeEvent(this.props.event.id)
    }

    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
        this.props.removeEvent(this.props.event.id)
    }

    render() {
        const {event, selectedDate} = this.props
        const initialDate = selectedDate || new Date()
        const parsedDate =
            [
                initialDate.getFullYear(),
                ('0' + (initialDate.getMonth() + 1)).slice(-2),
                ('0' + initialDate.getDate()).slice(-2)
            ]
                .join('-')

        return (
            <div>
                <h3>Title: {event.title}</h3>
                <p>Description: {event.payload}</p>
                <ButtonToolbar>
                    <ModalButton
                        buttonName="Edit"
                        modalHeader="Edit your event"
                    >
                        <EventForm
                            onSubmit={this.handleSubmit}
                            initialValues={
                                {
                                    date: parsedDate,
                                    title: event.title,
                                    payload: event.payload
                                }
                            }
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
    removeEvent: (eventId) => dispatch(remove(eventId)),
    addEvent: (newEvent) => dispatch(add(newEvent))
})

export default connect(
    null,
    mapDispatchToProps
)(EditableEvent)