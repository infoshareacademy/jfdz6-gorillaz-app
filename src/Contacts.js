import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import AddContactForm from './AddContactForm'
import showResults from "./helpers";
import ContactsList from './ContactsList'

class Contacts extends React.Component {
    state = {
        addingContact: false,
        selectedContact: null
    }

    handleAddContactClick = () => {
        this.setState({addingContact: true})
    }

    render() {
        return (
            <div>
                <h1>List of contacts</h1>
                <Button onClick={this.handleAddContactClick}>Add Contact</Button>
                {this.state.addingContact ? <AddContactForm onSubmit={showResults}/>
                    : <h4>Click button to add new contact or select item from the list</h4>}
                <ContactsList contacts={this.props.contacts}/>
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