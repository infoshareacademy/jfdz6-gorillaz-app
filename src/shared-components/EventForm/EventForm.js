import React from 'react'
import {Field} from 'redux-form'
import {Glyphicon} from 'react-bootstrap'

import {renderTextField, renderTextareaField} from '../../shared-utils/form-controls-factory'

import {Wrapper} from '../../styled-components/miscellaneous-components'
import {ButtonsToolbar, ActionMessage} from '../../styled-components/form-components'
import {RectButton} from '../../styled-components/button-components'

const EventForm = props => {
    const {error, handleSubmit, pristine, reset, submitting, submitSucceeded} = props

    return (
        <Wrapper>
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

                <ButtonsToolbar>
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
                </ButtonsToolbar>

                <ActionMessage {...{error, submitSucceeded}}>
                    {submitSucceeded && 'Event has been added!'}
                    {error}
                </ActionMessage>
            </form>
        </Wrapper>
    )
}

export default EventForm
