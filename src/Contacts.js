import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import AddContactForm from './contacts/form/ContactForm'
import showResults from "./helpers";
import ContactsList from './ContactsList'

class Contacts extends React.Component {
    state = {
        addingContact: false,
        selectedContact: null
    }

    handleAddContactClick = () => {
        this.setState({
            addingContact: true,
            selectedContact: null
        })
    }

    handleEditContact = (event) => {
        const contactId = +event.target.dataset.contactId
        const selectedContact = this.props.contacts.filter(
            contact => contact.id === contactId
        )[0]

        this.setState({
            addingContact: false,
            selectedContact
        })
    }

    render() {
        return (
            <div>
                <h1>List of contacts</h1>
                <Button onClick={this.handleAddContactClick}>Add Contact</Button>
                {
                    this.state.addingContact ?
                        <AddContactForm onSubmit={showResults} initialValues ={{firstName: 'www@ala.pl'}}/> :
                        (
                            this.state.selectedContact ?
                                <h4>{JSON.stringify(this.state.selectedContact)}</h4> :
                                <h4>Click button to add new contact or select item from the list</h4>
                        )
                }
                <ContactsList
                    contacts={this.props.contacts}
                    onEditContact={this.handleEditContact}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts
})

export default connect(
    mapStateToProps
)(Contacts)