import React from 'react'
import {Button} from 'react-bootstrap'

import DetailedEvent from '../views/DetailedEvent'
import EditEvent from '../views/EditEvent'

export default class EventDetailView extends React.Component {
    state = {
        isBeingEdited: false
    }

    componentWillReceiveProps = () => {
        this.setState({
            isBeingEdited: false
        })
    }

    handleEditEventClick = () => (
        this.setState({
            isBeingEdited: true
        })
    )

    handleCancelClick = () => (
        this.setState({
            isBeingEdited: false
        })
    )

    render() {
        const {event} = this.props

        return (
            this.state.isBeingEdited ?
                <div>
                    <h2>Edit selected event</h2>
                    <EditEvent event={event}>
                        <Button onClick={this.handleCancelClick}>Cancel</Button>
                    </EditEvent>
                </div> :

                <div>
                    <DetailedEvent event={event}>
                        <Button onClick={this.handleEditEventClick}>Edit</Button>
                    </DetailedEvent>
                </div>
        )
    }
}