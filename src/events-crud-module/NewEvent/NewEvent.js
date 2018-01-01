import React from 'react'
import {connect} from 'react-redux'

import {addEvent} from "../../state/custom-events"
import getEventForm from '../../shared-utils/events/event-form-factory'

class NewEvent extends React.Component {
    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
    }

    render() {
        const initialDate = this.props.selectedDate || new Date()
        const parsedDate = [
                initialDate.getFullYear(),
                ('0' + (initialDate.getMonth() + 1)).slice(-2),
                ('0' + initialDate.getDate()).slice(-2)
            ].join('-')
        const NewEventForm = getEventForm('newEventForm', 2000)

        return (
                <NewEventForm
                    onSubmit={this.handleSubmit}
                    initialValues={{date: parsedDate}}
                />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addEvent: (newEvent) => dispatch(addEvent(newEvent))
})

export default connect(
    null,
    mapDispatchToProps
)(NewEvent)