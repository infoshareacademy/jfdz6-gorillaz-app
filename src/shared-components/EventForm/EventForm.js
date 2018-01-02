import React from 'react'
import {Field} from 'redux-form'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Glyphicon
} from 'react-bootstrap'

import {RectButton} from '../../styled-components/button-components'
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
    const {error, handleSubmit, pristine, reset, submitting, submitSucceeded} = props

    return (
        <div className="EventForm__wrapper">
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

                <div className="EventForm__toolbar">
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
                </div>
                <HelpBlock>
                    {submitSucceeded && 'Event has been added!'}
                    {error}
                </HelpBlock>
            </form>
        </div>
    )
}

export default EventForm