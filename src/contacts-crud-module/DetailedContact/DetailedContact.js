import React from 'react'
import {connect} from 'react-redux'
import {Glyphicon} from 'react-bootstrap'

import {renderTextField, renderTextareaField} from '../../shared-utils/form-static-controls-factory'
import {removeContact} from "../../state/contacts"

import {Wrapper} from '../../styled-components/miscellaneous-components'
import {ButtonsToolbar} from '../../styled-components/form-components'
import {RectButton} from '../../styled-components/button-components'

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
            <Wrapper maxWidth="380px">
                {contactDetails}

                <ButtonsToolbar>
                    {this.props.children}

                    <RectButton
                        bgc={'#f44336'}
                        onClick={this.handleDeleteContactClick}
                    >
                        <Glyphicon glyph="trash"/>
                        {' '}
                        Delete
                    </RectButton>
                </ButtonsToolbar>
            </Wrapper>
        )
    }

}

const mapDispatchToProps = dispatch => ({removeContact: contactId => dispatch(removeContact(contactId))})

export default connect(
    null,
    mapDispatchToProps
)(DetailedContact)