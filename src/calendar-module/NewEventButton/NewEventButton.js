import React from 'react'

import ModalButton from '../../shared-components/ModalButton/ModalButton'
import NewEvent from '../../events-crud-module/NewEvent/NewEvent'

const NewEventButton = props => (
    <ModalButton
        buttonType="AddEventButton"
        buttonName="+"
        modalGlyph="plus"
        modalTitle="Add new event"
    >
        <NewEvent/>
    </ModalButton>
)

export default NewEventButton
