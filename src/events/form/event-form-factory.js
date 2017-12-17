import React from 'react'
import {reset, reduxForm} from 'redux-form'

import EventForm from './EventForm'
import validate from './event-form-validation'

const getEventForm = (formName, resetDelay) => {
    const onSubmitSuccess = (result, dispatch) => {
        resetDelay && setTimeout(() => dispatch(reset(formName)), resetDelay)
    }

    return reduxForm({
        form: formName,
        validate,
        onSubmitSuccess
    })(EventForm)
}

export default getEventForm