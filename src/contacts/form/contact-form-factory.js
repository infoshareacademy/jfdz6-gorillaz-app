import React from 'react'
import {reset, reduxForm} from 'redux-form'

import ContactForm from './ContactForm'
import validate from './contact-form-validation'

const getContactForm = (formName, resetDelay) => {
    const onSubmitSuccess = (result, dispatch) => {
        resetDelay && setTimeout(() => dispatch(reset(formName)), resetDelay)
    }

    return reduxForm({
        form: formName,
        validate,
        onSubmitSuccess
    })(ContactForm)
}

export default getContactForm
