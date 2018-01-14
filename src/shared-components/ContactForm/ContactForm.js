import React from 'react'
import {Field} from 'redux-form'
import {FormGroup, ControlLabel, Glyphicon} from 'react-bootstrap'

import {renderTextField, renderTextareaField} from '../../shared-utils/form-controls-factory'

import {Wrapper} from '../../styled-components/miscellaneous-components'
import {ButtonsToolbar, ActionMessage} from '../../styled-components/form-components'
import {RectButton} from '../../styled-components/button-components'

const ContactForm = props => {
    const {error, handleSubmit, pristine, reset, submitting, submitSucceeded} = props

    return (
        <Wrapper maxWidth="380px">
            <form onSubmit={handleSubmit}>
                <Field
                    name="firstName"
                    component={renderTextField}
                    type="text"
                    label="First name"
                />

                <Field
                    name="lastName"
                    component={renderTextField}
                    type="text"
                    label="Last name"
                />

                <Field
                    name="email"
                    component={renderTextField}
                    type="email"
                    label="Email"
                />

                <FormGroup>
                    <ControlLabel bsClass="control-label-contact">
                        Sex
                    </ControlLabel>

                    <div>
                        <label className="control-label-contact">
                            <Field name="sex" component="input" type="radio" value="male"/>
                            {'  '}
                            Male
                        </label>
                        {'   '}
                        <label className="control-label-contact">
                            <Field name="sex" component="input" type="radio" value="female"/>
                            {'  '}
                            Female
                        </label>
                    </div>
                </FormGroup>

                <Field
                    name="notes"
                    component={renderTextareaField}
                    type="textarea"
                    label="Notes"
                />

                <ButtonsToolbar>
                    <RectButton
                        type="submit"
                        bgc={'#4caf50'}
                        disabled={pristine || submitting}
                    >
                        <Glyphicon glyph="send"/>
                        {' '}
                        {'Submit' + (submitting ? 'ting' : '')}
                    </RectButton>

                    <RectButton
                        type="button"
                        bgc={'#ff9800'}
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        <Glyphicon glyph="erase"/>
                        {' '}
                        Clear
                    </RectButton>

                    {props.cancelButton}
                </ButtonsToolbar>

                <ActionMessage {...{error, submitSucceeded}}>
                    {submitSucceeded && 'Contact has been added!'}
                    {error}
                </ActionMessage>
            </form>
        </Wrapper>
    )
}

export default ContactForm
