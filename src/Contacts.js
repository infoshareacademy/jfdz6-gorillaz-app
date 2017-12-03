import React from 'react'
import {connect} from 'react-redux'

import AddContactForm from './AddContactForm'
import showResults from "./helpers";

class Contacts extends React.Component {

    render() {
        return (
            <div>
                <h1>List of contacts</h1>
                <AddContactForm onSubmit={showResults}/>
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