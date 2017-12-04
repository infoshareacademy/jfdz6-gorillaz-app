import React from 'react'
import {Button} from 'react-bootstrap'

export default class ContactsList extends React.Component {
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