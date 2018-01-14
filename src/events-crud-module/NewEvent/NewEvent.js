import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {addEvent} from "../../state/custom-events"
import getEventForm from '../../shared-utils/events/event-form-factory'

class NewEvent extends React.Component {
    handleSubmit = newEvent => this.props.addEvent(newEvent)

    render() {
        const currentDate = moment().format("YYYY-MM-DD")
        const NewEventForm = getEventForm('newEventForm', 2000)

        return (
                <NewEventForm
                    onSubmit={this.handleSubmit}
                    initialValues={{date: currentDate}}
                />
        )
    }
}

const mapDispatchToProps = dispatch => ({addEvent: newEvent => dispatch(addEvent(newEvent))})

export default connect(
    null,
    mapDispatchToProps
)(NewEvent)
