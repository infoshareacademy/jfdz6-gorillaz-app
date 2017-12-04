import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import {remove} from './state/contacts'

class ContactsList extends React.Component {
    handleRemoveContactClick = (event) => {
        const contactId = +event.target.dataset.contactId

        this.props.removeContact(contactId)
    }

    render() {
        const contactsList = this.props.contacts.map(
            contact => (
                <li key={contact.id}>
                    {`${contact.firstName} ${contact.lastName}`}
                    <Button
                        onClick={this.props.onEditContact}
                        data-contact-id={contact.id}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={this.handleRemoveContactClick}
                        data-contact-id={contact.id}
                    >
                        Delete
                    </Button>
                </li>
            )
        )
        return (
            <ul>
                {contactsList}
            </ul>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    removeContact: (contactId) => dispatch(remove(contactId))
})

export default connect(
    null,
    mapDispatchToProps
)(ContactsList)