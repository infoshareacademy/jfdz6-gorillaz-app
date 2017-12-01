import React from 'react';
import {Field, reduxForm} from 'redux-form';

import validate from './addContactFormValidation'

const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && (error && <span>{error}</span>)}
        </div>
    </div>
)

const AddContactForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="firstName"
                component={renderField}
                type="text"
                label="First Name"
            />
            <Field
                name="lastName"
                component={renderField}
                type="text"
                label="Last Name"
            />
            <Field
                name="email"
                component={renderField}
                type="email"
                label="Email"
            />
            <div>
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
            </div>
            <div>
                <label>Notes</label>
                <div>
                    <Field name="notes" component="textarea"/>
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'addContactForm',
    validate,
})(AddContactForm);
