import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import {renderTextField, renderTextareaField} from '../../shared-utils/form-static-controls-factory'
import {removeEvent} from "../../state/custom-events"
import DetailedItemToolbar from '../../shared-components/DetailedItemToolbar/DetailedItemToolbar'

import {Wrapper} from '../../styled-components/miscellaneous-components'

class DetailedEvent extends React.Component {
    handleDeleteEventClick = () => this.props.removeEvent(this.props.item.id)

    getEventDetail = ({label, content}) => (label !== 'Description' ? renderTextField : renderTextareaField)
        .call(null, label, content)

    render() {
        const {item: event} = this.props
        const eventDetails = [
            {
                label: 'Date',
                content: moment(event.date).format("Do MMMM [(tracked since] YYYY)")
            },
            {
                label: 'Title',
                content: event.title
            },
            {
                label: 'Description',
                content: event.payload
            }
        ].map(detailData => this.getEventDetail(detailData))

        return (
            <Wrapper>
                {eventDetails}

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
