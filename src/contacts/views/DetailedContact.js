import React from 'react'
import {connect} from 'react-redux'
import {
    Button,
    ButtonToolbar
} from 'react-bootstrap'

import {add, remove} from "../../state/contacts"

class DetailedContact extends React.Component {
    handleDeleteContactClick = () => {
        this.props.removeContact(this.props.item.id)
    }

    render() {
        const {item} = this.props

        return (
            <div>
                <h2>Contact details</h2>
                <h3>First Name: {item.firstName}</h3>
                <h3>Last Name: {item.lastName}</h3>
                <h5>Email: {item.email}</h5>
                <h5>Sex: {item.sex}</h5>
                <p>Notes: {item.notes}</p>

                <ButtonToolbar>
                    {this.props.children}

                    <Button onClick={this.handleDeleteContactClick}>
                        Delete
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addContact: (newContact) => dispatch(add(newContact)),
    removeContact: (contactId) => dispatch(remove(contactId))
})

export default connect(
    null,
    mapDispatchToProps
)(DetailedContact)