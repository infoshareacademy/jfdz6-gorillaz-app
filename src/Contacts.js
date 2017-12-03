import React from 'react'

import AddContactForm from './AddContactForm'
import showResults from "./helpers";

export default class Contacts extends React.Component {

    render() {
        return (
            <div>
                <h1>List of contacts</h1>
                <AddContactForm onSubmit={showResults}/>
            </div>
        )
    }
}