import React from 'react'
import {Field} from 'redux-form'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button,
    ButtonToolbar
} from 'react-bootstrap'

import './ContactForm.css'

const renderTextField = ({input, label, type, meta: {touched, error}}) => (
    <FormGroup
        validationState={touched ? (error ? 'error' : 'success') : null}
    >
        <ControlLabel>{label}</ControlLabel>
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
        <ControlLabel>{label}</ControlLabel>
        <FormControl
            {...input}
            componentClass={type}
            placeholder={label}/>
    </FormGroup>
)

const ContactForm = props => {
    const {handleSubmit, pristine, reset, submitting, submitSucceeded} = props

    return (
        <div className="form__wrapper">
            <form onSubmit={handleSubmit}>
                <Field
                    name="firstName"
                    component={renderTextField}
                    type="text"
                    label="First Name"
                />

                <Field
                    name="lastName"
                    component={renderTextField}
                    type="text"
                    label="Last Name"
                />

                <Field
                    name="email"
                    component={renderTextField}
                    type="email"
                    label="Email"
                />

                <FormGroup>
                    <label>Sex</label>
                    <div>
                        <label>
                            <Field name="sex" component="input" type="radio" value="male"/>
                            {' '}
                            Male
                        </label>

                        <label>
                            <Field name="sex" component="input" type="radio" value="female"/>
                            {' '}
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
                        {'Submit' + (submitting ? 'ting' : '')}
                    </Button>

                    <Button
                        type="button"
                        bsStyle="warning"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
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
