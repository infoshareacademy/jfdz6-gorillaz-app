import React from 'react'
import {connect} from 'react-redux'

import EventForm from './EventForm'
import ModalButton from '../ModalButton'
import {add} from "../state/custom-events"

class NewEvent extends React.Component {
    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
    }

    render() {
        return (
            <ModalButton
                buttonName="Add event"
                modalHeader="Add new event"
            >
                <EventForm onSubmit={this.handleSubmit}/>
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