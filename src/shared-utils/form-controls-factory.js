import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'

import '../shared-components/EventForm/EventForm.css'

export const renderTextField = ({input, label, type, meta: {touched, error}}) => (
    <FormGroup validationState={touched ? (error ? 'error' : 'success') : null}>
        <ControlLabel bsClass="control-label-event">
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

export const renderTextareaField = ({input, label, type}) => (
    <FormGroup>
        <ControlLabel bsClass="control-label-event">
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
