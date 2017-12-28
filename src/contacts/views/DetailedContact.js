import React from 'react'
import {connect} from 'react-redux'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Glyphicon
} from 'react-bootstrap'

import {removeContact} from "../../state/contacts"
import {RectButton} from '../../styled-components/button-components'
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

                <div className="DetailedContact__toolbar">
                    {this.props.children}

                    <RectButton
                        bgc={'#f44336'}
                        onClick={this.handleDeleteContactClick}
                    >
                        <Glyphicon glyph="trash"/>
                        {' '}
                        Delete
                    </RectButton>
                </div>
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