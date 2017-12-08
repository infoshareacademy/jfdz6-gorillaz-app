import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Button,
    ButtonToolbar
} from 'react-bootstrap'

import validate from './eventFormValidation'

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
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <div className="form__wrapper">
            <form onSubmit={handleSubmit}>
                <Field
                    name="date"
                    component={renderTextField}
                    type="number"
                    label="Event date"
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
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'eventForm',
    validate,
})(EventForm);