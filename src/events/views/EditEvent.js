import React from 'react'
import {connect} from 'react-redux'

import {addEvent, removeEvent} from "../../state/custom-events"
import getEventForm from '../form/event-form-factory'

class EditEvent extends React.Component {
    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
        this.props.removeEvent(this.props.item.id)
    }

    render() {
        const {item} = this.props
        const EditEventForm = getEventForm('editEventForm' + item.id)

        return (
            <EditEventForm
                onSubmit={this.handleSubmit}
                initialValues={{...item}}
                cancelButton ={this.props.children}
            />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addEvent: (newEvent) => dispatch(addEvent(newEvent)),
    removeEvent: (eventId) => dispatch(removeEvent(eventId))
})

export default connect(
    null,
    mapDispatchToProps
)(EditEvent)