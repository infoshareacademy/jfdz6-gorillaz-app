import React from 'react'
import {connect} from 'react-redux'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Glyphicon
} from 'react-bootstrap'

import {addEvent, removeEvent} from "../../state/custom-events"
import {months} from '../../search-bar/date-data'
import {RectButton} from '../../styled-components/button-components'
import './DetailedEvent.css'

class DetailedEvent extends React.Component {
    handleDeleteEventClick = () => {
        this.props.removeEvent(this.props.item.id)
    }

    render() {
        const {item} = this.props
        const eventsMonth = months.find(month => month.value === +item.date.slice(5, 7)).name
        const eventSince = item.date.slice(0, 4)

        return (
            <div className="DetailedEvent__wrapper">
                <FormGroup>
                    <ControlLabel
                        bsClass="control-label-detailed-event"
                    >
                        Date
                    </ControlLabel>

                    <FormControl.Static>
                        <span className="DetailedEvent__paragraph">
                            {item.date.slice(-2)}
                            {' '}
                            {eventsMonth}
                            {` (tracked since ${eventSince})`}
                        </span>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel
                        bsClass="control-label-detailed-event"
                    >
                        Title
                    </ControlLabel>

                    <FormControl.Static>
                        <span className="DetailedEvent__paragraph">
                        {item.title}
                        </span>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel
                        bsClass="control-label-detailed-event"
                    >
                        Description
                    </ControlLabel>

                    <FormControl.Static>
                        <span className="DetailedEvent__paragraph DetailedEvent__paragraph--justified">
                        {item.payload}
                        </span>
                    </FormControl.Static>
                </FormGroup>

                <div className="DetailedEvent__toolbar">
                    {this.props.children}

                    <RectButton
                        bgc={'#f44336'}
                        onClick={this.handleDeleteEventClick}
                    >
                        <Glyphicon glyph="trash"/>
                        {' '}
                        Delete
                    </RectButton>
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
)(DetailedEvent)

