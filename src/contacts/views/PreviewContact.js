import React from 'react'

const PreviewContact = props => {
    const {item} = props

    return (
        <div>
            <h3>{`${item.firstName.charAt(0)}. ${item.lastName}`}</h3>
        </div>
    )
}

export default PreviewContact
