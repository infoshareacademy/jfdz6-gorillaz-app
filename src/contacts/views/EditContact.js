import React from 'react'
import {connect} from 'react-redux'

import {addContact, removeContact} from "../../state/contacts"
import getContactForm from '../form/contact-form-factory'

class EditContact extends React.Component {
    handleSubmit = newContact => {
        this.props.addContact(newContact)
        this.props.removeContact(this.props.item.id)
    }

    render() {
        const {item} = this.props
        const EditContactForm = getContactForm('editContactForm' + item.id)

        return (
            <EditContactForm
                onSubmit={this.handleSubmit}
                initialValues={{
                    firstName: item.firstName,
                    lastName: item.lastName,
                    email: item.email,
                    sex: item.sex,
                    notes: item.notes
                }}
                cancelButton ={this.props.children}
            />
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addContact: newContact => dispatch(addContact(newContact)),
    removeContact: contactId => dispatch(removeContact(contactId))
})

export default connect(
    null,
    mapDispatchToProps
)(EditContact)
