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

const EventForm = props => {
    const {handleSubmit, pristine, reset, submitting, submitSucceeded} = props

    return (
        <div className="form__wrapper">
            <form onSubmit={handleSubmit}>
                <Field
                    name="date"
                    component={renderTextField}
                    type="date"
                    label="Record event since"
                />

                <Field
                    name="title"
                    component={renderTextField}
                    type="text"
                    label="Event name"
                />

                <Field
                    name="payload"
                    component={renderTextareaField}
                    type="textarea"
                    label="Description"
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
                </ButtonToolbar>

                <HelpBlock>{submitSucceeded && 'Event has been added!'}</HelpBlock>
            </form>
        </div>
    )
}

export default EventForm