import React from 'react'

export default class ContactsList extends React.Component {
    render() {
        const contactsList = this.props.contacts.map(contact => <li>{contact.firstName + contact.lastName}</li>)
        return (
            <ul>
                {contactsList}
            </ul>
        )
    }
}