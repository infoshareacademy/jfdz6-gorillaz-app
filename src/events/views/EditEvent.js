import React from 'react'
import {connect} from 'react-redux'

import {updateEvent} from "../../state/custom-events"
import getEventForm from '../form/event-form-factory'

class EditEvent extends React.Component {
    handleSubmit = newEvent => {
        this.props.updateEvent(newEvent, this.props.item.id)
    }

    render() {
        const {item} = this.props
        const EditEventForm = getEventForm('editEventForm' + item.id)

        return (
            <EditEventForm
                onSubmit={this.handleSubmit}
                initialValues={{
                    date: item.date,
                    title: item.title,
                    payload: item.payload
                }}
                cancelButton ={this.props.children}
            />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateEvent: (newEvent, eventId) => dispatch(updateEvent(newEvent, eventId))
})

export default connect(
    null,
    mapDispatchToProps
)(EditEvent)