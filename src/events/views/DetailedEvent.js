import React from 'react'
import {connect} from 'react-redux'
import {
    Button,
    ButtonToolbar
} from 'react-bootstrap'

import {addEvent, removeEvent} from "../../state/custom-events"

class DetailedEvent extends React.Component {
    handleDeleteEventClick = () => {
        this.props.removeEvent(this.props.item.id)
    }

    render() {
        const {item} = this.props

        return (
            <div>
                <h2>Event details</h2>
                <h3>Title: {item.title}</h3>
                <h5>Date {item.date}</h5>
                <p>Description: {item.payload}</p>

                <ButtonToolbar>
                    {this.props.children}

                    <Button onClick={this.handleDeleteEventClick}>
                        Delete
                    </Button>
                </ButtonToolbar>
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
)(DetailedEvent)
