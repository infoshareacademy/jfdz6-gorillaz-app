import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {addEvent} from "../../state/custom-events"
import getEventForm from '../../shared-utils/events/event-form-factory'
import ModalButton from '../../shared-components/ModalButton/ModalButton'

class NewEventButton extends React.Component {
    handleSubmit = newEvent => this.props.addEvent(newEvent)

    render() {
        const currentDate = moment().format("YYYY-MM-DD")
        const NewEventForm = getEventForm('newEventForm', 2000)

        return (
            <ModalButton
                buttonType="AddEventButton"
                buttonName="+"
                modalGlyph="plus"
                modalTitle="Add new event"
            >
                <NewEventForm
                    onSubmit={this.handleSubmit}
                    initialValues={{date: currentDate}}
                />
            </ModalButton>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addEvent: (newEvent) => dispatch(addEvent(newEvent)),
})

export default connect(
    null,
    mapDispatchToProps
)(NewEventButton)
