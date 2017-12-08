import React from 'react'
import ReadOnlyEvent from './ReadOnlyEvent'
import EditableEvent from './EditableEvent'
import EditEventForm from './EditEventForm'

export default class Event extends React.Component {
    state = {
        isEdited: false
    }
    handleEditEventClick = event => {
        const target = event.currentTarget
        const eventId = +target.dataset.eventId

        console.log('You want to edit event with id:' + eventId)

        this.setState({
            isEdited: true
        })
    }

    handleCancelClick = event => {
        const target = event.currentTarget
        const eventId = +target.dataset.eventId

        console.log('You want to cancel editing event with id:' + eventId)

        this.setState({
            isEdited: false
        })
    }

    render() {
        const {event} = this.props

        return (
            event.type === 'custom' ?
                (this.state.isEdited ?
                        <EditEventForm
                            {...this.props}
                            onCancelClick={this.handleCancelClick}
                        /> :
                        <EditableEvent
                            {...this.props}
                            onEditEventClick={this.handleEditEventClick}
                        />
                )
                :
                <ReadOnlyEvent {...this.props}/>
        )
    }
}