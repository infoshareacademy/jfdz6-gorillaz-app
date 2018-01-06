import React from 'react'
import {Field} from 'redux-form'
import {HelpBlock, Glyphicon} from 'react-bootstrap'

import {renderTextField, renderTextareaField} from '../../shared-utils/events/event-fields-factory'

import {ButtonsToolbar} from '../../styled-components/form-components'
import {RectButton} from '../../styled-components/button-components'
import './EventForm.css'

const EventForm = props => {
    const {error, handleSubmit, pristine, reset, submitting, submitSucceeded} = props

    return (
        <div className="EventForm__wrapper">
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

                <HelpBlock>
                    {submitSucceeded && 'Event has been added!'}
                    {error}
                </HelpBlock>
            </form>
        </div>
    )
}

export default EventForm
