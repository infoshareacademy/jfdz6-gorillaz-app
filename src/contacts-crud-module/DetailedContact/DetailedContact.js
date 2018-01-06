import React from 'react'
import {connect} from 'react-redux'
import {FormGroup, ControlLabel, FormControl, Glyphicon} from 'react-bootstrap'

import {removeContact} from "../../state/contacts"

import {DetailedParagraph, DetailedDescription} from '../../styled-components/master-detail-components'
import {RectButton} from '../../styled-components/button-components'
import './DetailedContact.css'

class DetailedContact extends React.Component {
    handleDeleteContactClick = () => this.props.removeContact(this.props.item.id)

    render() {
        const {item} = this.props

        return (
            <div className="DetailedContact__wrapper">
                <FormGroup>
                    <ControlLabel bsClass="control-label-custom">First name</ControlLabel>

                    <FormControl.Static>
                        <DetailedParagraph>{item.firstName}</DetailedParagraph>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel bsClass="control-label-custom">Last name</ControlLabel>

                    <FormControl.Static>
                        <DetailedParagraph>{item.lastName}</DetailedParagraph>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel bsClass="control-label-detailed-custom">Email</ControlLabel>

                    <FormControl.Static>
                        <DetailedParagraph>{item.email}</DetailedParagraph>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel bsClass="control-label-detailed-custom">Sex</ControlLabel>

                    <FormControl.Static>
                        <DetailedParagraph>{item.sex}</DetailedParagraph>
                    </FormControl.Static>
                </FormGroup>

                <FormGroup>
                    <ControlLabel bsClass="control-label-custom">Notes</ControlLabel>

                    <FormControl.Static>
                        <DetailedDescription>{item.notes}</DetailedDescription>
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

const mapDispatchToProps = dispatch => ({removeContact: contactId => dispatch(removeContact(contactId))})

export default connect(
    null,
    mapDispatchToProps
)(DetailedContact)