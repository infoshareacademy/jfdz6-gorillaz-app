import React from 'react'
import {Field} from 'redux-form'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button,
    ButtonToolbar,
    Glyphicon
} from 'react-bootstrap'

import './ContactForm.css'

const renderTextField = ({input, label, type, meta: {touched, error}}) => (
    <FormGroup
        validationState={touched ? (error ? 'error' : 'success') : null}
    >
        <ControlLabel
            bsClass="control-label-contact"
        >
            {label}
        </ControlLabel>

        <FormControl
            {...input}
            type={type}
            placeholder={label}
        />
        <FormControl.Feedback/>
        <HelpBlock>{touched && error ? error : null}</HelpBlock>
    </FormGroup>
)

const renderTextareaField = ({input, label, type}) => (
    <FormGroup>
        <ControlLabel
            bsClass="control-label-contact"
        >
            {label}
        </ControlLabel>

        <FormControl
            {...input}
            componentClass={type}
            placeholder={label}
            rows={4}
        />
    </FormGroup>
)

const ContactForm = props => {
    const {handleSubmit, pristine, reset, submitting, submitSucceeded} = props

    return (
        <div className="ContactForm__wrapper">
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
                    <ControlLabel
                        bsClass="control-label-contact"
                    >
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

                <ButtonToolbar>
                    <Button
                        type="submit"
                        bsStyle="success"
                        disabled={pristine || submitting}
                    >
                        <Glyphicon glyph="send"/>
                        {' '}
                        {'Submit' + (submitting ? 'ting' : '')}
                    </Button>

                    <Button
                        type="button"
                        bsStyle="warning"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        <Glyphicon glyph="erase"/>
                        {' '}
                        Clear
                    </Button>

                    {props.cancelButton}
                </ButtonToolbar>

                <HelpBlock>{submitSucceeded && 'Contact has been added!'}</HelpBlock>
            </form>
        </div>
    )
}

export default ContactForm
