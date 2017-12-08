const validateEventForm = values => {
    const errors = {}
    if (!values.date) {
        errors.date = 'Required'
    } else if (values.date > 3112) {
        errors.date = 'Maximum date value is 3112'
    }
    if (!values.title) {
        errors.title = 'Required'
    } else if (values.title.length > 30) {
        errors.title = 'Must be 30 characters or less'
    }
    return errors
}

export default validateEventForm