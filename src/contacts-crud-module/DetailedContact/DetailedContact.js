import React from 'react'
import {connect} from 'react-redux'
import {Glyphicon} from 'react-bootstrap'

import {renderTextField, renderTextareaField} from '../../shared-utils/form-static-controls-factory'
import {removeContact} from "../../state/contacts"

import {RectButton} from '../../styled-components/button-components'
import './DetailedContact.css'

class DetailedContact extends React.Component {
    handleDeleteContactClick = () => this.props.removeContact(this.props.item.id)

    render() {
        const {item} = this.props
        const contactDetails = [
            {
                label: 'First name',
                content: item.firstName
            },
            {
                label: 'Last name',
                content: item.lastName
            },
            {
                label: 'Email',
                content: item.email
            },
            {
                label: 'Sex',
                content: item.sex
            },
            {
                label: 'Notes',
                content: item.notes
            }
        ].map(detail =>
            (detail.label !== 'Notes' ? renderTextField : renderTextareaField).call(null, detail.label, detail.content)
        )

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