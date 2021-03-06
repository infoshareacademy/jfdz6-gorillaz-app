import React from 'react'
import {Glyphicon} from 'react-bootstrap'

import {ButtonsToolbar} from '../../styled-components/form-components'
import {RectButton} from '../../styled-components/button-components'

const DetailedItemToolbar = props => (
    <ButtonsToolbar>
        <RectButton
            bgc={'#4caf50'}
            onClick={props.onEditItemClick}
        >
            <Glyphicon glyph="pencil"/>
            {' '}
            Edit
        </RectButton>

        <RectButton
            bgc={'#f44336'}
            onClick={props.onDeleteItemClick}
        >
            <Glyphicon glyph="trash"/>
            {' '}
            Delete
        </RectButton>
    </ButtonsToolbar>
)

export default DetailedItemToolbar
