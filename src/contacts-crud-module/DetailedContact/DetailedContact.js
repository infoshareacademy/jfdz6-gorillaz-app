import React from 'react'

import {renderTextField, renderTextareaField} from '../../shared-utils/form-static-controls-factory'

import {Wrapper} from '../../styled-components/miscellaneous-components'

class DetailedContact extends React.Component {
    getLabelFromObjectKey = key => key.split(/(?=[A-Z])/)
        .map((v, i) => i ? v.toLowerCase() : v.charAt(0).toUpperCase() + v.slice(1)).join(' ')

    getContactDetail = (contact, detailKey) => (detailKey !== 'notes' ? renderTextField : renderTextareaField)
        .call(null, this.getLabelFromObjectKey(detailKey), contact[detailKey])

    render() {
        const {item: contact} = this.props
        const contactDetails = ['firstName', 'lastName', 'email', 'sex', 'notes']
            .map(detailKey => this.getContactDetail(contact, detailKey))

        return <Wrapper maxWidth="380px">{contactDetails}</Wrapper>
    }
}

export default DetailedContact