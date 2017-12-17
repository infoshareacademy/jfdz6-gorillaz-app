const validateEventForm = values => {
    const errors = {}

    if (!values.date) {
        errors.date = 'Required'
    }

    if (!values.title) {
        errors.title = 'Required'
    } else if (values.title.length > 20) {
        errors.title = 'Must be 20 characters or less'
    }

    return errors
}

export default validateEventForm