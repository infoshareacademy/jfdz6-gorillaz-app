import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

import {removeEvent} from "../../state/custom-events"
import DetailedItemToolbar from '../../shared-components/DetailedItemToolbar/DetailedItemToolbar'

import {Wrapper} from '../../styled-components/miscellaneous-components'
import {DetailedParagraph, DetailedDescription} from '../../styled-components/master-detail-components'

class DetailedEvent extends React.Component {
    handleDeleteEventClick = () => this.props.removeEvent(this.props.item.id)

    render() {
        const {item} = this.props
        const eventsDate = moment(item.date)

        return (
            <Wrapper>
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

                <DetailedItemToolbar
                    editItemButton={this.props.children}
                    onDeleteItemClick={this.handleDeleteEventClick}
                />
            </Wrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({removeEvent: (eventId) => dispatch(removeEvent(eventId))})

export default connect(
    null,
    mapDispatchToProps
)(DetailedEvent)
