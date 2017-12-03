import React from 'react'
import {connect} from 'react-redux'

import AddContactForm from './AddContactForm'
import showResults from "./helpers";
import ContactsList from './ContactsList'

class Contacts extends React.Component {

    render() {
        return (
            <div>
                <h1>List of contacts</h1>
                <AddContactForm onSubmit={showResults}/>
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