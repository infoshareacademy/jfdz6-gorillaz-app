import React from 'react'
import moment from 'moment'

import {renderTextField, renderTextareaField} from '../../shared-utils/form-static-controls-factory'

import {Wrapper} from '../../styled-components/miscellaneous-components'

class DetailedEvent extends React.Component {
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

        return <Wrapper>{eventDetails}</Wrapper>
    }
}

export default DetailedEvent
