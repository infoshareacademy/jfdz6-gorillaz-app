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

import './EventForm.css'

const renderTextField = ({input, label, type, meta: {touched, error}}) => (
    <FormGroup
        validationState={touched ? (error ? 'error' : 'success') : null}
    >
        <ControlLabel
            bsClass="control-label-event"
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
            bsClass="control-label-event"
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

const EventForm = props => {
    const {handleSubmit, pristine, reset, submitting, submitSucceeded} = props

    return (
        <div className="form__wrapper">
            <form onSubmit={handleSubmit}>
                <Field
                    name="date"
                    component={renderTextField}
                    type="date"
                    label="Date"
                />

                <Field
                    name="title"
                    component={renderTextField}
                    type="text"
                    label="Title"
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
                        <Glyphicon glyph="send" />
                        {' '}
                        {'Submit' + (submitting ? 'ting' : '')}
                    </Button>

                    <Button
                        type="button"
                        bsStyle="warning"
                        disabled={pristine || submitting}
                        onClick={reset}
                    >
                        <Glyphicon glyph="erase" />
                        {' '}
                        Clear
                    </Button>

                    {props.cancelButton}
                </ButtonToolbar>

                <HelpBlock>{submitSucceeded && 'Event has been added!'}</HelpBlock>
            </form>
        </div>
    )
}

export default EventForm