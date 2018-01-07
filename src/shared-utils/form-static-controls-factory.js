import React from 'react'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

import {DetailedParagraph, DetailedDescription} from '../styled-components/master-detail-components'

export const renderField = (label, content, DetailComponent) => (
    <FormGroup>
        <ControlLabel bsClass="control-label-custom">{label}</ControlLabel>

        <FormControl.Static>
            <DetailComponent>{content}</DetailComponent>
        </FormControl.Static>
    </FormGroup>
)

export const renderTextField = (label, content) => renderField(label, content, DetailedParagraph)

export const renderTextareaField = (label, content) => renderField(label, content, DetailedDescription)
