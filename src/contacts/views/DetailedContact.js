import React from 'react'
import {connect} from 'react-redux'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    ButtonToolbar,
    Glyphicon
} from 'react-bootstrap'

import {removeContact} from "../../state/contacts"
import './DetailedContact.css'

class DetailedContact extends React.Component {
    handleDeleteContactClick = () => {
        this.props.removeContact(this.props.item.id)
    }

    render() {
        const {item} = this.props

        return (
            <div className="DetailedContact__wrapper">

                <FormGroup>
                    <ControlLabel
                        bsClass="control-label-detailed-contact"
                    >
                        First name
                    </ControlLabel>

                    <FormControl.Static>
                        <span className="DetailedContact__paragraph">
                            {item.firstName}
                        </span>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel
                        bsClass="control-label-detailed-contact"
                    >
                        Last name
                    </ControlLabel>

                    <FormControl.Static>
                        <span className="DetailedContact__paragraph">
                            {item.lastName}
                        </span>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel
                        bsClass="control-label-detailed-contact"
                    >
                        Email
                    </ControlLabel>

                    <FormControl.Static>
                        <span className="DetailedContact__paragraph">
                            {item.email}
                        </span>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel
                        bsClass="control-label-detailed-contact"
                    >
                        Notes
                    </ControlLabel>

                    <FormControl.Static>
                        <span className="DetailedContact__paragraph DetailedContact__paragraph--justified">
                        {item.notes}
                        </span>
                    </FormControl.Static>
                </FormGroup>

                <ButtonToolbar>
                    {this.props.children}

                    <Button
                        bsStyle="danger"
                        onClick={this.handleDeleteContactClick}
                    >
                        <Glyphicon glyph="trash"/>
                        {' '}
                        Delete
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    removeContact: contactId => dispatch(removeContact(contactId))
})

export default connect(
    null,
    mapDispatchToProps
)(DetailedContact)