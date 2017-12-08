import React from 'react'
import {Button} from 'react-bootstrap'

export default class EditEventForm extends React.Component {
    handleSaveEventClick = event => {
        const target = event.currentTarget
        const eventId = +target.dataset.eventId

        console.log('You want to save event with id:' + eventId)
    }

    render() {
        const {event, isSingleDayListEvent, onCancelClick} = this.props

        return (
            <div>
                <h3>Title: {event.title}</h3>
                {
                    isSingleDayListEvent ?
                        null:
                        <h6>Date: {event.start.toDateString()}</h6>
                }
                <p>Description: {event.payload}</p>
                <Button
                    onClick={this.handleSaveEventClick}
                    data-event-id={event.id}
                >
                    Save
                </Button>
                <Button
                    onClick={onCancelClick}
                    data-event-id={event.id}
                >
                    Cancel
                </Button>
            </div>
        )
    }

}