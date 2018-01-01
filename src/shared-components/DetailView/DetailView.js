import React from 'react'
import {Glyphicon} from 'react-bootstrap'

import {RectButton} from '../../styled-components/button-components'

export default class EventDetailView extends React.Component {
    state = {
        isBeingEdited: false
    }

    componentWillReceiveProps = () => {
        this.setState({
            isBeingEdited: false
        })
    }

    handleEditItemClick = () => (
        this.setState({
            isBeingEdited: true
        })
    )

    handleCancelClick = () => (
        this.setState({
            isBeingEdited: false
        })
    )

    render() {
        const {item, DetailedItem, EditItem} = this.props

        return (
            this.state.isBeingEdited ?
                <div>
                    <EditItem item={item}>
                        <RectButton
                            bgc={'#2196f3'}
                            onClick={this.handleCancelClick}
                        >
                            <Glyphicon glyph="remove-circle"/>
                            {' '}
                            Cancel
                        </RectButton>
                    </EditItem>
                </div> :

                <div>
                    <DetailedItem item={item}>
                        <RectButton
                            bgc={'#4caf50'}
                            onClick={this.handleEditItemClick}
                        >
                            <Glyphicon glyph="pencil"/>
                            {' '}
                            Edit
                        </RectButton>
                    </DetailedItem>
                </div>
        )
    }
}
