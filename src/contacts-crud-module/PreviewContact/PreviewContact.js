import React from 'react'

import {PreviewHeader, PreviewParagraph} from '../../styled-components/master-detail-components'

const PreviewContact = props => {
    const {item} = props

    return (
        <div>
            <PreviewHeader>
                {`${item.firstName.charAt(0)}. ${item.lastName}`}
            </PreviewHeader>

            <PreviewParagraph>{item.email}</PreviewParagraph>
        </div>
    )
}

export default PreviewContact
