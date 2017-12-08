import React from 'react'
import {Button} from 'react-bootstrap'

export default class EditableEvent extends React.Component {
    handleDeleteEventClick = event => {
        const target = event.currentTarget
        const eventId = +target.dataset.eventId

        console.log('You want to delete event with id:' + eventId)
    }

    render() {
        const {event, isSingleDayListEvent, onEditEventClick} = this.props

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
                    onClick={onEditEventClick}
                    data-event-id={event.id}
                >
                    Edit
                </Button>
                <Button
                    onClick={this.handleDeleteEventClick}
                    data-event-id={event.id}
                >
                    Delete
                </Button>
            </div>
        )
    }

}