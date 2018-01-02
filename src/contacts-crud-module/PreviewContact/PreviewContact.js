import React from 'react'

import './PreviewContact.css'

const PreviewContact = props => {
    const {item} = props

    return (
        <div className="PreviewContact__wrapper">
            <h4 className="PreviewContact__header">
                {`${item.firstName.charAt(0)}. ${item.lastName}`}
            </h4>

            <p className="PreviewContact__paragraph">
                {item.email}
            </p>
        </div>
    )
}

export default PreviewContact
