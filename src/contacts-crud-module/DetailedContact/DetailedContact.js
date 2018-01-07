import React from 'react'
import {connect} from 'react-redux'
import {Glyphicon} from 'react-bootstrap'

import {renderTextField, renderTextareaField} from '../../shared-utils/form-static-controls-factory'
import {removeContact} from "../../state/contacts"

import {RectButton} from '../../styled-components/button-components'
import './DetailedContact.css'

class DetailedContact extends React.Component {
    handleDeleteContactClick = () => this.props.removeContact(this.props.item.id)

    getLabelFromObjectKey = key => key.split(/(?=[A-Z])/)
        .map((v, i) => i ? v.toLowerCase() : v.charAt(0).toUpperCase() + v.slice(1)).join(' ')

    getContactDetail = (contact, detailKey) => (detailKey !== 'notes' ? renderTextField : renderTextareaField)
        .call(null, this.getLabelFromObjectKey(detailKey), contact[detailKey])

    render() {
        const {item: contact} = this.props
        const contactDetails = ['firstName', 'lastName', 'email', 'sex', 'notes']
            .map(detailKey => this.getContactDetail(contact, detailKey))

        return (
            <div className="DetailedContact__wrapper">
                {contactDetails}

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