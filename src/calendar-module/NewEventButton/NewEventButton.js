import React from 'react'

import ModalButton from '../../shared-components/ModalButton/ModalButton'
import NewEvent from '../../events-crud-module/NewEvent/NewEvent'

export default class NewEventButton extends React.Component {
    render = () => (
        <ModalButton
            buttonType="AddEventButton"
            buttonName="+"
            modalGlyph="plus"
            modalTitle="Add new event"
        >
            <NewEvent/>
        </ModalButton>
    )
}
