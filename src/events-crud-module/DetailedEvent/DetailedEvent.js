import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {FormGroup, ControlLabel, FormControl, Glyphicon} from 'react-bootstrap'

import {removeEvent} from "../../state/custom-events"

import {DetailedParagraph, DetailedDescription} from '../../styled-components/master-detail-components'
import {RectButton} from '../../styled-components/button-components'
import './DetailedEvent.css'

class DetailedEvent extends React.Component {
    handleDeleteEventClick = () => this.props.removeEvent(this.props.item.id)

    render() {
        const {item} = this.props
        const eventsDate = moment(item.date)

        return (
            <div className="DetailedEvent__wrapper">
                <FormGroup>
                    <ControlLabel bsClass="control-label-custom">Date</ControlLabel>

                    <FormControl.Static>
                        <DetailedParagraph>
                            {eventsDate.format("Do MMMM [(tracked since] YYYY)")}
                        </DetailedParagraph>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel bsClass="control-label-custom">Title</ControlLabel>

                    <FormControl.Static>
                        <DetailedParagraph>{item.title}</DetailedParagraph>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel bsClass="control-label-custom">Description</ControlLabel>

                    <FormControl.Static>
                        <DetailedDescription>
                        {item.payload}
                        </DetailedDescription>
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

const mapDispatchToProps = dispatch => ({removeEvent: (eventId) => dispatch(removeEvent(eventId))})

export default connect(
    null,
    mapDispatchToProps
)(DetailedEvent)
