import React from 'react'
import {connect} from 'react-redux'
import {
    Button,
    ButtonToolbar
} from 'react-bootstrap'

import {add, remove} from "../../state/custom-events"

class DetailedEvent extends React.Component {
    handleDeleteEventClick = () => {
        this.props.removeEvent(this.props.event.id)
    }

    render() {
        const {event} = this.props

        return (
            <div>
                <h2>Event details</h2>
                <h3>Title: {event.title}</h3>
                <h5>Date {event.date}</h5>
                <p>Description: {event.payload}</p>

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
    addEvent: (newEvent) => dispatch(add(newEvent)),
    removeEvent: (eventId) => dispatch(remove(eventId))
})

export default connect(
    null,
    mapDispatchToProps
)(DetailedEvent)
