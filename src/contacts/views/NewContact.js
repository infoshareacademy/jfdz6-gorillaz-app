import React from 'react'
import {connect} from 'react-redux'

import {add} from "../../state/contacts"
import getContactForm from '../form/contact-form-factory'

class NewContact extends React.Component {
    handleSubmit = newContact => {
        this.props.addContact(newContact)
    }

    render() {
        const NewContactForm = getContactForm('newContactForm', 2000)

        return (
            <NewContactForm onSubmit={this.handleSubmit}/>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addContact: (newContact) => dispatch(add(newContact))
})

export default connect(
    null,
    mapDispatchToProps
)(NewContact)