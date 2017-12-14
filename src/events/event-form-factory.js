import React from 'react'
import {reset, reduxForm} from 'redux-form'

import EventForm from './EventForm'
import validate from './event-form-validation'

const getEventForm = formName => {
    const onSubmitSuccess = (result, dispatch) => (
        dispatch(reset(formName))
    )

    return reduxForm({
        form: formName,
        validate,
        onSubmitSuccess
    })(EventForm)
}

export default getEventForm