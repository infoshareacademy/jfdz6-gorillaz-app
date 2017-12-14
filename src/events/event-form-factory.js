import React from 'react'
import {reset, reduxForm} from 'redux-form'

import EventForm from './EventForm'
import validate from './event-form-validation'

const getEventForm = formName => {
    const resetDelay = 2000
    const onSubmitSuccess = (result, dispatch) => {
        setTimeout(() => dispatch(reset(formName)), resetDelay)
    }

    return reduxForm({
        form: formName,
        validate,
        onSubmitSuccess
    })(EventForm)
}

export default getEventForm