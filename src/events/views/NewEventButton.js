import React from 'react'
import {connect} from 'react-redux'

import {add} from "../../state/custom-events"
import ModalButton from '../../ModalButton'
import getEventForm from '../form/event-form-factory'

class NewEventButton extends React.Component {
    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
    }

    render() {
        const initialDate = this.props.selectedDate || new Date()
        const parsedDate =
            [
                initialDate.getFullYear(),
                ('0' + (initialDate.getMonth() + 1)).slice(-2),
                ('0' + initialDate.getDate()).slice(-2)
            ]
                .join('-')
        const NewEventForm = getEventForm('newEventForm', 2000)

        return (
            <ModalButton
                buttonName="Add event"
                modalHeader="Add new event"
            >
                <NewEventForm
                    onSubmit={this.handleSubmit}
                    initialValues={{date: parsedDate}}
                />
            </ModalButton>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addEvent: (newEvent) => dispatch(add(newEvent))
})

export default connect(
    null,
    mapDispatchToProps
)(NewEventButton)
