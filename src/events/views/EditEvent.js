import React from 'react'
import {connect} from 'react-redux'

import {add, remove} from "../../state/custom-events"
import getEventForm from '../form/event-form-factory'

class EditEvent extends React.Component {
    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
        this.props.removeEvent(this.props.event.id)
    }

    render() {
        const {event} = this.props
        const EditEventForm = getEventForm('editEventForm' + event.id)

        return (
            <EditEventForm
                onSubmit={this.handleSubmit}
                initialValues={{...event}}
                cancelButton ={this.props.children}
            />
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
)(EditEvent)