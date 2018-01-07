import React from 'react'

import {PreviewHeader, PreviewParagraph} from '../../styled-components/master-detail-components'

const PreviewContact = props => {
    const {item: contact} = props

    return (
        <div>
            <PreviewHeader>
                {`${contact.firstName.charAt(0)}. ${contact.lastName}`}
            </PreviewHeader>

            <PreviewParagraph>{contact.email}</PreviewParagraph>
        </div>
    )
}

export default PreviewContact
