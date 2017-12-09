import React from 'react'
import {connect} from 'react-redux'

import {add} from "../state/custom-events"
import EventForm from './EventForm'
import ModalButton from '../ModalButton'

class NewEvent extends React.Component {
    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
    }

    render() {
        const {selectedDate} = this.props
        const initialDate = selectedDate || new Date()
        const parsedDate =
            [
                initialDate.getFullYear(),
                ('0' + (initialDate.getMonth() + 1)).slice(-2),
                ('0' + initialDate.getDate()).slice(-2)
            ]
                .join('-')

        return (
            <ModalButton
                buttonName="Add event"
                modalHeader="Add new event"
            >
                <EventForm
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
)(NewEvent)
