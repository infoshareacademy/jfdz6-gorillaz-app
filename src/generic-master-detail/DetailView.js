import React from 'react'
import {Button} from 'react-bootstrap'

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
        const {event, DetailedItem, EditItem} = this.props

        return (
            this.state.isBeingEdited ?
                <div>
                    <h2>Edit selected event</h2>
                    <EditItem event={event}>
                        <Button onClick={this.handleCancelClick}>Cancel</Button>
                    </EditItem>
                </div> :

                <div>
                    <DetailedItem event={event}>
                        <Button onClick={this.handleEditEventClick}>Edit</Button>
                    </DetailedItem>
                </div>
        )
    }
}