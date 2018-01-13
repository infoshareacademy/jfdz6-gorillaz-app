import React from 'react'
import {connect} from 'react-redux'

import {addEvent, removeEvent} from "../../state/custom-events"
import getEventForm from '../../shared-utils/events/event-form-factory'

class EditEvent extends React.Component {
    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
        this.props.removeEvent(this.props.item.id)
    }

    render() {
        const {item: event} = this.props
        const EditEventForm = getEventForm('editEventForm' + event.id)

        return (
            <EditEventForm
                onSubmit={this.handleSubmit}
                initialValues={{
                    date: event.date,
                    title: event.title,
                    payload: event.payload
                }}
                cancelButton ={this.props.children}
            />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addEvent: newEvent => dispatch(addEvent(newEvent)),
    removeEvent: eventId => dispatch(removeEvent(eventId))
})

export default connect(
    null,
    mapDispatchToProps
)(EditEvent)