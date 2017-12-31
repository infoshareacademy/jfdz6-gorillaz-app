import React from 'react'
import {connect} from 'react-redux'
import {Glyphicon} from 'react-bootstrap'

import './EditableEvent.css'
import {RoundButton} from '../../styled-components/button-components'
import {addEvent, removeEvent} from "../../state/custom-events"
import getEventForm from '../../shared-utils/events/event-form-factory'
import ModalButton from '../../shared-components/ModalButton/ModalButton'
import ListItemEvent from '../ListItemEvent/ListItemEvent'

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

                <div className="EditableEvent__toolbar">
                    <ModalButton
                        buttonProps={{
                            bgc: '#4caf50',
                            radius: '20px'
                        }}
                        buttonGlyph="pencil"
                        modalGlyph="wrench"
                        modalTitle="Edit your event"
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

                    <RoundButton
                        bgc={'#f44336'}
                        radius={'20px'}
                        onClick={this.handleDeleteEventClick}
                    >
                        <Glyphicon glyph="trash"/>
                    </RoundButton>
                </div>
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