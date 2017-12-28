import React from 'react'
import {connect} from 'react-redux'

import {MyButton} from '../../styled-components/button-components'
import {addEvent, removeEvent} from "../../state/custom-events"
import getEventForm from '../form/event-form-factory'
import ModalButton from '../../ModalButton'
import ListItemEvent from './ListItemEvent'

class EditableEvent extends React.Component {
    handleDeleteEventClick = () => {
        this.props.removeEvent(this.props.event.id)
    }

    handleSubmit = newEvent => {
        this.props.addEvent(newEvent)
        this.props.removeEvent(this.props.event.id)
    }

    render() {
        const {event} = this.props
        const EditEventForm = getEventForm('editEventForm' + event.id)

        return (
            <div>
                <ListItemEvent event={event}/>

                    <ModalButton
                        buttonName="Edit"
                        buttonProps={{bgc: '#f44336'}}
                        modalHeader="Edit your event"
                    >
                        <EditEventForm
                            onSubmit={this.handleSubmit}
                            initialValues={{
                                date: event.date,
                                title: event.title,
                                payload: event.payload
                            }}
                        />
                    </ModalButton>

                    <MyButton
                        bgc={'#f44336'}
                        onClick={this.handleDeleteEventClick}
                    >
                        Delete
                    </MyButton>
            </div>
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
)(EditableEvent)